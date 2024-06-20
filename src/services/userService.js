import db from "../models/index";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

let checkPhoneNumber = (phoneNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Student.findOne({
        where: { phoneNumber: phoneNumber },
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
let handleUserLogin = (phoneNumber, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let users = await checkPhoneNumber(phoneNumber);
      if (users) {
        // User already exists
        let user = await db.Student.findOne({
          attributes: ["phoneNumber", "password", "id"],
          where: { phoneNumber: phoneNumber },
          raw: true,
        });

        if (user) {
          let check;
          //let isTruePassword = bcrypt.compareSync(password, user.password);
          if (bcrypt.compareSync(password, user.password)) {
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

let handleUserSignUp = (
  name,
  schoolId,
  grade,
  birthday,
  phoneNumber,
  password
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let salt = bcrypt.genSaltSync(10);

      // Check if phoneNumber already exists
      const existingUser = await db.Student.findOne({
        where: { phoneNumber: phoneNumber },
      });
      if (existingUser) {
        resolve({ message: "Phone number already exists", errCode: "2" });
        //return res.status(400).json({ error: "Phone number already exists" });
      } else {
        let hashPassword = bcrypt.hashSync(password, salt);
        console.log("🚀 ~ returnnewPromise ~ hashPassword:", hashPassword);
        let id = uuidv4();
        console.log("🚀 ~ returnnewPromise ~ id:", id);

        const newUser = await db.Student.create({
          id: id,
          name: name,
          schoolId: schoolId,
          grade: grade,
          birthday: birthday,
          phoneNumber: phoneNumber,
          password: hashPassword,
          cup: 0,
        });

        // Send a success response
        //res.status(201).json(newUser);
        resolve({
          userInfo: newUser,
          message: "Sign up sucessfully",
          errCode: "0",
        });
      }
      // Create a new user in the database
    } catch (error) {
      // Handle any errors
      console.error("Error signing up:", error);
      reject({
        message: "An error occurred while signing up",
        error: "1",
      });
    }
  });
};

let handleUserUpdate = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Extract user ID from request parameters
      const { id, schoolId, grade, birthday, phoneNumber, password } = data;

      // Find the user by ID
      const user = await db.Student.findByPk(id);

      // Check if phoneNumber already exists for another user
      if (phoneNumber !== user.phoneNumber) {
        const existingUser = await db.Student.findOne({
          where: { phoneNumber },
        });
        if (existingUser) {
          resolve({
            message: "Phone number already exists",
            statusCode: "400",
          });
        } else {
          // Update user information
          user.schoolId = schoolId || user.schoolId;
          user.grade = grade || user.grade;
          user.birthday = birthday || user.birthday;
          user.phoneNumber = phoneNumber || user.phoneNumber;
          user.password = password || user.password;

          // Save the updated user information to the database
          await user.save();

          resolve({
            userInfo: user,
            message: "Update sucessfully",
            statusCode: "201",
          });
        }
      }
    } catch (error) {
      // Handle any errors
      reject({
        message: "An error occurred while signing up",
        statusCode: "500",
      });
    }
  });
};

let handleUserChangePassword = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Extract user ID from request parameters
      const { phoneNumber, password } = data;

      // Find the user by ID
      const user = await db.Student.findOne({
        where: { phoneNumber: phoneNumber },
      });

      if (user) {
        // Update user password
        user.password = password || user.password;

        // Save the updated user information to the database
        await user.save();

        resolve({
          userInfo: user,
          message: "Change password sucessfully",
          statusCode: "201",
        });
      }
    } catch (error) {
      // Handle any errors
      reject({
        message: "An error occurred while signing up",
        statusCode: "500",
      });
    }
  });
};

export {
  handleUserLogin,
  handleUserSignUp,
  handleUserUpdate,
  handleUserChangePassword,
};
