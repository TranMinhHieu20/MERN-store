const UserService = require("../services/UserService");

const createUser = async (req, res) => {
  try {
    console.log(re.body);
    const response = await UserService.createUser;
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = {
  createUser,
};
