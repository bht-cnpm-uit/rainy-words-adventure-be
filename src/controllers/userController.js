import {
  handleUserLogin,
  handleUserSignUp,
  handleUserUpdate,
  handleUserChangePassword,
} from "../services/userService";
// example login

let homePage = async (req, res) => {
  res.send("Hello world");
};

let handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter !",
    });
  }
  let userData = await handleUserLogin(username, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData : {},
  });
};

let handleSignUp = async (req, res) => {
  let signupData = req.body;
  console.log(signupData);
  let userData = await handleUserSignUp(signupData);
  return res.status(200).json(userData);
};

let handleUpdate = async (req, res) => {
  let updateData = req.body;
  console.log(updateData);
  let userData = await handleUserUpdate(updateData);
  return res.status(200).json(userData);
};

let handleChangePassword = async (req, res) => {
  let changePasswordData = req.body;
  console.log(changePasswordData);
  let userData = await handleUserChangePassword(changePasswordData);
  return res.status(200).json(userData);
};

export {
  homePage,
  handleLogin,
  handleSignUp,
  handleUpdate,
  handleChangePassword,
};
