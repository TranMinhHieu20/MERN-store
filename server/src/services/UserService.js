const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

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

//sign-in
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
      const comparePassword = await bcrypt.compareSync(
        password,
        checkUser.password
      );
      console.log("comparePassword: ", comparePassword);
      if (!comparePassword) {
        return resolve({
          status: "Err",
          message: "Email or Password incorrect",
        });
      }
      return resolve({
        status: "Ok",
        message: "User Login Successfully",
        data: checkUser,
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
};
