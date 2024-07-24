import db from "../models/index";

const getListLevel = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let listLevel = await db.Level.findAll({ raw: true }).catch((err) => {
        console.log(err);
        resolve({
          errCode: 2,
          message: "Error in BE!",
          error: err,
        });
      });

      for (let level of listLevel) {
        let listLevelTopic = await db.Level_Topic.findAll({
          where: { levelId: level.id },
        });

        let listTopicId = listLevelTopic.map(
          (levelTopic) => levelTopic.topicId
        );

        let listTopic = await db.Topic.findAll({
          where: {
            id: listTopicId,
          },
        });

        level.listTopicId = listTopic;
      }

      resolve({
        errCode: 0,
        message: "Get list level successfully!",
        listLevel: listLevel,
      });
    } catch (error) {
      console.log(error);

      reject({
        errCode: 3,
        message: "Get list level unsuccessfully!",
        error: error,
      });
    }
  });
};
const createLevel = async (listLevel) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Level.bulkCreate(listLevel).catch((err) => {
        console.log(err);
      });

      resolve({
        errCode: 0,
        message: "Create listLevel successfully!",
      });
    } catch (error) {
      reject({
        errCode: 2,
        message: "Create listLevel unsuccessfully!",
        error: error,
      });
    }
  });
};

const deleteLevel = async (listId) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? delete the word of topic
      await db.Level.destroy({
        where: {
          id: listId,
        },
      }).catch((err) => {
        return resolve({
          errCode: 2,
          message: "Delete list level unsuccessfully!",
        });
      });

      return resolve({
        errCode: 0,
        message: `Delete level id: ${listId} successfully!`,
      });
    } catch (error) {
      console.log(error);
      return reject({
        errCode: 3,
        message: "Delete list level unsuccessfully!",
        error: error,
      });
    }
  });
};

const updateLevel = async (levelId, levelName) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? update role
      await db.Level.update(
        {
          name: levelName,
        },
        {
          where: {
            id: levelId,
          },
        }
      ).catch((err) => {
        console.log(err);
        resolve({
          errCode: 0,
          message: `Update level unsuccessfully!`,
        });
      });
      resolve({
        errCode: 0,
        message: `Update level ${levelId} successfully!`,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: `Update school ${levelId} unsuccessfully!`,
        error: error,
      });
    }
  });
};

const addTopicLevel = async (levelId, listTopicId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let listLevelTopic = listTopicId.map((topicId) => {
        return {
          levelId: levelId,
          topicId,
        };
      });

      await db.Level_Topic.bulkCreate(listLevelTopic).catch((err) => {
        console.log(err);
      });

      resolve({
        errCode: 0,
        message: `Add topics to level ${levelId} successfully!`,
      });
    } catch (error) {
      resolve({
        errCode: 0,
        message: `Add topics to level ${levelId} unsuccessfully!`,
        error,
      });
    }
  });
};

const deleteTopicLevel = async (levelId, listTopicId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Level_Topic.destroy({
        where: {
          levelId: levelId,
          topicId: listTopicId,
        },
      }).catch((error) => {
        return resolve({
          errCode: 2,
          message: "Delete list topic from level unsuccessfully!",
          error,
        });
      });

      resolve({
        errCode: 0,
        message: `Delete topics from level ${levelId} successfully!`,
      });
    } catch (error) {
      return resolve({
        errCode: 3,
        message: "Delete list topic from level unsuccessfully!",
        error,
      });
    }
  });
};

const unlockLevel = async (levelId, studentId) => {
  await db.Level.findOne({
    where: { id: levelId },
  });

  let isUnlock = await db.Unlock.findOne({ where: { studentId, levelId } });

  if (!isUnlock) {
    //! Nếu chưa từng chơi màn đó thì tạo record
    await db.Unlock.create({ studentId, levelId }).catch((err) => {
      console.log(err);
    });
    console.log("Màn này chưa chơi");
  } else {
    console.log("Màn này đã chơi rồi");
  }
};

const currentLevel = async (studentId) => {
  return new Promise(async (resolve, reject) => {
    try {
      //! Tạo ma trận level
      let matrix = Array.from({ length: 3 }, () => Array(20).fill(0));

      let listLevelId = await db.Unlock.findAll({
        where: { studentId: studentId },
        attributes: ["levelId"],
        raw: true,
      }).catch((err) => {
        console.log(err);
      });

      listLevelId = listLevelId.map((element) => element.levelId);

      for (let levelId of listLevelId) {
        let row = (levelId % 3) - 1;
        let col = Math.ceil(levelId / 3) - 1;
        matrix[row][col] = 1;
      }

      console.log(matrix);

      resolve({
        errCode: 0,
        message: `Get current level of student ${studentId} successfully!`,
        levelMatrix: matrix,
      });
    } catch (error) {
      resolve({
        errCode: 0,
        message: `Get current level of student ${studentId} unsuccessfully!`,
        error,
      });
    }
  });
};

module.exports = {
  getListLevel,
  createLevel,
  deleteLevel,
  updateLevel,
  addTopicLevel,
  deleteTopicLevel,
  unlockLevel,
  currentLevel,
};
