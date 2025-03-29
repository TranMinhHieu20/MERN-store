const routes = (app) => {
  app.use("/api/user", (req, res) => {
    res.send("Server is running......");
  });
};

module.exports = routes;
