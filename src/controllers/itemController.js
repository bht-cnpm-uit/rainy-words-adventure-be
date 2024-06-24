import {
  getListItem,
  createItem,
  deleteItem,
  updateItem,
} from "../services/itemService";

const getAllItem = async (req, res) => {
  let response = await getListItem();
  return res.status(200).json(response);
};
const postCreateItem = async (req, res) => {
  const { listItem } = req.body;
  if (!listItem) {
    return res.status(500).json({
      message: "Missing input parameters",
      errCode: 1,
    });
  }
  let response = await createItem(listItem);
  return res.status(200).json(response);
};
const postDeleteItem = async (req, res) => {
  const { listId } = req.body;
  if (!listId) {
    return res.status(500).json({
      message: "Missing input parameters",
      errCode: 1,
    });
  }
  let response = await deleteItem(listId);
  return res.status(200).json(response);
};
const postUpdateItem = async (req, res) => {
  const { itemId, itemName } = req.body;
  if (!itemId || !itemName) {
    return res.status(500).json({
      message: "Missing input parameters",
      errCode: 1,
    });
  }
  let response = await updateItem(itemId, itemName);
  return res.status(200).json(response);
};
module.exports = {
  getAllItem,
  postCreateItem,
  postDeleteItem,
  postUpdateItem,
};
