import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { MdOutlineSearch } from "react-icons/md";

import useAuthUser from "hooks/useAuthUser";

import { IoMdNotificationsOutline } from "react-icons/io";

import {
  Avatar,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ToDoorSearch({ hide, pad }) {
  const authUser = useAuthUser();

  const [userId, setUserId] = React.useState(authUser?._id);

  const history = useNavigate();

  const redirect = () => {
    history("/profile");
  };

  console.log(authUser);

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data;

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <Typography className="font-bold">Welcome Back, Nick</Typography>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <MdOutlineSearch />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{
            backgroundColor: "white",
            border: "none",
            borderRadius: "7px",
          }}
          className="w-[30%] text-ssm "
        />

        <div className="flex items-center">
          <div className=" py-2 px-10">
            <div
              className={
                pad
                  ? "flex justify-between items-center pr-8"
                  : "flex justify-between items-center"
              }
            >
              <div className="px-4">
                <IoMdNotificationsOutline
                  className="text-[#00000080]"
                  size={26}
                />
              </div>
              <div className="flex items-center justify-center ">
                <Avatar
                  className="mr-3 h-9 w-9"
                  alt="Travis Howard"
                  src={user?.profileUrl}
                />
                <div className="cursor-pointer" onClick={redirect}>
                  <Typography className="text-black font-bold text-center mb-1">
                    Dunfix Enterprises
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!hide && <Divider className="mb-8" />}
    </div>
  );
}

export default ToDoorSearch;
