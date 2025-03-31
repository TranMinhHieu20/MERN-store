const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// allow  user if isAdmin
const authMiddleWare = (req, res, next) => {
  console.log("checkToken: ", req.headers.token);
  const token = req.headers.token.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
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

//allow get all info user if isAdmin or nguoi dung chi xem duoc thong tin rieng cua minh neu khong phai la isAdmin
const authUserMiddleWare = (req, res, next) => {
  console.log("checkToken: ", req.headers.token);
  const token = req.headers.token.split(" ")[1];
  const userId = req.params.id;

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).json({
        status: "ERROR",
        message: "Invalid or expired token!",
      });
    }
    const { payload } = user;
    console.log("USER: ", user);
    if (payload?.isAdmin || payload?.id === userId) {
      next();
    } else {
      return res.status(403).json({
        status: "ERROR",
        message: "You are not authorized!",
      });
    }
  });
};

module.exports = { authMiddleWare, authUserMiddleWare };
