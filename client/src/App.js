// eslint-disable-next-line
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import { useQuery } from "@tanstack/react-query";
import { isJsonString } from "./utils";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import * as UserService from "./Services/UseService";
import { updateUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
    console.log("storage: ", storageData);
    // eslint-disable-next-line
  }, []);
  //
  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
      console.log("decodeAPP: ", decoded);
    }
    console.log("storage: ", storageData);
    return { storageData, decoded };
  };
  //
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
    console.log("res handle get details user: ", res);
  };
  // Add a request interceptor
  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      console.log("HELLO");
      const currentTime = new Date().getTime() / 1000;
      const { decoded } = handleDecoded();
      if (decoded?.exp < currentTime) {
        console.log("Token da het han dang lam moi");
        const data = await UserService.refreshToken();
        console.log("config: ", data);
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
