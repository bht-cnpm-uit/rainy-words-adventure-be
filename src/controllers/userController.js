import {
  handleUserLogin,
  handleUserSignUp,
  handleUserUpdate,
  handleUserChangePassword,
} from "../services/userService";
// example login

let handleLogin = async (req, res) => {
  const { phoneNumber, password } = req.body;
  if (!phoneNumber || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter !",
    });
  }
  let response = await handleUserLogin(phoneNumber, password);
  return res.status(200).json(response);
};

let handleSignUp = async (req, res) => {
  let { name, schoolId, grade, birthday, phoneNumber, password } = req.body;

  if (!phoneNumber || !password || !name || !schoolId || !grade || !birthday) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter !",
    });
  }
  console.log(req.body);
  let userData = await handleUserSignUp(
    name,
    schoolId,
    grade,
    birthday,
    phoneNumber,
    password
  );
  return res.status(200).json(userData);
};

let handleUpdate = async (req, res) => {
  const {
    schoolId,
    grade,
    birthday,
    phoneNumber,
    oldPassword,
    newPassword,
    isForgotPassword,
  } = req.body;

  let response = await handleUserUpdate(
    schoolId,
    grade,
    birthday,
    phoneNumber,
    oldPassword,
    newPassword,
    isForgotPassword
  );
  return res.status(200).json(response);
};

let handleChangePassword = async (req, res) => {
  let changePasswordData = req.body;
  console.log(changePasswordData);
  let userData = await handleUserChangePassword(changePasswordData);
  return res.status(200).json(userData);
};

export { handleLogin, handleSignUp, handleUpdate, handleChangePassword };
