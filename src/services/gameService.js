import db from "../models/index";

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
        attributes: ["score","updatedAt"],
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
        SELECT students.id, students.name as Name, schools.name as School,students.grade as Grade, SUM(score) AS Score,  DATE_FORMAT(MAX(games.LastTime), '%d/%m/%Y') AS LastTime
        FROM students INNER JOIN
        (SELECT levelId, studentId, MAX(score) as score, updatedAt as LastTime
        FROM games
        GROUP BY levelId, studentId) AS games
          ON students.id = games.studentId 
        INNER JOIN schools 
          ON students.schoolId = schools.id
        GROUP BY students.id, students.name, schools.name
        ORDER BY score DESC
      `;

      const result = await db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.SELECT,
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
      console.log(e);
      reject({
        message: "Fail to get leaderboard!",
        errCode: 2,
        output: e,
      });
    }
  });
};

const getRandomWords = (levelId, levelVocab) => {
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
            levelVocab: levelVocab,
            topicId: topicId,
          },
          order: db.Sequelize.literal("rand()"),
          limit: 5,
        });

        listRandomWord = listRandomWord.concat(listWord);
      }

      resolve({
        message: "Get list word successfully!",
        errCode: 0,
        listWord: listRandomWord,
      });
    } catch (error) {
      console.log(error);
      resolve(error);
    }
  });
};

const saveGame = (levelId, studentId, score) => {
  return new Promise(async (resolve, reject) => {
    try {
      let game = await db.Game.create({
        levelId: levelId,
        studentId: studentId,
        score: score,
      }).catch((err) => {
        console.log(err);
      });

      let isLevelUp = false;
      // logic check if student's level up
      resolve({
        message: "Create game successfully!",
        errCode: 0,
        game: game,
        isLevelUp: isLevelUp,
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

export {
  getLeaderboardByGame,
  getLeaderboardAllGame,
  getRandomWords,
  saveGame,
};
