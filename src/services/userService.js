import db from "../models/index";
import bcrypt from "bcryptjs";

let checkUsername = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Student.findOne({
        where: { username: username },
      });
      if (user) {
        resolve(user);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let handleUserLogin = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let users = await checkUsername(username);
      if (users) {
        // User already exists
        let user = await db.Student.findOne({
          attributes: ["username", "password", "id"],
          where: { username: username },
          raw: true,
        });

        if (user) {
          let check;
          //let isTruePassword = bcrypt.compareSync(password, user.password);
          if (user.password === password) {
            check = 1;
          } else {
            check = 0;
          }
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Login success";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 1;
            userData.errMessage = "Wrong password!";
          }
        }
      } else {
        userData.errCode = 2;
        userData.errMessage = `Your username isn's exists in our system. Please try again!`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let handleUserSignUp = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Extract signup information from the request body
      const { schoolId, grade, birthday, listWordId, phoneNumber, password } =
        data;

      // Check if phoneNumber already exists
      const existingUser = await db.Student.findOne({
        where: { phoneNumber: phoneNumber },
      });
      if (existingUser) {
        resolve({ message: "Phone number already exists", statusCode: "400" });
        //return res.status(400).json({ error: "Phone number already exists" });
      } else {
        const newUser = await db.Student.create({
          schoolId,
          grade,
          birthday,
          listWordId,
          phoneNumber,
          password,
        });

        // Send a success response
        //res.status(201).json(newUser);
        resolve({
          userInfo: newUser,
          message: "Sign up sucessfully",
          statusCode: "201",
        });
      }
      // Create a new user in the database
    } catch (error) {
      // Handle any errors
      console.error("Error signing up:", error);
      reject({
        message: "An error occurred while signing up",
        statusCode: "500",
      });
      //res.status(500).json({ error: "An error occurred while signing up" });
    }
  });
};

export { handleUserLogin, handleUserSignUp };
