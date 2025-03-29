const createUser = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve({});
    } catch (error) {
      reject(err);
    }
  });
};
module.exports = {
  createUser,
};
