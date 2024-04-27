import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";

import { FcGoogle } from "react-icons/fc";
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
  const [age, setAge] = React.useState("");

  const history = useNavigate();

  const redirect = () => {
    history("/dashboard");
  };

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNo: "+2348094432806",
      password: "",
      userType: "company",
    },
    validationSchema: yup.object({
      email: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      localStorage.setItem("il", true);

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        redirect();
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  
  return (
   
    <div className="md:pl-24 min-h-screen">
      <div className="flex justify-between">
        <div
          className="pt-4 min-h-screen md:w-2/5 w-full px-4"
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
                Create Account
              </Typography>
              <p>Enter your credentials to create your account.</p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6" className="mb-2">
                Email Address
              </Typography>
              <TextField
                size="medium"
                className="w-full"
                placeholder="Enter your email"
               
                name="email"
                {...getTextFieldFormikProps(formik, "email")}
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

              <FormGroup>
                <FormControlLabel
                  className="mt-5"
                  control={<Checkbox defaultChecked />}
                  label="Remember Information"
                />
              </FormGroup>


              <div className="text-white  m-b-30 mt-5">
                <Button
                  className="h-14 bg-primary-main w-full text-base"
                  type="submit"
                
                >
                  Sign In
                </Button>

              </div>
            </form>

            <a className="text-center mb-1" href="/signups">
              <h2 className="mb-5">
                Yet to have an account?
                <b className="ml-1 text-primary-main">Sign Up</b>
              </h2>
            </a>
          </div>
        </div>
        <div
          className="relative md:flex hidden flex-vertical min-h-screen bg-primary-main text-white pl-10 justify-center w-2/5"
          style={{
           
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
