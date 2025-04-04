import axios from "axios";

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
      data
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
