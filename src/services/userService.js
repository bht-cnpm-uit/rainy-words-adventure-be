import db from "../models/index";
import bcrypt from "bcryptjs";

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

let handleUserSignUp = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      var salt = bcrypt.genSaltSync(10);

      // Extract signup information from the request body
      let name = data.name;
      let schoolId = data.schoolId;
      let grade = data.grade;
      let birthday = data.birthday;
      let listWordId = data.listWordId;
      let phoneNumber = data.phoneNumber;
      let password = data.password;

      // Check if phoneNumber already exists
      const existingUser = await db.Student.findOne({
        where: { phoneNumber: phoneNumber },
      });
      if (existingUser) {
        resolve({ message: "Phone number already exists", errCode: "2" });
        //return res.status(400).json({ error: "Phone number already exists" });
      } else {
        password = bcrypt.hashSync(password, salt);
        const newUser = await db.Student.create({
          name,
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
      //res.status(500).json({ error: "An error occurred while signing up" });
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
