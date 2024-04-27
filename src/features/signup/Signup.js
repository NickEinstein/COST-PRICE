import React from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import snake from "images/Mask group.png";
import LoginHeader from "common/LoginHeader";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
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
    <div className="pl-24">
      <div className="flex justify-between ">
        <div
          className="pt-4"
          style={{
            paddingLeft: "",
            paddingRight: "",
            minWidth: "40%",
            maxWidth: "80%",
          }}
        >
          <LoginHeader />
          <div className="flex-vertical">
            <div className="my-6">
              <Typography variant="h3" className=" font-bold">
                Complete Sign-up
              </Typography>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6" className="mb-2">
                Company Reg Num:
              </Typography>
              <TextField
                size="medium"
                className="w-full"
                placeholder="Enter your username"
                name="username"
                {...getTextFieldFormikProps(formik, "username")}
              />

              <Typography variant="h6" className="mt-5 mb-2">
                TIN Number
              </Typography>

              <TextField
                className="w-full "
                placeholder="Enter your Password"
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <Typography variant="h6" className="mt-5 mb-2">
                Address
              </Typography>

              <TextField
                className="w-full "
                placeholder="Enter your Password"
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <Typography variant="h6" className="mt-5 mb-2">
                {" "}
                Contact Phone Number
              </Typography>

              <TextField
                className="w-full "
                placeholder="Enter your Password"
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              {/* 

              {/* <Input placeholder='Location' className='m-b-20'/> */}
              <div className="text-white bg-primary-main m-b-30 mt-8  ">
                <Button className="p-3 w-full" type="submit">
                  Request Verification
                </Button>
              </div>
            </form>

            <a className="text-center" href="/">
              <h2 className="mb-5">
                Already have an account?
                <b className="ml-1  color{#039836}">Sign In</b>
              </h2>
            </a>
          </div>
        </div>
        <div
          className="relative flex-vertical bg-primary-main text-white pl-10 justify-center w-2/5"
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

export default Signup;
