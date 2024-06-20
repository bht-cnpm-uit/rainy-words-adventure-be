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
        attributes: ["score"],
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
      let result = await db.Game.findAll({
        attributes: [
          "studentId",
          [db.sequelize.fn("sum", db.sequelize.col("score")), "total_score"],
        ],
        group: ["studentId"],

        include: {
          model: db.Student,
          attributes: ["name", "grade", "phonenumber"],
        },
        order: [["total_score", "DESC"]],
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

const getRandomWords = (levelId, levelVocab) => {
  return new Promise((resolve, reject) => {
    try {
      let listWord = db.Word.findAll({
        where: {
          levelVocab: levelVocab,
        },
        include: {
          model: db.Topic,
          include: {
            model: db.Level_Topic,
            where: {
              levelId: levelId,
            },
          },
        },
      });

      resolve(listWord);
    } catch (error) {
      reject(error);
    }
  });
};

const saveGame = (levelId, studentId, score) => {
  return new Promise((resolve, reject) => {
    try {
      let game = db.Game.create({
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
