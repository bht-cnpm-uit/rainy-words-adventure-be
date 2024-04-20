import db from "../models/index";

const getLeaderboardByGame = (levelId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await db.Game.findAll({
        where: { levelId: levelId },
        order: [["score", "DESC"]],
        raw: true,
      });
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

export { getLeaderboardByGame };
