import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import useAuthUser from "hooks/useAuthUser";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NewWallCards(props) {
  const [age, setAge] = React.useState("");

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
        // redirect()
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  return (
    <div
      className={"p-20 w-[136px] bg-white"}
      style={{
        border: "none",
        borderLeft: props.cutborder ? "1px solid #C4C4C4" : "none",
      }}
    >
      <div
        className={
          props.rider
            ? "riders-bg text-white text-center mr-3"
            : props.plain
            ? "plain-bg"
            : props.green
            ? "bg-primary-main text-white"
            : props.big
            ? "text-left"
            : " text-white text-center"
        }
        sx={{
          minWidth: props.big ? 220 : 155,
          minHeight: props.big ? 160 : 120,
        }}
      >
        <div>
          <div>
            <Typography
              className={
                props.plain || props.green
                  ? " text-center text-white"
                  : props.dashboard
                  ? "text-center text-primary-main "
                  : "text-center text-primary-main font-bold"
              }
              sx={{ fontSize: 14 }}
            >
              {props.name || "Total Companies"}
            </Typography>
          </div>
          <div>
            <Typography
              variant={
                props.small
                  ? "h3"
                  : props.earnings && props.count
                  ? "h5"
                  : props.big
                  ? "h3"
                  : "h2"
              }
              className={
                props.green
                  ? "text-white text-center font-bold"
                  : props.bigspace
                  ? "text-center font-bold text-primary-main pr-10"
                  : props.big
                  ? "font-extrabold text-center text-primary-main"
                  : "text-center font-bold text-primary-main px-5"
              }
            >
              {props.count||0}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewWallCards;
