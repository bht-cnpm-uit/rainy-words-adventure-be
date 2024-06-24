import db from "../models/index";

const getListWord = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let listWord = await db.Word.findAll({ raw: true }).catch((err) => {
        console.log(err);
        resolve({
          errCode: 2,
          message: "Error in BE!",
          error: err,
        });
      });
      resolve({
        errCode: 0,
        message: "Get list word successfully!",
        listWord: listWord,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: "Get list word unsuccessfully!",
        error: error,
      });
    }
  });
};
const createWord = async (listWord) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(listWord);

      db.Word.bulkCreate(listWord)
        .catch((err) => {
          console.log(err);
        })
        .catch((err) => console.log(err));

      resolve({
        errCode: 0,
        message: "Create listWord successfully!",
      });
    } catch (error) {
      reject({
        errCode: 2,
        message: "Create listWord unsuccessfully!",
        error: error,
      });
    }
  });
};

const deleteWord = async (listId) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? delete the word of topic
      await db.Word.destroy({
        where: {
          id: listId,
        },
      }).catch((err) => {
        return resolve({
          errCode: 2,
          message: "Delete list word unsuccessfully!",
        });
      });

      return resolve({
        errCode: 0,
        message: `Delete word id: ${listId} successfully!`,
      });
    } catch (error) {
      console.log(error);
      return reject({
        errCode: 3,
        message: "Delete list word unsuccessfully!",
        error: error,
      });
    }
  });
};

const updateWord = async (
  wordId,
  levelVocab,
  vocab,
  topicId,
  phonetic,
  vietnamese,
  example
) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? update role
      await db.Word.update(
        {
          levelVocab,
          vocab,
          topicId,
          phonetic,
          vietnamese,
          example,
        },
        {
          where: {
            id: wordId,
          },
        }
      ).catch((err) => {
        console.log(err);
        resolve({
          errCode: 0,
          message: `Update word unsuccessfully!`,
        });
      });
      resolve({
        errCode: 0,
        message: `Update word ${wordId} successfully!`,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: `Update word ${wordId} unsuccessfully!`,
        error: error,
      });
    }
  });
};

module.exports = {
  getListWord,
  createWord,
  deleteWord,
  updateWord,
};
