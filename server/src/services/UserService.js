const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generalAccessToken, generalRefreshToken } = require("./JwtService");
const JwtService = require("../services/JwtService");
//sign-up
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, phone } = newUser;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser) {
        return resolve({
          status: "Err",
          message: "The email is already registered!",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const createdUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
      });
      return resolve({
        status: "Ok",
        message: "User created Successfully",
        data: createdUser,
      });
    } catch (error) {
      return reject(error);
    }
  });
};

//sign-in(login)
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = userLogin;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (!checkUser) {
        return resolve({
          status: "Err",
          message: "The user is not registered!",
        });
      }
      const comparePassword = await bcrypt.compare(
        password,
        checkUser.password
      );
      // console.log("comparePassword: ", comparePassword);
      if (!comparePassword) {
        return resolve({
          status: "Err",
          message: "Email or Password incorrect",
        });
      }
      //access_token
      const access_token = await generalAccessToken({
        id: checkUser._id,
        isAdmin: checkUser.isAdmin,
      });
      // console.log("access_token: ", access_token);
      //refresh_token
      const refresh_token = await generalRefreshToken({ id: checkUser._id });
      // console.log("refresh_token: ", refresh_token);

      return resolve({
        status: "Ok",
        message: "User Login Successfully",
        checkUser,
        access_token,
        refresh_token,
      });

      // }
    } catch (error) {
      return reject(error);
    }
  });
};

//updateUser
const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });
      console.log("CheckUser: ", checkUser);
      if (!checkUser) {
        return resolve({
          status: "Err",
          message: "The user is not registered!",
        });
      }
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      console.log("updatedUser: ", updatedUser);

      return resolve({
        status: "Ok",
        message: "User Update Successfully",
        data: updatedUser,
      });

      // }
    } catch (error) {
      return reject(error);
    }
  });
};

//deleteUser
const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });
      console.log("CheckUser: ", checkUser);
      if (!checkUser) {
        return resolve({
          status: "Err",
          message: "The user is not registered!",
        });
      }
      const deletedUser = await User.findByIdAndDelete(id);

      return resolve({
        status: "Ok",
        message: "User DELETED Successfully",
      });

      // }
    } catch (error) {
      return reject(error);
    }
  });
};

//getAllUser
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUser = await User.find();

      return resolve({
        status: "Ok",
        message: "Get All User Successfully",
        data: allUser,
      });

      // }
    } catch (error) {
      return reject(error);
    }
  });
};

//getDetailsUser
const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ _id: id });
      if (!user) {
        return resolve({
          status: "Err",
          message: "The user is not registered!",
        });
      }

      return resolve({
        status: "Ok",
        message: "Get Details User Successfully",
        data: user,
      });

      // }
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
};
