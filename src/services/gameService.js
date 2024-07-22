import db from "../models/index";

import { unlockLevel } from "./levelService";

const getLeaderboardByGame = (levelId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await db.Game.findAll({
        where: {
          levelId: levelId,
        },
        include: {
          model: db.Student,
          attributes: ["name", "grade", "phonenumber"],
        },
        attributes: ["score", "updatedAt"],
        order: [["score", "DESC"]],
      });

      if (result.length > 0) {
        resolve({
          message: "Get learderboard successfully!",
          errCode: 0,
          leaderboard: result,
        });
      } else {
        resolve({
          message: "Level does not have any student passing!",
          errCode: 1,
          leaderboard: result,
        });
      }
    } catch (e) {
      reject({
        message: "Fail to get leaderboard!",
        errCode: 2,
        output: e,
      });
    }
  });
};

const getLeaderboardAllGame = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = `
        SELECT
            students.id,
            students.name AS Name,
            schools.name AS School,
            students.grade AS Grade,
            SUM(score) AS Score,
            DATE_FORMAT(MAX(games.LastTime),
            '%d/%m/%Y') AS LastTime,
            totalTime as TotalTime
        FROM
            students
        INNER JOIN(
            WITH
                ranked_scores AS(
                SELECT
                    studentId,
                    levelId,
                    score,
                    updatedAt,
                    TIMESTAMPDIFF(SECOND, createdAt, updatedAt) AS totalTime,
                    ROW_NUMBER() OVER(
                    PARTITION BY studentId,
                    levelId
                ORDER BY
                    score
                DESC
                    ,
                    TIMESTAMPDIFF(SECOND, createdAt, updatedAt) ASC
                ) AS row_num
            FROM
                games)
                SELECT
                    studentId,
                    levelId,
                    score,
                    totalTime,
                updatedAt as LastTime
                FROM
                    ranked_scores
                WHERE
                    row_num = 1
            ) AS games
        ON
            students.id = games.studentId
        INNER JOIN schools ON students.schoolId = schools.id
        GROUP BY
            students.id,
            students.name,
            schools.name
        ORDER BY
            score
        DESC
      `;

      const result = await db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.SELECT,
      });

      if (result.length > 0) {
        resolve({
          message: "Get leaderboard successfully!",
          errCode: 0,
          leaderboard: result,
        });
      } else {
        resolve({
          message: "Leaderboard has no records!",
          errCode: 2,
          leaderboard: [],
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        message: "Fail to get leaderboard!",
        errCode: 2,
        output: e,
      });
    }
  });
};

const getWordsByProbability = (words, probabilities, numWords) => {
  // Phân loại các từ theo mức độ khó
  const levels = {
    Beginner: [],
    Intermediate: [],
    Advanced: [],
  };

  words.forEach((word) => {
    if (levels[word.levelVocab]) {
      levels[word.levelVocab].push(word);
    }
  });

  // Tính số lượng từ cần lấy cho mỗi mức độ khó
  const beginnerCount = Math.floor(probabilities[0] * numWords);
  const intermediateCount = Math.floor(probabilities[1] * numWords);
  const advancedCount = Math.floor(probabilities[2] * numWords);

  let result = [];

  // Hàm để lấy từ từ mức độ khó cụ thể
  const getWords = (level, count) => {
    let selectedWords = [];
    while (count > 0) {
      if (levels[level].length > 0) {
        selectedWords.push(levels[level].shift());
        count--;
      } else {
        if (level === "Advanced") {
          level = "Intermediate";
        } else if (level === "Intermediate") {
          level = "Beginner";
        } else {
          break;
        }
      }
    }
    return selectedWords;
  };

  result = result.concat(getWords("Advanced", advancedCount));
  result = result.concat(getWords("Intermediate", intermediateCount));
  result = result.concat(getWords("Beginner", beginnerCount));

  // Kiểm tra nếu vẫn chưa đủ số lượng từ yêu cầu thì lấy thêm từ mức độ Beginner
  if (result.length < numWords) {
    result = result.concat(getWords("Beginner", numWords - result.length));
  }

  return result;
};

