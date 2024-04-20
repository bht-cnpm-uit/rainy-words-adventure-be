import { getLeaderboardByGame } from "../services/gameService";

const getGameLeaderboard = async (req, res) => {
  let levelId = req.body.levelId;
  let leaderboad = await getLeaderboardByGame(levelId);
  console.log(leaderboad);
  if (leaderboad.length <= 0) {
    return res.status(200).json("Not found game");
  } else {
    return res.status(200).json("Found");
  }
};

export { getGameLeaderboard };
