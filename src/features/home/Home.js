// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";

// import PasswordTextField from "common/PasswordTextField";
// import { getTextFieldFormikProps } from "utils/FormikUtils";

// import LoginHeader from "common/LoginHeader";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import snake from "images/Mask group.png";

// import { Button, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import UserApi from "apis/UserApi";
// import { useSnackbar } from "notistack";

// function Home(props) {
//   const history = useNavigate();
//   const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();
//   const { enqueueSnackbar } = useSnackbar();

//   const redirect = () => {
//     history("/forgot-password");
//   };
//   const forgotPass = () => {
//     history("/forgot-password");
//   };

//   const toSignUp = () => {

//     history("/");
//   };

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validationSchema: yup.object({
//       username: yup.string().trim().required(),
//       password: yup.string().trim().required(),
//     }),
//     onSubmit: async (values) => {
//       localStorage.setItem("il", true);

//       try {
//         const data = await loginMuation({ data: values }).unwrap();
//         // TODO extra login
//         redirect();
//         enqueueSnackbar("Logged in successful", { variant: "success" });
//       } catch (error) {
//         enqueueSnackbar(error?.data?.message, "Failed to login", {
//           variant: "error",
//         });
//       }
//     },
//   });

//   return (
//     <div className="  pl-24 h-screen">
//       <div className="flex justify-between">
//         <div
//           className="pt-4"
//           style={{
//             paddingLeft: "",
//             paddingRight: "",
//             minWidth: "40%",
//             // maxWidth: "75%",
//           }}
//         >
//           <LoginHeader />
//           <div className="flex-vertical">
//             <div className="my-8">
//               <Typography variant="h3" className="mb-2 mt-3 font-bold">
//                 Sign In
//               </Typography>
//               <p className="text-[#7D7878]">
//                 Welcome back! Please enter your credentials..
//               </p>
//             </div>

//             <form onSubmit={formik.handleSubmit}>
//               <Typography variant="h6" className="mb-2">
//                 Email Address
//               </Typography>
//               <TextField
//                 size="medium"
//                 className="w-full"
//                 placeholder="Enter your username"
//                 name="username"
//                 {...getTextFieldFormikProps(formik, "username")}
//               />

//               <Typography variant="h6" className="mt-10 mb-2">
//                 Choose Password
//               </Typography>

//               <PasswordTextField
//                 className="w-full "
//                 placeholder="Enter your Password"
//                 name="password"
//                 {...getTextFieldFormikProps(formik, "password")}
//               />

//               <div class="flex mt-5 justify-between items-center">
//                 <FormGroup>
//                   <FormControlLabel
//                     className=""
//                     control={<Checkbox defaultChecked />}
//                     label="Remember Information"
//                   />
//                 </FormGroup>
//                 <p
//                   onClick={forgotPass}
//                   className="text-primary-main font cursor-pointer"
//                 >
//                   Forgot Password
//                 </p>
//               </div>

//               <div className="text-white m-b-30 mt-5  ">
//                 <Button
//                   className="p-3 bg-primary-main w-full text-base"
//                   type="submit"
//                 >
//                   Sign In
//                 </Button>

//               </div>
//             </form>

//             <a className="text-center mb-1" href="">
//               <h2 className="mb-5">
//                 Already have an account?
//                 <b
//                   onClick={toSignUp}
//                   className="ml-1 color[
//                   #039836]"
//                 >
//                   Sign In
//                 </b>
//               </h2>
//             </a>
//           </div>
//         </div>
//         <div
//           className="relative hidden md:flex flex-vertical bg-primary-main text-white pl-10 justify-center w-2/5"
//           style={{
//             minWidth: "40%",
//             minHeight: "100%",
//             position: "relative",
//           }}
//         >
//           <img
//             className="absolute z-0 top-0 left-0 w-[100%] h-[100%]"
//             src={snake}
//           />
//           <div className="z-10">
//             <Typography variant="h1" className="mt-10 font-bold">
//               Earn
//             </Typography>
//             <Typography variant="h1" className="mt-10 font-bold">
//               Ride
//             </Typography>
//             <Typography variant="h1" className="mt-10 font-bold">
//               Manage.
//             </Typography>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import { Form, Formik, useFormik } from "formik";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";

import Logo from "assets/svg/logo.svg";

import Bg from "assets/png/sign_in_bg.png";
import { TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import UserApi from "apis/UserApi";
import { RouteEnum } from "constants/RouteConstants";
// import PasswordField from '../../../components/InputFields/PasswordField';
// import { loginUser } from '../../../features/auth/loginSlice';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();
  const { enqueueSnackbar } = useSnackbar();
  // const redirect = () => {
  //   navigate(RouteEnum.DASHBOARD);
  // };

  // const submitForm = (values) => {
  //     setLoading(true)
  //     const data = {
  //         email: values?.email,
  //         password: values?.password
  //     }
  //     dispatch(loginUser(data))
  //     .then((res) => {
  //         console.log(res, "best")
  //         if(res?.payload?.status === "success"){
  //             setLoading(false)
  //             navigate("/orders")
  //         }
  //     })

  // }

  // const formik = useFormik({
  //       initialValues: {
  //         username: "",
  //         password: "",
  //       },
  //       validationSchema: Yup.object({
  //         username: Yup.string().trim().required(),
  //         password: Yup.string().trim().required(),
  //       }),
  //       onSubmit: async (values) => {
  //         localStorage.setItem("il", true);
  //         // redirect();
  //       },
  //     });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="flex  py-[16px] pl-[128px] pr-[33px] justify-between bg-white">
      <div className="flex flex-col">
        <div
          className="flex items-center text-[#A3AED0] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
          <p>Back to homepage</p>
        </div>

        <div className="flex flex-col w-[513px] mt-[40px]">
          <div className="w-full flex flex-col gap-3">
            <img src={Logo} alt="Logo" className="w-[120px]" />
            <p className="text-lg font-bold font-lora text-[#000]">
              Sign In to experience more.
            </p>
            <p className="text-[13px] font-light text-[#94A3B8]">
              Enter your email and password to sign in!
            </p>
          </div>
          <div className="mt-[32px] w-full">
            <Formik
              initialValues={{
                email: "",
                password: "",
                check: false,
              }}
              validationSchema={formValidationSchema}
              onSubmit={async (values) => {
                window.scrollTo(0, 0);
                console.log(values, "often");

                localStorage.setItem("il", true);
                setLoading(true);

                try {
                  const data = await loginMuation({
                    data: {
                      email: values.email,
                      password: values.password,
                    },
                  }).unwrap();

                  console.log(data);

                  if (data?.data?.type !== "principal") {
                    enqueueSnackbar("You are not authorised", {
                      variant: "error",
                    });
                    setLoading(false)
                  }

                  // TODO extra login
                  // redirect();
                  // enqueueSnackbar("Logged in successful", {
                  //   variant: "success",
                  // });
                } catch (error) {
                  enqueueSnackbar(error?.data?.message, "Failed to login", {
                    variant: "error",
                  });
                }
                // submitForm(values)
              }}
            >
              {({
                handleSubmit,
                handleChange,
                dirty,
                isValid,
                setFieldValue,
                errors,
                touched,
                // setFieldTouched,
                values,
              }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="flex flex-col gap-6 h-[47px]">
                    <div className="flex flex-col ">
                      <label
                        htmlFor="email"
                        className="text-[13px] font-medium text-[#000]"
                      >
                        Email address
                      </label>
                      <input
                        name="email"
                        placeholder="youremail@domain.com"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        className="rounded-lg border-[#E5E7EB] xs:w-full outline-none w-full mt-1.5 h-[51px] border-solid  p-3 border"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-RED-_100">{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="password"
                        className="text-[13px] font-medium text-[#1E2B3B]"
                      >
                        Password
                      </label>
                      <input
                        name="password"
                        value={values.password}
                        placeholder="Password"
                        className="border w-full h-[51px] rounded-lg border-[#D0D5DD] mt-1.5 p-3"
                        onChange={handleChange}
                      />
                      {errors.password && touched.password ? (
                        <div className="text-RED-_100">{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5 items-center">
                        <input type="checkbox" value={values?.check} />
                        <p className="text-[#2B3674] text-[13px]">
                          Keep me logged in
                        </p>
                      </div>
                      <p className="text-[#1F2937] text-xs mt-1.5 font-normal cursor-pointer">
                        Forgot Password?
                      </p>
                    </div>

                    <button
                      className="bg-[#2B3674] mt-5  text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[54px] flex justify-center"
                      type="submit"
                    >
                      <p className="text-[#fff] text-sm  text-center  font-medium">
                        {loading ? (
                          <CgSpinner className=" animate-spin text-lg  " />
                        ) : (
                          "Sign In"
                        )}
                      </p>
                    </button>

                    <div className="mt-[14px]">
                      <p className="text-xs">
                        Not registered yet?{" "}
                        <a href='https://costprice-web.netlify.app/register'
                          className="text-[#F7A301] text-xs font-bold cursor-pointer"
                          onClick={() => navigate("/register")}
                        >
                          Create Account
                        </a>
                      </p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div
        style={{
          background: `url(${Bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justify-center  items-center w-[559px] h-[678px] "
      >
        <div className="w-[437px] h-[503px] bg-[#0E0E0F69] flex justify-center items-center rounded-xl">
          <div className="slider-container w-full">
            <Slider {...settings}>
              <div className="flex justify-center items-center">
                <div className="flex items-center justify-center">
                  <div className="w-[307px] h-[307px] bg-[#F9FAFB1A] flex items-center justify-center rounded-full">
                    <div className="w-[230px] h-[230px] bg-[#F9FAFB4D] items-center flex justify-center rounded-full">
                      <div className="w-[166px] h-[166px] bg-[#FFF] items-center flex justify-center rounded-full">
                        <img src={Logo} alt="Logo" className="w-[96px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 mt-5">
                  <p className="font-lora text-[#fff] text-lg font-medium">
                    Customizable Merchant/Brand Dashboard
                  </p>
                  <p className="text-xs text-[#fff]">
                    Everything you need in an easily customizable dashboard
                  </p>
                </div>
              </div>
              {/* <div className="flex justify-center items-center">
                <div className="flex items-center justify-center">
                  <div className="w-[307px] h-[307px] bg-[#F9FAFB1A] flex items-center justify-center rounded-full">
                    <div className="w-[230px] h-[230px] bg-[#F9FAFB4D] items-center flex justify-center rounded-full">
                      <div className="w-[166px] h-[166px] bg-[#FFF] items-center flex justify-center rounded-full">
                        <img src={Logo} alt="Logo" className="w-[96px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 mt-5">
                  <p className="font-lora text-[#fff] text-lg font-medium">
                    Customizable Merchant/Brand Dashboard
                  </p>
                  <p className="text-xs text-[#fff]">
                    Everything you need in an easily customizable dashboard
                  </p>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