const getRandomWords = (levelId, probabilities, numWords) => {
  return new Promise(async (resolve, reject) => {
    try {
      let listTopic = await db.Level_Topic.findAll({
        where: {
          levelId: levelId,
        },
        raw: true,
      }).then((levels) => {
        return levels.map((level) => level.topicId);
      });

      let listRandomWord = [];

      for (let topicId of listTopic) {
        let listWord = await db.Word.findAll({
          where: {
            topicId: topicId,
          },
          order: db.Sequelize.literal("rand()"),
        });

        listRandomWord = listRandomWord.concat(listWord);
      }

      let listRandomWordByProbability = getWordsByProbability(
        listRandomWord,
        probabilities,
        numWords
      );

      resolve({
        message: "Get list word successfully!",
        errCode: 0,
        listWord: listRandomWordByProbability,
      });
    } catch (error) {
      console.log(error);
      resolve(error);
    }
  });
};

const getAchievement = (cup) => {
  if (cup <= 0) return 0;
  if (cup == 1) return 1;
  if (cup == 2) return 2;
  if (cup >= 3 && cup < 5) return 3;
  if (cup >= 5 && cup < 7) return 4;
  return 5;
};

const saveGame = (levelId, studentId, score, items, time, minScore = 200) => {
  return new Promise(async (resolve, reject) => {
    try {
      let beforeItem = await currentItemsOfStudent(studentId);
      const endTime = new Date();
      console.log(time);
      const startTime = new Date(endTime.getTime() - time * 1000);

      console.log("Original time:", endTime);
      console.log("New time:", startTime);
      // Lưu record game
      let game = await db.Game.create({
        levelId: levelId,
        studentId: studentId,
        score: score,
        createdAt: startTime,
      }).catch((err) => {
        console.log(err);
      });
      //! Nếu điểm lớn hơn điểm tối thiểu thì unlock level
      let isPassLevel = true;
      if (score > minScore) {
        unlockLevel(levelId, studentId);

        console.log("Vượt qua level");
      } else {
        isPassLevel = false;
        console.log("Không vượt qua level");
      }

      // Thêm student id vào
      items = items.map((element) => {
        return {
          ...element,
          studentId,
        };
      });

      // Lưu số item kiếm được
      await db.Student_Item.bulkCreate(items).catch((err) => {
        console.log(err);
      });

      let gainedCup = 0;
      // logic check if student's level up
      let afterItem = await currentItemsOfStudent(studentId);

      for (let i = 0; i < 6; i++) {
        let countBefore = Math.floor(parseInt(beforeItem[i].count) / 500);
        let countAfter = Math.floor(parseInt(afterItem[i].count) / 500);

        gainedCup = gainedCup + (countAfter - countBefore);
      }

      let student = await db.Student.findOne({ where: { id: studentId } });
      let beforeCup = student.cup;
      let beforeAchievement = getAchievement(beforeCup);
      let afterAchievement = getAchievement(beforeCup + gainedCup);
      if (beforeAchievement != afterAchievement) {
        console.log("Them danh hieu");
        for (let j = beforeAchievement + 1; j <= afterAchievement; j++) {
          await db.Achievement_Student.create({
            studentId,
            achievementId: j + 1,
          });
        }
      }

      if (gainedCup > 0) {
        console.log("Tang cup");
        await db.Student.increment(
          {
            cup: gainedCup,
          },
          {
            where: {
              id: studentId,
            },
          }
        );
      }
      // Logic get achievement

      resolve({
        message: "Create game successfully!",
        errCode: 0,
        game: game,
        isGetCup: gainedCup > 0 ? true : false,
        isPassLevel,
      });
    } catch (error) {
      console.log("🚀 ~ returnnewPromise ~ error:", error);
      resolve({
        message: "Create game unsuccessfully!",
        errCode: 1,
      });
    }
  });
};

const currentItemsOfStudent = async (studentId) => {
  let query = `
        SELECT id, name, count
    FROM items LEFT JOIN
        (SELECT itemId, SUM(quantity) AS "count" 
        FROM student_item
        WHERE studentId = ?
        GROUP BY itemId 
        ORDER BY itemId) AS COUNT_ITEM
    ON items.id = COUNT_ITEM.itemId
  `;
  let currentItem = await db.sequelize.query(query, {
    replacements: [studentId],
    type: db.sequelize.QueryTypes.SELECT,
  });

  currentItem = currentItem.map((element) => {
    return {
      ...element,
      count: element.count || 0,
    };
  });

  return currentItem;
};

export {
  getLeaderboardByGame,
  getLeaderboardAllGame,
  getRandomWords,
  saveGame,
  currentItemsOfStudent,
};
