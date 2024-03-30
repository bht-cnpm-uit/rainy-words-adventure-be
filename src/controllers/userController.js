import { handleUserLogin } from "../services/userService";
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

export { homePage, handleLogin };
