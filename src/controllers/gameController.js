import { getLeaderboardByGame } from "../services/gameService";

const getGameLeaderboard = async (req, res) => {
  let levelId = req.body.levelId;
  if (!levelId) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter !",
    });
  }
  let leaderboad = await getLeaderboardByGame(levelId);
  return res.status(200).json(leaderboad);
};

export { getGameLeaderboard };
