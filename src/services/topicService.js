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
const createTopic = async (Ten, GiaTri) => {
  return new Promise(async (resolve, reject) => {
    try {
      let rule = await db.ThamSo.create({
        Ten: Ten,
        GiaTri: GiaTri,
      }).catch((err) => {
        console.log(err);
      });

      resolve({
        errCode: 0,
        message: "Create rule successfully!",
      });
    } catch (error) {
      reject({
        errCode: 2,
        message: "Create rule unsuccessfully!",
        error: error,
      });
    }
  });
};
const deleteTopic = async (MaThamSo) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? delete the rule
      await db.ThamSo.destroy({
        where: {
          MaThamSo: MaThamSo,
        },
      }).catch((err) => {
        resolve({
          errCode: 2,
          message: "Delete rule unsuccessfully!",
        });
      });

      resolve({
        errCode: 0,
        message: `Delete rule ${MaThamSo} successfully!`,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: "Delete rule unsuccessfully!",
        error: error,
      });
    }
  });
};

const updateTopic = async (MaThamSo, GiaTri) => {
  return new Promise(async (resolve, reject) => {
    try {
      //? update role
      await db.ThamSo.update(
        {
          GiaTri: GiaTri,
        },
        {
          where: {
            MaThamSo: MaThamSo,
          },
        }
      ).catch((err) => {
        console.log(err);
        resolve({
          errCode: 0,
          message: `Update rule ${MaThamSo} unsuccessfully!`,
        });
      });
      resolve({
        errCode: 0,
        message: `Update rule ${MaThamSo} successfully!`,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: `Update rule ${MaThamSo} unsuccessfully!`,
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
