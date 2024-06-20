import {
  getListTopic,
  createTopic,
  deleteTopic,
  updateTopic,
} from "../services/topicService";

const getAllTopic = async (req, res) => {
  let response = await getListTopic();
  return res.status(200).json(response);
};
const postCreateTopic = async (req, res) => {
  const { nameEn, nameVi } = req.body;
  if (!nameEn || !nameVi) {
    return res.status(500).json({
      message: "Missing input parameters",
      errCode: 1,
    });
  }
  let response = await createTopic(nameEn, nameVi);
  return res.status(200).json(response);
};
const postDeleteTopic = async (req, res) => {
  const { topicId } = req.body;
  if (!topicId) {
    return res.status(500).json({
      message: "Missing input parameters",
      errCode: 1,
    });
  }
  let response = await deleteTopic(topicId);
  return res.status(200).json(response);
};
const postUpdateTopic = async (req, res) => {
  const { MaThamSo, GiaTri } = req.body;
  if (!MaThamSo || !GiaTri) {
    return res.status(500).json({
      message: "Missing input parameters",
      errCode: 1,
    });
  }
  let response = await updateTopic(MaThamSo, GiaTri);
  return res.status(200).json(response);
};
module.exports = {
  getAllTopic,
  postCreateTopic,
  postDeleteTopic,
  postUpdateTopic,
};
