import db from "../models/index";

const getListTopic = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let listTopic = await db.Topic.findAll({ raw: true }).catch((err) => {
        console.log(err);
        resolve({
          errCode: 2,
          message: "Error in BE!",
          error: err,
        });
      });
      resolve({
        errCode: 0,
        message: "Get list rule successfully!",
        listTopic: listTopic,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: "Get list rule unsuccessfully!",
        error: error,
      });
    }
  });
};
const createTopic = async (nameEn, nameVi) => {
  return new Promise(async (resolve, reject) => {
    try {
      let topic = await db.Topic.create({
        nameEn: nameEn,
        nameVi: nameVi,
      }).catch((err) => {
        console.log(err);
      });

      resolve({
        errCode: 0,
        message: "Create topic successfully!",
        topic: topic,
      });
    } catch (error) {
      reject({
        errCode: 2,
        message: "Create topic unsuccessfully!",
        error: error,
      });
    }
  });
};

const deleteTopic = async (topicId) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? delete the word of topic
      await db.Word.destroy({
        where: {
          topicId: topicId,
        },
      }).catch((err) => {
        return resolve({
          errCode: 2,
          message: "Delete word of topic unsuccessfully!",
        });
      });

      //? delete the topic
      await db.Topic.destroy({
        where: {
          id: topicId,
        },
      }).catch((err) => {
        console.log(err);
        return resolve({
          errCode: 3,
          message: "Delete topic unsuccessfully!",
        });
      });

      return resolve({
        errCode: 0,
        message: `Delete topic ${topicId} successfully!`,
      });
    } catch (error) {
      console.log(error);
      return reject({
        errCode: 3,
        message: "Delete topic unsuccessfully!",
        error: error,
      });
    }
  });
};

const updateTopic = async (topicId, nameEn, nameVi) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? update role
      await db.Topic.update(
        {
          nameEn,
          nameVi,
        },
        {
          where: {
            id: topicId,
          },
        }
      ).catch((err) => {
        console.log(err);
        resolve({
          errCode: 0,
          message: `Update topic ${topicId} unsuccessfully!`,
        });
      });
      resolve({
        errCode: 0,
        message: `Update topic ${topicId} successfully!`,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: `Update topic ${topicId} unsuccessfully!`,
        error: error,
      });
    }
  });
};

module.exports = {
  getListTopic,
  createTopic,
  deleteTopic,
  updateTopic,
};
