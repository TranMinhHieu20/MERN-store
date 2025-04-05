import React, { useEffect, useState } from "react";
import {
  WrapperHeader,
  WrapperContentProfile,
  WrapperLabel,
} from "./StyleProfilePage";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import * as UserService from "../../Services/UseService";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { useMutationHook } from "../../hooks/useMutationHook";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  console.log("clg user Profile: ", user);
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [isSpinLoading, setIsSpinLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setAvatar(user?.avatar);
    setPhone(user?.phone);
    setAddress(user?.address);
  }, [user]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAvatar = (e) => {
    setAvatar(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleUpdate = async () => {
    setIsSpinLoading(true);
    console.log("update", name, email, phone, address, avatar);
    const id = user?.id;
    const data = { name, email, address, avatar, phone };
    const access_token = user?.access_token;
    UserService.updateUser(id, data, access_token);
    setTimeout(() => {
      setIsSpinLoading(false);
    }, 1500);
  };
  return (
    <div style={{ padding: "15px 120px" }}>
      <WrapperHeader>Thông tin người dùng:</WrapperHeader>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WrapperContentProfile>
          <div style={{ marginBottom: "20px" }}>
            <WrapperLabel htmlFor="name">Name:</WrapperLabel>
            <InputForm
              id="name"
              placeholder="UserName"
              value={name}
              handleOnchange={handleChangeName}
            />
            <WrapperLabel htmlFor="avatar">Avatar:</WrapperLabel>
            <InputForm
              id="avatar"
              placeholder="Avatar"
              value={avatar}
              handleOnchange={handleChangeAvatar}
            />
            <WrapperLabel htmlFor="email">Email:</WrapperLabel>
            <InputForm
              id="email"
              placeholder="abc@gmail.com"
              value={email}
              handleOnchange={handleChangeEmail}
            />
            <WrapperLabel htmlFor="phone">Phone:</WrapperLabel>
            <InputForm
              id="phone"
              placeholder="Phone"
              value={phone}
              handleOnchange={handleChangePhone}
            />
            <WrapperLabel htmlFor="address">Address:</WrapperLabel>
            <InputForm
              id="address"
              placeholder="Address"
              value={address}
              handleOnchange={handleChangeAddress}
            />
            <ButtonComponent
              onClick={handleUpdate}
              disabled={email.length !== 0 ? false : true}
              size={20}
              styleButton={{
                background: "#01debf",
                color: "#fff",
                height: "40px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              textButton={isSpinLoading ? "Đang cập nhật..." : "Cập nhật"}
            ></ButtonComponent>
          </div>
        </WrapperContentProfile>
        {isSpinLoading && (
          <span
            style={{
              position: "absolute",
              right: "30px",
              top: "-45px",
            }}
          >
            <Loading />
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
