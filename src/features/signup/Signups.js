import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import snake from "images/Mask group.png";

import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { get } from "services/fetLocation";

function Home(props) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const history = useNavigate();

  const redirect = () => {
    history("/");
  };

  const toSignIn = () => {
    history("/");
  };

  const { enqueueSnackbar } = useSnackbar();
  const [signupMuation] = UserApi.useSignupMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userType: "company",
      fname: "",
      country: "Nigeria",
      state: "",
      city: "",
      address: "",
      dob: "",
    },

    onSubmit: async (values) => {
      localStorage.setItem("il", true);
      console.log(values);

      try {
        const data = await signupMuation({
          data: { ...values, state: state, city: city, phoneNo: phoneNo },
        }).unwrap();
        // TODO extra login
        enqueueSnackbar(data?.message, { variant: "success" });
        console.log(data?.message);
        redirect();
      } catch (error) {
        console.log(error?.data?.errors?.message.errors);
        console.log(Object.keys(error?.data?.errors?.message.errors));

        let kk = Object.keys(error?.data?.errors?.message.errors);

        for (let index = 0; index < kk.length; index++) {
          console.log(error?.data?.errors?.message.errors[kk[index]][0]);

          enqueueSnackbar(
            error?.data?.errors?.message.errors[kk[index]][0],
            "Failed to login",
            {
              variant: "error",
            }
          );
        }
      }
    },
  });

  useEffect(() => {
    getStates();
  }, []);

  const getStates = async () => {
    const res = await get({
      endpoint: `states`,
      auth: false,
    });
    setStates(res?.data?.data);
  };

  const getCities = async (val) => {
    const pp = states.find((e) => e.name == val);
    const res = await get({
      endpoint: `regions/${pp.alias}`,
      auth: false,
    });
    setCities(res?.data?.data);
  };

  const top100Films = states?.map((e) => ({
    title: e?.name,
    year: e.id,
    alias: e?.alias,
  }));
  const top10Films = cities?.map((e) => ({
    title: e?.name,
    year: e.id,
    alias: e?.alias,
  }));

  return (
    <div className="z  md:pl-24">
      <div className="flex md:justify-between justify-center w-full">
        <div
          className="pt-4 w-full md:w-2/5 px-4"
          style={{
            paddingLeft: "",
            paddingRight: "",
            // minWidth: "40%",
          }}
        >
          <LoginHeader />
          <div className="my-8">
            <Typography variant="h3" className="mb-2 mt-3 font-bold">
              Sign Up
            </Typography>
          </div>
          <div className="flex-vertical w-full">
            <form className="w-full bo" onSubmit={formik.handleSubmit}>
              <div class="flex gap-5 w-full  flex-col md:flex-row">
                <div className="w-full">
                  <Typography variant="h6" className="mb-2">
                    Email Address
                  </Typography>
                  <TextField
                    multiline
                    rows={1.5}
                    fullWidth
                    size="medium"
                    className="w-full"
                    placeholder="Enter your email"
                    name="email"
                    {...getTextFieldFormikProps(formik, "email")}
                  />
                </div>
                <div className="w-full">
                  <Typography variant="h6" className="mb-2">
                    Phone Number
                  </Typography>
                  <TextField
                    multiline
                    rows={1.5}
                    fullWidth
                    type="number"
                    size="medium"
                    className="w-full"
                    placeholder="Enter your Phone Number"
                    name="phoneNo"
                    onChange={(e) => {
                      const regex = /^[0-9\b]+$/;
                      if (e.target.value === "" || regex.test(e.target.value)) {
                        // setNum(e.target.value);
                        setPhoneNo(e.target.value);
                      }
                    }}
                    value={phoneNo}
                  />
                </div>
              </div>
              <div class="flex gap-5  flex-col md:flex-row w-full">
                <div className="w-full">
                  <Typography variant="h6" className="mb-2 mt-4">
                    Company Name
                  </Typography>
                  <TextField
                    multiline
                    rows={1.5}
                    fullWidth
                    size="medium"
                    className="w-full"
                    placeholder="Enter your Company Name"
                    name="fname"
                    {...getTextFieldFormikProps(formik, "fname")}
                  />
                </div>
                <div className="w-full">
                  <Typography variant="h6" className="mb-2 mt-4">
                    Country
                  </Typography>
                  <TextField
                    value={"Nigeria"}
                    multiline
                    rows={1.5}
                    fullWidth
                    size="medium"
                    className="w-full"
                    placeholder="Enter your Country"
                    name="country"
                  />
                </div>
              </div>
              <div className="flex  flex-col md:flex-row justify-between my-4">
                <div className="w-full mr-[5%]">
                  <p className="font-bold">State</p>

                  <Stack spacing={2}>
                    <Autocomplete
                      // freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={top100Films?.map((option) => option.title)}
                      onChange={(e, val) => {
                        getCities(val);
                        setState(val);
                      }}
                      renderInput={(params) => (
                        <TextField
                          multiline
                          rows={1.5}
                          className="w-full bg-[]"
                          {...params}
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
                  </Stack>
                </div>
                <div className="w-full ">
                  <p className="font-bold">City</p>

                  <Stack spacing={2}>
                    <Autocomplete
                      multiline
                      rows={1.5}
                      // freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={top10Films?.map((option) => option.title)}
                      onChange={(e, val) => {
                        // getCities(val);
                        setCity(val);
                      }}
                      renderInput={(params) => (
                        <TextField
                          className="w-full bg-[]"
                          multiline
                          rows={1.5}
                          {...params}
                          // label="Search input"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
                  </Stack>
                </div>
              </div>

              <div className="w-full">
                <Typography variant="h6" className="mb-2 mt-4">
                  Address
                </Typography>
                <TextField
                  multiline
                  rows={1.5}
                  size="medium"
                  className="w-full"
                  placeholder="Enter your Adress"
                  name="address"
                  {...getTextFieldFormikProps(formik, "address")}
                />
              </div>

              <Typography
                multiline
                rows={1.5}
                variant="h6"
                className="mt-4 mb-2"
              >
                Choose Password
              </Typography>

              <PasswordTextField
                className="w-full"
                placeholder="Enter your Password"
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <Typography variant="h6" className="mt-4 mb-2">
                Confirm Password
              </Typography>

              <PasswordTextField
                className="w-full "
                placeholder="Confirm your Password"
                name="password"
                {...getTextFieldFormikProps(formik, "confirmPassword")}
              />

              <FormGroup>
                <FormControlLabel
                  className="mt-3"
                  control={<Checkbox defaultChecked />}
                  label="Remember Information"
                />
              </FormGroup>

              <div className="text-white m-b-30 mt-3  ">
                <Button className="p-3 w-full text-base" type="submit">
                  Sign Up
                </Button>
              </div>
            </form>

            <a className="text-center" href="">
              <h2 className="mb-5">
                Already have an account?
                <b onClick={toSignIn} className="ml-1  color{#039836}">
                  Sign In
                </b>
              </h2>
            </a>
          </div>
        </div>
        <div
          className="relative hidden md:flex flex-vertical min-h-screen bg-primary-main text-white pl-10 justify-center w-2/5"
          style={{
            minWidth: "40%",
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
