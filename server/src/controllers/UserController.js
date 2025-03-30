const UserService = require("../services/UserService");

//sign-up
const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isCheckEmail = emailRegex.test(email);
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(400).json({
        status: "Err",
        message: "All fields are required!",
      });
    } else if (!isCheckEmail) {
      return res.status(400).json({
        status: "Err",
        message: "Invalid email format!",
      });
    } else if (password !== confirmPassword) {
      return res.status(400).json({
        status: "Err",
        message: "Password and confirm password do not match!",
      });
    }
    const response = await UserService.createUser(req.body);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: error });
  }
};

//sign-in
const loginUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isCheckEmail = emailRegex.test(email);
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(400).json({
        status: "Err",
        message: "All fields are required!",
      });
    } else if (!isCheckEmail) {
      return res.status(400).json({
        status: "Err",
        message: "Invalid email format!",
      });
    } else if (password !== confirmPassword) {
      return res.status(400).json({
        status: "Err",
        message: "Password and confirm password do not match!",
      });
    }
    const response = await UserService.loginUser(req.body);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: error });
  }
};

//updateUser
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    if (!userId) {
      return res.status(400).json({
        status: "Err",
        message: "User not found!",
      });
    }

    const response = await UserService.updateUser(userId, data);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
};
