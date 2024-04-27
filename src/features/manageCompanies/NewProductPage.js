import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import moment from "moment";
import gigLogo from "images/Ellipse 56.png";

import {
  Button,
  TextField,
  Select,
  MenuItem,
  Modal,
  Box,
  Avatar,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Menu,
  Tabs,
  Tab,
  InputAdornment,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineMore } from "react-icons/ai";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ToDoorSearch from "common/ToDoorSearch";
import { get } from "services/fetch";
import { AiFillWarning } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { TiEye } from "react-icons/ti";
import fileUpload from "assets/dashboard/file upload states.svg";
import { message, Upload } from "antd";
import { RouteEnum } from "constants/RouteConstants";

function Trips() {
  const [open, setOpen] = React.useState(false);
  const [filtername, setfiltername] = React.useState("Select Filter");
  const [showBikeDetails, setShowBikeDetails] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  const [start_date, setStart_date] = React.useState();
  const [end_date, setEnd_date] = React.useState();
  const [riderId, setRiderId] = React.useState();
  const handleChange = (event) => {
    setRiderId(event.target.value);
  };
  const history = useNavigate();

  const redirect = () => {
    history(RouteEnum.PRODUCT_MANAGEMENT);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data?.data;

  const getHistoryQueryResult = UserApi?.useGetHistoryQuery({
    to: end_date,
    from: start_date,
    riderId: riderId,
  });

  const allHistory = getHistoryQueryResult?.data?.data;

  const getAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

  const allBikes = getAllBikesQueryResult?.data?.data;

  function createData(
    paymentStatus,
    roadMapUrl,
    _id,
    customerId,
    riderId,
    srcLoc,
    destLoc,
    paymentMode,
    details,
    tripRequestStatus,
    tripRequestIssue,
    pickUpAddress,
    destAddress,
    latitudeDelta,
    longitudeDelta,
    tripAmt,
    tripDist,
    bookingTime,
    tripEndTime,
    travelTime,
    bikeType,
    seatBooked,
    tripStatus,
    tripIssue,
    companyId,
    customerRatingByRider,
    customerReviewByRider,
    riderRatingByCustomer,
    riderReviewByCustomer
  ) {
    return {
      paymentStatus,
      roadMapUrl,
      _id,
      customerId,
      riderId,
      srcLoc,
      destLoc,
      paymentMode,
      details,
      tripRequestStatus,
      tripRequestIssue,
      pickUpAddress,
      destAddress,
      latitudeDelta,
      longitudeDelta,
      tripAmt,
      tripDist,
      bookingTime,
      tripEndTime,
      travelTime,
      bikeType,
      seatBooked,
      tripStatus,
      tripIssue,
      companyId,
      customerRatingByRider,
      customerReviewByRider,
      riderRatingByCustomer,
      riderReviewByCustomer,
    };
  }

  const row = allHistory?.map((e) =>
    createData(
      e.paymentStatus,
      e.roadMapUrl,
      e._id,
      e.customerId,
      e.riderId,
      e.srcLoc,
      e.destLoc,
      e.paymentMode,
      e.details,
      e.tripRequestStatus,
      e.tripRequestIssue,
      e.pickUpAddress,
      e.destAddress,
      e.latitudeDelta,
      e.longitudeDelta,
      e.tripAmt,
      e.tripDist,
      e.bookingTime,
      e.tripEndTime,
      e.travelTime,
      e.bikeType,
      e.seatBooked,
      e.tripStatus,
      e.tripIssue,
      e.companyId,
      e.customerRatingByRider,
      e.customerReviewByRider,
      e.riderRatingByCustomer,
      e.riderReviewByCustomer
    )
  );
  const rows = [
    createData(
      "Olalekan Wasiu",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Olalekan Wasiu",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Yaba, Lagos",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Sabo, Kaduna",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
  ];

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const opens = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = (name) => {
    setAnchorEl2(null);
    setfiltername(name);
  };

  const data = [
    {
      id: "#0007366388",
      name: "Relaxer",
      age: "Hair Care",
      city: "N 12344",
      country: "PENDING",
    },
    {
      id: "#0007366388",
      name: "Relaxer",
      age: "Hair Care",
      city: "N 12344",
      country: "PENDING",
    },
    {
      id: "#0007366388",
      name: "Relaxer",
      age: "Hair Care",
      city: "N 12344",
      country: "PENDING",
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    minHeight: "700px",
    bgcolor: "background.paper",
    borderRadius: "3%",
    boxShadow: 24,
    p: 4,
  };

  const [valuez, setValue] = React.useState("one");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
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
  return (
    <div className="relative w-full ">
      <div className="mb-8 mt-8 flex justify-between">
        <Typography variant="h5" className="font-bold">
          New Product
        </Typography>

        <div className="flex gap-2">
          <Button
            onClick={() => redirect()}
            className="bg-[#E0E5F2] text-[#2B3674]"
          >
            Cancel
          </Button>
          <Button>Save Product</Button>
        </div>
      </div>

      {/* Personal Info */}
      <div className="flex gap-5  w-full">
        <div className="w-3/5">
          <div className="p-8 bg-white mt-5">
            <Typography className="font-bold">General Information</Typography>
            <div className="mt-8">
              <div className="w-full justify-between ">
                <div className="w-full ">
                  <Typography className="font-bold">Product Name</Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
              <div className="w-full justify-between mt-3">
                <div className="w-full ">
                  <Typography className="font-bold">Description</Typography>
                  <TextField multiline rows={5} className="w-full" fullWidth />
                </div>
              </div>
              <Divider />
            </div>
          </div>
          <div className="mt-5 p-8 bg-white">
            <div className="w-full justify-between p-5">
              <div className="w-2/5">
                <Typography className="font-bold">Media</Typography>
              </div>
              <div className=" flex gap-5 mt-5">
                <Dragger
                  className="h-60  w-full text-center flex flex-col justify-center items-center"
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
          <div className="p-8 bg-white mt-5">
            <Typography className="font-bold">Pricing Information</Typography>
            <div className="mt-8">
              <div className="w-full justify-between ">
                <div className="w-full ">
                  <Typography className="font-bold">Location</Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
              <div className="w-full justify-between mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">Company Price</Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
              <div className="w-full flex gap-4 justify-between mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">
                    Recommended Price (min)
                  </Typography>
                  <TextField className="w-full" fullWidth />
                </div>
                <div className="w-full ">
                  <Typography className="font-bold">
                    Recommended Price (max)
                  </Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
              <Divider />
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className="p-8 bg-white mt-5">
            <Typography className="font-bold">Category</Typography>
            <div className="mt-8">
              <div className="w-full justify-between ">
                <div className="w-full ">
                  <Typography className="font-bold">
                    Product Category
                  </Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
              <div className="w-full justify-between  mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">Sub Category</Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
              <div className="w-full justify-between  mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">Tags (Optional)</Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 p-8 bg-white">
            <div className="w-full justify-between p-5">
              <div className="w-2/5">
                <Typography className="font-bold">Availability</Typography>
              </div>
              <div className="w-full justify-between  mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">
                    Product Availability
                  </Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
            </div>
            <Divider />
          </div>
          <div className="p-8 bg-white mt-5">
            <Typography className="font-bold">Variations</Typography>
            <div className="mt-8">
              <div className="w-full justify-between ">
                <div className="w-full ">
                  <Typography className="font-bold">Variant</Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
              <div className="w-full justify-between mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">attribute</Typography>
                  <TextField className="w-full" fullWidth />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;
