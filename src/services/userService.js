import db from "../models/index";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
let salt = bcrypt.genSaltSync(10);

let handleUserLogin = (phoneNumber, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let student = await db.Student.findOne({
        where: { phoneNumber: phoneNumber },
        raw: true,
      });

      if (student) {
        let checkPassword = bcrypt.compareSync(password, student.password);

        if (!checkPassword) {
          return resolve({
            message: "Wrong password!",
            errCode: 2,
          });
        }
      } else {
        return resolve({
          message: "Phonenumber does not exist!",
          errCode: 1,
        });
      }
      return resolve({
        student: student,
        message: "Login sucessfully!",
        errCode: 0,
      });
    } catch (e) {
      return resolve({
        message: "Server bug!",
        errCode: 0,
      });
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
        errCode: "1",
      });
    }
  });
};

let handleUserUpdate = (
  schoolId,
  grade,
  birthday,
  phoneNumber,
  oldPassword,
  newPassword,
  isForgotPassword
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await db.Student.findOne({
        where: {
          phoneNumber: phoneNumber,
        },
      });

      if (!student) {
        resolve({
          message: "Student does not exist",
          errCode: "3",
        });
      } else {
        //update

        if (!isForgotPassword) {
          let checkPassword = bcrypt.compareSync(oldPassword, student.password);
          if (!checkPassword) {
            console.log("OKE");
            return resolve({
              message: "Wrong password",
              errCode: "4",
            });
          }
        }

        let hashNewPassword = bcrypt.hashSync(newPassword, salt);

        await student
          .update({
            schoolId: schoolId,
            grade: grade,
            birthday: birthday,
            password: hashNewPassword,
          })
          .catch((err) => console.log(err));

        resolve({
          studentInfo: student,
          message: "Update student successfully",
          errCode: "0",
        });
      }
    } catch (error) {
      console.log(error);
      // Handle any errors
      reject({
        message: "An error occurred while signing up",
        errCode: "4",
      });
    }
  });
};

let getListStudent = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let listStudent = await db.Student.findAll(
        // { raw: true },
        {
          attributes: {
            exclude: ["password"],
          },
        }
      ).catch((err) => {
        console.log(err);
        resolve({
          errCode: 2,
          message: "Error in BE!",
          error: err,
        });
      });
      resolve({
        errCode: 0,
        message: "Get list users successfully!",
        listStudent: listStudent,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: "Get list users unsuccessfully!",
        error: error,
      });
    }
  });
};

let studentAchievement = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = `
        SELECT achievementId AS id, name
        FROM achievement_student 
        INNER JOIN achievements
        ON achievement_student.achievementId = achievements.id
        WHERE studentId = ?
      `;
      let listAchievement = await db.sequelize
        .query(query, {
          replacements: [id],
          type: db.sequelize.QueryTypes.SELECT,
        })
        .catch((err) => {
          console.log(err);
          resolve({
            errCode: 2,
            message: "Error in BE!",
            error: err,
          });
        });
      resolve({
        errCode: 0,
        message: "Get list achievement successfully!",
        listAchievement,
      });
    } catch (error) {
      reject({
        errCode: 3,
        message: "Get list achievement unsuccessfully!",
        error: error,
      });
    }
  });
};

export {
  handleUserLogin,
  handleUserSignUp,
  handleUserUpdate,
  getListStudent,
  studentAchievement,
};
