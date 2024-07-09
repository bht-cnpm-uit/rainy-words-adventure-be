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

module.exports = {
  getListLevel,
  createLevel,
  deleteLevel,
  updateLevel,
  addTopicLevel,
  deleteTopicLevel,
};
