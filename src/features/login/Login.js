import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";

import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import snake from "images/Mask group.png";

import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const history = useNavigate();

  const redirect = () => {
    history("/forgot-password");
  };
  const forgotPass = () => {
    history("/forgot-password");
  };

  const toSignUp = () => {

    history("/");
  };


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
      localStorage.setItem("il", true);
      redirect();
    },
  });

  return (
    <div className="  pl-24 h-screen">
      <div className="flex justify-between">
        <div
          className="pt-4"
          style={{
            paddingLeft: "",
            paddingRight: "",
            minWidth: "40%",
            // maxWidth: "75%",
          }}
        >
          <LoginHeader />
          <div className="flex-vertical">
            <div className="my-8">
              <Typography variant="h3" className="mb-2 mt-3 font-bold">
                Sign In
              </Typography>
              <p className="text-[#7D7878]">
                Welcome back! Please enter your credentials..
              </p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6" className="mb-2">
                Email Address
              </Typography>
              <TextField
                size="medium"
                className="w-full"
                placeholder="Enter your username"
                name="username"
                {...getTextFieldFormikProps(formik, "username")}
              />

              <Typography variant="h6" className="mt-10 mb-2">
                Choose Password
              </Typography>

              <PasswordTextField
                className="w-full "
                placeholder="Enter your Password"
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <div class="flex mt-5 justify-between items-center">
                <FormGroup>
                  <FormControlLabel
                    className=""
                    control={<Checkbox defaultChecked />}
                    label="Remember Information"
                  />
                </FormGroup>
                <p
                  onClick={forgotPass}
                  className="text-primary-main font cursor-pointer"
                >
                  Forgot Password
                </p>
              </div>

              <div className="text-white m-b-30 mt-5  ">
                <Button
                  className="p-3 bg-primary-main w-full text-base"
                  type="submit"
                >
                  Sign In
                </Button>
               
              </div>
            </form>

            <a className="text-center mb-1" href="">
              <h2 className="mb-5">
                Already have an account?
                <b
                  onClick={toSignUp}
                  className="ml-1 color[
                  #039836]"
                >
                  Sign In
                </b>
              </h2>
            </a>
          </div>
        </div>
        <div
          className="relative hidden md:flex flex-vertical bg-primary-main text-white pl-10 justify-center w-2/5"
          style={{
            minWidth: "40%",
            minHeight: "100%",
            position: "relative",
          }}
        >
          <img
            className="absolute z-0 top-0 left-0 w-[100%] h-[100%]"
            src={snake}
          />
          <div className="z-10">
            <Typography variant="h1" className="mt-10 font-bold">
              Earn
            </Typography>
            <Typography variant="h1" className="mt-10 font-bold">
              Ride
            </Typography>
            <Typography variant="h1" className="mt-10 font-bold">
              Manage.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
