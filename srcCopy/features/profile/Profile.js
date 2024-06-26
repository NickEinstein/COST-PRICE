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
function ManageRiders() {
  const authUser = useAuthUser();

  const [address, setAddress] = React.useState(authUser?.address);
  const [city, setCity] = React.useState(authUser?.city);
  const [phoneNumber, setPhoneNumber] = React.useState(authUser?.phoneNo);
  const [state, setState] = React.useState(authUser?.state);
  const [email, setEmail] = useState(authUser?.email);
  const [companyName, setCompanyName] = useState(authUser?.fname);
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

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId, count });
  const user = getUserQueryResult?.data;

  let yy = {
    fname: companyName,
    email: email,
    phoneNo: phoneNumber,
    address: address,
    city: city,
    state: state,
    country: country,

    _id: userId,
  };

  const { enqueueSnackbar } = useSnackbar();
  const [updateUserMuation, updateUserMutationResult] =
    UserApi.useUpdateUserMutation();
  const [updateUserUploadMuation, updateUserUploadMutationResult] =
    UserApi.useUpdateUserUploadMutation();

  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    // https://api.costprice.ng/api
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

  const props2 = {
    name: "file",
    multiple: true,
    action: "https://api.costprice.ng/api/user/upload/kyc-cac",
    // 
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
              <Tab className="bg-transparent" value="two" label="Business Details" />
              <Tab
                className="bg-transparent"
                value="three"
                label="KYC"
              />
               <Tab
                className="bg-transparent"
                value="four"
                label="PASSWORDS"
              />
            </Tabs>
          </Box>
      </div>
    {valuez == 'one' && <div className="p-8 bg-white">
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
              <TextField className="w-full" fullWidth />
            </div>
          </div>
          <Divider />
        </div>
        <div>
          <div className="flex w-full justify-between p-5">
            <Typography className="w-1/5 font-bold">Email Address</Typography>
            <div className="w-full w-3/5">
              <TextField className="w-full" fullWidth />
            </div>
          </div>
          <Divider />
        </div>
        <div>
          <div className="flex w-full justify-between p-5">
            <Typography className="w-1/5 font-bold">Phone number</Typography>
            <div className="w-full w-3/5">
              <TextField className="w-full" fullWidth />
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
              <Avatar />
              <Dragger
                className="h-60 w-full text-center flex flex-col justify-center items-center"
                {...props}
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
              {/* <Card className="h-60 w-full text-center flex flex-col justify-center">
               
              </Card> */}
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
      </div>}

      {/* Company Info */}
   {valuez == 'two' &&   <div className="p-8 bg-white">
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
              <TextField className="w-full" fullWidth />
            </div>
          </div>
          <Divider />
        </div>
        <div>
          <div className="flex w-full justify-between p-5">
            <Typography className="w-1/5 font-bold">Company Address</Typography>
            <div className="w-full w-3/5">
              <TextField className="w-full" fullWidth />
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
              <TextField className="w-full" fullWidth />
            </div>
          </div>
          <Divider />
        </div>
        <div>
          <div className="flex w-full justify-between p-5">
            <Typography className="w-1/5 font-bold">State</Typography>
            <div className="w-full w-3/5">
              <TextField className="w-full" fullWidth />
            </div>
          </div>
          <Divider />
        </div>
        <div>
          <div className="flex w-full justify-between p-5">
            <Typography className="w-1/5 font-bold">LGA</Typography>
            <div className="w-full w-3/5">
              <TextField className="w-full" fullWidth />
            </div>
          </div>
          <Divider />
        </div>

        <div>
          <div className="flex w-full justify-between p-5">
            <Typography className="w-1/5 font-bold">Company Reg No</Typography>
            <div className="w-full w-3/5">
              <TextField className="w-full" fullWidth />
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
              <TextField className="w-full" fullWidth />
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
              <TextField multiline rows={5} className="w-full" fullWidth />
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
}
      {/* KYC Info */}
   {valuez == 'three' &&   <div className="p-8 bg-white">
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
                {...props}
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

        <div className="flex w-full mt-4 mb-8">
          <div className="ml-auto flex gap-2">
            <Button>Cancel</Button>
            <Button>Edit Product</Button>
          </div>
        </div>
      </div>}

      {/* Password Info */}
{ valuez == 'four' &&     <div className="p-8 bg-white">
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
      </div>}
    </div>
  );
}

export default ManageRiders;
