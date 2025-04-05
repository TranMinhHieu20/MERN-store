import axios from "axios";

export const axiosJWT = axios.create();

//signUp
export const signUpUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL_BACKEND}/user/sign-up`,
      data
    );
    console.log("res.data-signUp: ", res.data);
    return res.data;
  } catch (error) {
    console.error(
      "Lỗi khi đăng ký: ",
      error.response ? error.response.data : error
    );
    return null; // Hoặc một giá trị lỗi tùy ý
  }
};
//signIn
export const loginUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL_BACKEND}/user/sign-in`,
      data,
      {
        withCredentials: true, // de refresh_token luu lai o cookies
      }
    );
    console.log("res.data-signIn: ", res.data);
    return res.data;
  } catch (error) {
    console.error(
      "Lỗi khi đăng nhập: ",
      error.response ? error.response.data : error
    );
    return null;
  }
};

//getDetailUser
export const getDetailsUser = async (id, access_token) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL_BACKEND}/user/get-details/${id}`,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );
    console.log("GetDetails: ", res.data);
    return res.data;
  } catch (error) {
    console.error(
      "Lỗi khi Get details: ",
      error.response ? error.response.data : error
    );
    return null;
  }
};

//refresh_token
export const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL_BACKEND}/user/refresh_token`,
      {},
      { withCredentials: true } // tu dong lay cookie tu BE
    );
    console.log("refresh_token: ", res.data);
    return res.data;
  } catch (error) {
    console.error(
      "Lỗi khi refresh_token: ",
      error.response ? error.response.data : error
    );
    return null;
  }
};

//logOut
export const logoutUser = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL_BACKEND}/user/log-out`,
      {},
      { withCredentials: true } // tu dong lay cookie tu BE
    );

    return res.data;
  } catch (error) {
    console.error(
      "Lỗi khi refresh_token: ",
      error.response ? error.response.data : error
    );
    return null;
  }
};

//update user/:id
export const updateUser = async (id, data, access_token) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL_BACKEND}/user/update-user/${id}`,
      data,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error(
      "Lỗi khi refresh_token: ",
      error.response ? error.response.data : error
    );
    return null;
  }
};
