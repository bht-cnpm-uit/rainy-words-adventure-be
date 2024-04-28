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

export { getLeaderboardByGame };
