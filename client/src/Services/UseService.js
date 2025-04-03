import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL_BACKEND}/user/sign-in`,
    data
  );
  console.log("res.data-loginIn: ", res.data);

  return res.data;
};

export const signUpUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL_BACKEND}/user/sign-up`,
    data
  );
  console.log("res.data-signUp: ", res.data);

  return res.data;
};
