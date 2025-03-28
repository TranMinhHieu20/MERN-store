const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./.env" }); // Đảm bảo đúng đường dẫn file .env
const routes = require("./routes/index.js");
const URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mern-store.ekxudeb.mongodb.net/?retryWrites=true&w=majority&appName=MERN-store`;

const app = express();
const PORT = process.env.PORT || 5000;

routes(app);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connect DB success!");
    app.listen(PORT, () =>
      console.log(`Server is running on localhost http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log("Connect DB fail!: ", err);
  });
