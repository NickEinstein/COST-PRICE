import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import useAuthUser from "hooks/useAuthUser";

import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function WallCards(props) {
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      redirect();

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  return (
    <div className="relative w-full rounded-[100px]">
      <Card
        className={
          props.rider
            ? "riders-bg w-full border text-white text-center mr-3 rounded-2xl"
            : props.plain
            ? "plain-bg w-full  rounded-2xl"
            : props.green
            ? "bg-primary-main w-full  text-white rounded-2xl"
            : props.big
            ? "text-left w-full   rounded-2xl"
            : " text-white text-center w-full rounded-2xl"
        }
        sx={{
          minWidth: 155,
          // minHeight: !props.short && 120,
          // maxHeight: props.short && 105,
        }}
      >
        <CardContent className="w-full flex gap-1 ">
          <Avatar
            src={props.img}
            className="mr-3 h-9 w-9 flex gap-2"
            alt="Travis Howard"
          />
          <div>
            <div className="mb-1">
              <Typography
                className={"text-left text-primary-main font-bold z-10"}
                style={{ fontSize: 14, zIndex: 100 }}
              >
                {props.name || "Total Companies"}
              </Typography>
            </div>
            <div>
              <Typography
                variant={"h5"}
                className={"text-left font- text-primary-main z-10 mb-1"}
              >
                {props.count}
              </Typography>
              <Typography>55% since last month</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WallCards;
