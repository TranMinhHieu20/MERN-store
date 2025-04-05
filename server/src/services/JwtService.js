const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//access_token
const generalAccessToken = (payload) => {
  const access_token = jwt.sign(
    {
      ...payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "30m" }
  );
  return access_token;
};

//refresh_token
const generalRefreshToken = (payload) => {
  const refresh_token = jwt.sign(
    {
      ...payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );
  return refresh_token;
};
///
//refresh_token when token expired => token new
const refreshTokenJwtService = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
          resolve({
            status: "ERROR",
            message: "Invalid or expired refresh token!",
          });
        }
        const access_token = await generalAccessToken({
          id: user?.id,
          isAdmin: user?.isAdmin || false,
        });
        console.log("access_token: ", access_token);
        return resolve({
          status: "Ok",
          message: "Refresh Token User Successfully",
          access_token,
        });
      });

      // }
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = {
  generalAccessToken,
  generalRefreshToken,
  refreshTokenJwtService,
};
