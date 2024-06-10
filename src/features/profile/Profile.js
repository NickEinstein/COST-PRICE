import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useSnackbar } from "notistack";
import { put } from "services/fetchUpload";
import useAuthUser from "hooks/useAuthUser";
import fileUpload from "assets/dashboard/file upload states.svg";
import gigLogo from "images/Ellipse 56.png";
import pdf from "images/pdf.png";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Tabs,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RiArrowDownSFill, RiArrowLeftSLine } from "react-icons/ri";
import ToDoorSearch from "common/ToDoorSearch";
import { AiFillWarning } from "react-icons/ai";
import { useEffect } from "react";
function ManageRiders() {
  const authUser = useAuthUser();

  const [address, setAddress] = React.useState(authUser?.address);
  const [name, setName] = React.useState(authUser?.name);
  const [businessFormData, setBusinessFormData] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState(authUser?.phone_number);
  const [state, setState] = React.useState(authUser?.state);
  const [email, setEmail] = useState(authUser?.email);
  const [companyAddress, setCompanyAddress] = useState(
    authUser?.company_address
  );
  const [companyName, setCompanyName] = useState(authUser?.company_name);
  const [country, setCountry] = useState(authUser?.country);
  const [userId, setUserId] = React.useState(authUser?._id);
  const [uploadArray, setUploadArray] = useState([]);
  const [showProfile, setShowProfile] = useState(true);
  const [idInfo, setIdInfo] = useState("");
  const [CACdoc, setCACdoc] = useState("");
  const [count, setcount] = useState("");
  const history = useNavigate();

  const [profilePic, setProfilePic] = useState();
  const [idPic, setidPic] = useState();

  const getUserQueryResult = UserApi?.useGetUserProfileQuery({ userId, count });
  const user = getUserQueryResult?.data;

  const [basicProfileMuation, basicProfileMutationResult] =
    UserApi.useAddBasicProfileMutation();

    const [addBusinessProfileMuation, addBusinessProfileMutationResult] =
    UserApi.useAddBusinessProfileMutation();
    
  const updateBasicProfile = async (values) => {
    try {
      const data = await basicProfileMuation({
        data: {
          name: name,
          email: email,
          phone_number: phoneNumber,
        },
      }).unwrap();
      // TODO extra login
      // redirect();
      enqueueSnackbar("Updated Successfully", {
        variant: "success",
      });
      // setreloadProduct(!reloadProduct);
    } catch (error) {
      enqueueSnackbar(error?.data?.message, "Failed to login", {
        variant: "error",
      });
    }
    // submitForm(values)
  };

  const { enqueueSnackbar } = useSnackbar();
  // const [updateUserMuation, updateUserMutationResult] =
  //   UserApi.useUpdateUserMutation();
  // const [updateUserUploadMuation, updateUserUploadMutationResult] =
  //   UserApi.useUpdateUserUploadMutation();

  const { Dragger } = Upload;
  const props2 = {
    name: "address_doc",
    multiple: true,
    action: "https://api.costprice.ng/api/user/upload/kyc-address",
    //
    headers: {
      Authorization: `Bearer ${authUser?.accessToken} `, // Add your auth token here
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const props3 = {
    name: "cac_doc",
    multiple: true,
    action: "https://api.costprice.ng/api/user/upload/kyc-cac",
    //
    headers: {
      Authorization: `Bearer ${authUser?.accessToken} `, // Add your auth token here
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const props = {
    name: "pic",
    multiple: true,
    action: "https://api.costprice.ng/api/user/upload/profile-pic",
    headers: {
      Authorization: `Bearer ${authUser?.accessToken} `, // Add your auth token here
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setcount((prev) => prev + 1);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const opens = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = (name) => {
    setAnchorEl2(null);
    // setfiltername(name);
  };
  const [valuez, setValue] = React.useState("one");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const updateBusinessProfile = async () => {
    let payload = {
      company_name: businessFormData.company_name,
      company_address: businessFormData.company_address,
      company_state: businessFormData?.company_state,
      company_lga: businessFormData?.company_lga,
      company_registration: businessFormData.company_registration,
      company_description: businessFormData?.company_description,
      industry_category: businessFormData.industry_category,
      tin: businessFormData?.tin,
    };

    try {
      const data = await addBusinessProfileMuation({
        data: {
         ...payload
        },
      }).unwrap();
      // TODO extra login
      // redirect();
      enqueueSnackbar("Updated Successfully", {
        variant: "success",
      });
      setcount((prev) => prev + 1);

      // setreloadProduct(!reloadProduct);
    } catch (error) {
      enqueueSnackbar(error?.data?.message, "Failed to login", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    setBusinessFormData({
      company_name: authUser?.company_name,
      company_address: authUser?.company_address,
      company_state: authUser?.company_state,
      company_lga: authUser?.company_lga,
      company_registration: authUser?.company_registration,
      company_description: authUser?.company_description,
      industry_category: authUser?.industry_category,
      tin: authUser?.tin
    });
  }, [authUser]);

  return (
    <div className="">
      <ToDoorSearch />
      {/* Personal Info */}
      <div>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={valuez}
            onChange={handleChangeTab}
            textColor="secondary"
            indicatorColor="secondary"
            className="m-2"
            aria-label="secondary tabs example"
          >
            <Tab className="bg-transparent" value="one" label="Basic Details" />
            <Tab
              className="bg-transparent"
              value="two"
              label="Business Details"
            />
            <Tab className="bg-transparent" value="three" label="KYC" />
            <Tab className="bg-transparent" value="four" label="PASSWORDS" />
          </Tabs>
        </Box>
      </div>
      {valuez == "one" && (
        <div className="p-8 bg-white">
          <Typography className="font-bold">Basic Info</Typography>
          <Typography className="text-[#A3AED0]">
            Update photo and personal Details here
          </Typography>

          <Divider />
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">Name</Typography>
              <div className="w-full w-3/5">
                <Typography className="font-bold">Fullname</Typography>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  value={name}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">Email Address</Typography>
              <div className="w-full w-3/5">
                <TextField
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">Phone number</Typography>
              <div className="w-full w-3/5">
                <TextField
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>

          <div>
            <div className="flex w-full justify-between p-5">
              <div className="w-2/5">
                <Typography className="font-bold">Your Photo</Typography>
                <Typography>This will be displayed on your profile</Typography>
              </div>
              <div className="w-3/5 flex gap-5">
                <Avatar src={authUser?.pic} />
                <Dragger
                  className="h-60 w-full text-center flex flex-col justify-center items-center"
                  {...props}
                >
                  <div className="ant-upload-drag-icon flex justify-center w-full">
                    <img src={fileUpload} />
                  </div>
                  <p className="ant-upload-text">
                    <span className="text-[#EB5017] font-bold">
                      Click Upload
                    </span>
                    or Drag and drop
                  </p>
                  <p className="ant-upload-hint text-[#98A2B3]">
                    PNG, JPG or GIF (max. 800x400px)
                  </p>
                </Dragger>
                {/* <Card className="h-60 w-full text-center flex flex-col justify-center">
               
              </Card> */}
              </div>
            </div>
            <Divider />
          </div>

          <div className="flex w-full mt-4 mb-8">
            <div className="ml-auto flex gap-2">
              <Button>Cancel</Button>
              <Button onClick={updateBasicProfile}>Update Details</Button>
            </div>
          </div>
        </div>
      )}

      {/* Company Info */}
      {valuez == "two" && (
        <div className="p-8 bg-white">
          <Typography className="font-bold">Business Details</Typography>
          <Typography className="text-[#A3AED0]">
            Update business logo and key information
          </Typography>

          <Divider />
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">Name</Typography>
              <div className="w-full w-3/5">
                <Typography>Company Name</Typography>
                <TextField
                  onChange={(e) =>
                    setBusinessFormData({ ...businessFormData, company_name: e.target.value })
                  }
                  value={businessFormData?.company_name}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Company Address
              </Typography>
              <div className="w-full w-3/5">
                <TextField
                  onChange={(e) =>
                    setBusinessFormData({...businessFormData,  company_address: e.target.value })
                  }
                  value={businessFormData?.company_address}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Company State
              </Typography>
              <div className="w-full w-3/5">
                <TextField
                  onChange={(e) =>
                    setBusinessFormData({...businessFormData,  company_state: e.target.value })
                  }
                  value={businessFormData?.company_state}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Company LGA
              </Typography>
              <div className="w-full w-3/5">
                <TextField
                  onChange={(e) =>
                    setBusinessFormData({...businessFormData,  company_lga: e.target.value })
                  }
                  value={businessFormData?.company_lga}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Industry Category
              </Typography>
              <div className="w-full w-3/5">
                <TextField
                  onChange={(e) =>
                    setBusinessFormData({ ...businessFormData, industry_category: e.target.value })
                  }
                  value={businessFormData?.industry_category}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>

          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Company Reg No
              </Typography>
              <div className="w-full w-3/5">
                <TextField
                  onChange={(e) =>
                    setBusinessFormData({...businessFormData, 
                      company_registration: e.target.value,
                    })
                  }
                  value={businessFormData?.company_registration}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>

          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Tax Identification No.
              </Typography>
              <div className="w-full w-3/5">
                <TextField
                  onChange={(e) => setBusinessFormData({ ...businessFormData, tin: e.target.value })}
                  value={businessFormData?.tin}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>

          <div>
            <div className="flex w-full justify-between p-5">
              <div className="w-2/5">
                <Typography>Description</Typography>
                <Typography>write a short introduction</Typography>
              </div>
              <div className="w-full w-3/5">
                <TextField
                  multiline
                  rows={5}
                  onChange={(e) =>
                    setBusinessFormData({...businessFormData, company_description: e.target.value })
                  }
                  value={businessFormData?.company_description}
                  className="w-full"
                  fullWidth
                />
              </div>
            </div>
            <Divider />
          </div>

          <div className="flex w-full mt-4 mb-8">
            <div className="ml-auto flex gap-2">
              {/* <Button>Cancel</Button> */}
              <Button onClick={updateBusinessProfile}>Update</Button>
            </div>
          </div>
        </div>
      )}
      {/* KYC Info */}
      {valuez == "three" && (
        <div className="p-8 bg-white">
          <Typography className="font-bold">KYC</Typography>
          <Typography className="text-[#A3AED0]">Complete your KYC</Typography>

          <Divider />

          <div>
            <div className="flex w-full justify-between p-5">
              <div className="w-2/5">
                <Typography className="font-bold">
                  Address Verification
                </Typography>
                <Typography>Upload utility bill</Typography>
              </div>
              <div className="w-3/5 flex gap-5">
                <Dragger
                  className="h-60 w-full text-center flex flex-col justify-center items-center"
                  {...props2}
                >
                  <div className="ant-upload-drag-icon flex justify-center w-full">
                    <img src={fileUpload} />
                  </div>
                  <p className="ant-upload-text">
                    <span className="text-[#EB5017] font-bold">
                      Click Upload{" "}
                    </span>
                    or Drag and drop
                  </p>
                  <p className="ant-upload-hint text-[#98A2B3]">
                    PNG, JPG or GIF (max. 800x400px)
                  </p>
                </Dragger>
              </div>
            </div>
            <Divider />
          </div>

          <div>
            <div className="flex w-full justify-between p-5">
              <div className="w-2/5">
                <Typography className="font-bold">CAC Verification</Typography>
                <Typography>Upload CAC certificate</Typography>
              </div>
              <div className="w-3/5 flex gap-5">
                <Dragger
                  className="h-60 w-full text-center flex flex-col justify-center items-center"
                  {...props3}
                >
                  <div className="ant-upload-drag-icon flex justify-center w-full">
                    <img src={fileUpload} />
                  </div>
                  <p className="ant-upload-text">
                    <span className="text-[#EB5017] font-bold">
                      Click Upload{" "}
                    </span>
                    or Drag and drop
                  </p>
                  <p className="ant-upload-hint text-[#98A2B3]">
                    PNG, JPG or GIF (max. 800x400px)
                  </p>
                </Dragger>
              </div>
            </div>
            <Divider />
          </div>

          {/* <div className="flex w-full mt-4 mb-8">
            <div className="ml-auto flex gap-2">
              <Button>Cancel</Button>
              <Button>Edit Product</Button>
            </div>
          </div> */}
        </div>
      )}

      {/* Password Info */}
      {valuez == "four" && (
        <div className="p-8 bg-white">
          <Typography className="font-bold">Password</Typography>
          <Typography className="text-[#A3AED0]">
            Update your password here
          </Typography>

          <Divider />
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Current Password
              </Typography>
              <div className="w-full w-3/5">
                <TextField className="w-full" fullWidth />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">New Password</Typography>
              <div className="w-full w-3/5">
                <TextField className="w-full" fullWidth />
              </div>
            </div>
            <Divider />
          </div>
          <div>
            <div className="flex w-full justify-between p-5">
              <Typography className="w-1/5 font-bold">
                Confirm Password
              </Typography>
              <div className="w-full w-3/5">
                <TextField className="w-full" fullWidth />
              </div>
            </div>
            <Divider />
          </div>

          <div className="flex w-full mt-4 mb-8">
            <div className="ml-auto flex gap-2">
              <Button>Cancel</Button>
              <Button>Edit Product</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageRiders;
