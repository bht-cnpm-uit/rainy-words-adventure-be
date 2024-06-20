import {
  getLeaderboardByGame,
  getLeaderboardAllGame,
  getRandomWords,
  saveGame,
} from "../services/gameService";

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

const getAllGameLeaderboard = async (req, res) => {
  let leaderboad = await getLeaderboardAllGame();
  return res.status(200).json(leaderboad);
};

const getNewGame = async (req, res) => {
  let levelId = req.body.levelId;
  let levelVocab = req.body.levelVocab;
  if (!levelId || !levelVocab) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameters",
    });
  }
  let listWord = await getRandomWords(levelId, levelVocab);
  return res.status(200).json(listWord);
};
const postSaveGame = async (req, res) => {
  const { levelId, studentId, score } = req.body;
  if (!levelId || !studentId || !score) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameters",
    });
  }
  let response = await saveGame(levelId, studentId, score);
  return res.status(200).json(response);
};

export { getGameLeaderboard, getAllGameLeaderboard, getNewGame, postSaveGame };
