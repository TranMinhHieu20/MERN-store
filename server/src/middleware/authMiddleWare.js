const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleWare = (req, res, next) => {
  console.log("checkToken: ", req.headers.token);
  const token = req.headers.token.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(403).json({
        status: "ERROR",
        message: "Invalid or expired token!",
      });
    }
    const { id, isAdmin } = user.payload;
    console.log("USER: ", user.payload);

    if (!isAdmin) {
      return res.status(403).json({
        status: "ERROR",
        message: "You are not authorized!",
      });
    }
    console.log("next");
    next(); // Cho phép tiếp tục nếu là admin
  });
};
module.exports = { authMiddleWare };
