const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");

//sign-up
const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isCheckEmail = emailRegex.test(email);
    if (!email || !password || !confirmPassword) {
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
    const { email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isCheckEmail = emailRegex.test(email);
    if (!email || !password) {
      return res.status(400).json({
        status: "Err",
        message: "All fields are required!",
      });
    } else if (!isCheckEmail) {
      return res.status(400).json({
        status: "Err",
        message: "Invalid email format!",
      });
    }
    const response = await UserService.loginUser(req.body);
    const { refresh_token, ...newResponse } = response;
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true, // Chỉ cho phép gửi cookie từ phía server, không thể truy cập bằng JS
      secure: process.env.NODE_ENV === "production", // Đảm bảo cookie chỉ gửi qua HTTPS trong môi trường production
      samesite: "strict", // Giới hạn cookie chỉ gửi trong cùng domain
      maxAge: 30 * 24 * 60 * 60 * 1000, // Đặt thời gian hết hạn cho cookie (30 ngày)
    });

    return res.status(201).json(response);
  } catch (error) {
    console.log("Error loginUser user:", error);
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
    console.log("Error updateUser user:", error);
    return res.status(500).json({ message: error });
  }
};

//deleteUser
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // const token = req.headers;

    if (!userId) {
      return res.status(400).json({
        status: "Err",
        message: "User not found!",
      });
    }

    const response = await UserService.deleteUser(userId);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error DELETE user:", error);
    return res.status(500).json({ message: error });
  }
};

//getAllUser
const getAllUser = async (req, res) => {
  try {
    const response = await UserService.getAllUser();
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error GET ALL USER user:", error);
    return res.status(500).json({ message: error });
  }
};

//getDetailsUser
const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(400).json({
        status: "Err",
        message: "User not found!",
      });
    }

    const response = await UserService.getDetailsUser(userId);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error dE user:", error);
    return res.status(500).json({ message: error });
  }
};

//refreshToken
const refreshToken = async (req, res) => {
  console.log("refresh_token_new: ", req.cookies.refresh_token);
  try {
    const token = req.cookies.refresh_token;
    if (!token) {
      return res.status(400).json({
        status: "Err",
        message: "The token is required!",
      });
    }

    const response = await JwtService.refreshTokenJwtService(token);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error dE user:", error);
    return res.status(500).json({ message: error });
  }
};

//logout
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(201).json({
      status: "Ok",
      message: "logout success",
    });
  } catch (error) {
    console.log("Error dE user:", error);
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
  refreshToken,
  logoutUser,
};
