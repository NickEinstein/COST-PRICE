import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import moment from "moment";
import gigLogo from "images/Ellipse 56.png";
import producy from "assets/products/Main Image.svg";

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
  Paper,
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

function SingleProduct() {
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
    history("/new-product");
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

  // const allHistory = getHistoryQueryResult?.data?.data;

  const getAllBikesQueryResult = UserApi?.useGetCategoriesQuery();

  // const allBikes = getAllBikesQueryResult?.data?.data;

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
      brand: "PRADA",
      mod: "10 PCS",
      country: "PENDING",
    },
    {
      id: "#0007366388",
      name: "Relaxer",
      age: "Hair Care",
      city: "N 12344",
      country: "PENDING",
      brand: "PRADA",
      mod: "10 PCS",
    },
    {
      id: "#0007366388",
      name: "Relaxer",
      age: "Hair Care",
      city: "N 12344",
      country: "PENDING",
      brand: "PRADA",
      mod: "10 PCS",
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
    <div className="relative w-full my-8">
      <Paper elevation={3} className="p-5 mt-12">
        <Typography className="text-primary-main font-bold my-6" variant="h4">
          Fantasia Love Bond
        </Typography>

        <div className="flex w-full">
          <div className="flex w-full gap-2 min-w-[50%]">
            <div className="flex flex-col gap-2">
              <div className="h-[25%] w-[100px]">
                <img className="h-full " src={producy} />
              </div>
              <div className="h-[25%] w-[100px]">
                <img className="h-full " src={producy} />
              </div>
              <div className="h-[25%] w-[100px]">
                <img className="h-full " src={producy} />
              </div>
              <div className="h-[25%] w-[100px]">
                <img className="h-full " src={producy} />
              </div>
            </div>
            <img src={producy} />
          </div>
          <div className="w-auto">
            <Typography className="font-bold">Description</Typography>

            <Typography>
              Love Bond Potion Unveil The Essence Of Attraction With Love Bond,
              The Potion That Weaves The Threads Of Affection And Desire Into A
              Tapestry Of Deep Connection. Each Drop Is A Symphony Of
              Enchantment, Meticulously Crafted To Kindle The Flames Of Romance.
            </Typography>
          </div>
        </div>

        <div className="w-full mt-12 flex flex-col gap-5">
          <div className="w-full flex gap-4">
            <div className="w-full">
              <Typography className="font-bold">Price</Typography>
              <TextField className="h-12" fullWidth />
            </div>
            <div className="w-full">
              <Typography className="font-bold">Quantity Available</Typography>
              <TextField className="h-12" fullWidth />
            </div>
          </div>
          <div className="w-full">
            <Typography className="font-bold">MOQ</Typography>
            <TextField className="h-12" fullWidth />
          </div>
          <div>
            <Typography className="font-bold text-primary-main mb-3">
              Variants
            </Typography>
            <Typography className="">This Product has no Variants</Typography>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-full">
              <Typography className="font-bold">Product Category</Typography>
              <TextField className="h-12" fullWidth />
            </div>
            <div className="w-full">
              <Typography className="font-bold">Sub Category</Typography>
              <TextField className="h-12" fullWidth />
            </div>
          </div>{" "}
          <div>
            <Typography className="font-bold">Tags</Typography>
            <TextField className="h-12" fullWidth />
          </div>
        </div>
      </Paper>

      <Paper elevation={3} className="p-5">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={valuez}
            onChange={handleChangeTab}
            textColor="secondary"
            indicatorColor="secondary"
            className="m-2"
            aria-label="secondary tabs example"
          >
            <Tab className="bg-transparent" value="one" label="ORDER DETAILS" />
            <Tab className="bg-transparent" value="two" label="PRODUCTS" />
            <Tab className="bg-transparent" value="three" label="INVOICE" />
          </Tabs>
        </Box>
        <div>
          <Typography className="text-primary-main font-bold my-6" variant="h6">
            Customer
          </Typography>
          <div class="mb-8">
            <div className="flex gap-4 w-full">
              <Typography className="p-2 w-1/4 border-b">Name</Typography>
              <Typography className="p-2 w-1/4 border-b">Email</Typography>
              <Typography className="p-2 w-1/4 border-b">Phone no</Typography>
              <Typography className="p-2 w-1/4 border-b">Location</Typography>
            </div>
            <div className="flex gap-4 w-full">
              <Typography className="py-3 px-2 w-1/4 border-b">
                Regina Cooper
              </Typography>
              <Typography className="py-3 px-2 w-1/4 border-b">
                example@mail.com
              </Typography>
              <Typography className="py-3 px-2 w-1/4 border-b">
                +1(070) 4567–8800
              </Typography>
              <Typography className="py-3 px-2 w-1/4 border-b">
                993 E. Brewer St. Holtsville, NY 11742
              </Typography>
            </div>
          </div>
        </div>

        <div>
          <div class="mb-8">
            <div className="flex gap-4 w-full">
              <Typography
                className="text-primary-main font-bold w-1/4 px-2"
                variant="h6"
              >
                Payment method
              </Typography>
              <Typography
                className="text-primary-main font-bold w-1/4 px-2"
                variant="h6"
              >
                Delivery Details
              </Typography>
              <Typography className="p-2 w-1/4"></Typography>
              <Typography className="p-2 w-1/4"></Typography>
            </div>
            <div className="flex gap-4 w-full mt-3">
              <div className="w-1/4">
                <Typography className="py-3 px-2  border-b border-[#C4C4C4] rounded-3xl border w-11/12">
                  Credit Card
                </Typography>
                <div className="flex mt-4 gap-1">
                  <Typography className="font-bold ml-2">
                    TransactionID:
                  </Typography>
                  <Typography className="">000001-TXHQ</Typography>
                </div>
                <div className="flex mt-2 gap-1">
                  <Typography className="font-bold ml-2">Amount:</Typography>
                  <Typography className="">₦2.500 </Typography>
                </div>
              </div>
              <div class="w-1/4">
                <div className="flex mt-4 gap-1">
                  <Typography className="font-bold ml-2">
                    Tracking Code:
                  </Typography>
                  <Typography className="">000001-TXHQ</Typography>
                </div>
                <div className="flex mt-2 gap-1">
                  <Typography className="font-bold ml-2">Date:</Typography>
                  <Typography className="">12.09.2019 </Typography>
                </div>
              </div>
              <div className="flex mt-2 gap-1 w-2/4  justify-end">
                <div className="bg-[#F8F8F8] w-3/4 rounded-2xl  px-4 ">
                  <div className="w-full">
                    <div className="flex mt-2 gap-3 items-center">
                      <Typography className="font-bold ml-2 w-full">Fulfilment status:</Typography>
                      <Typography className="border-[#C4C4C4] w-full rounded-3xl bg-white px-3 py-2">Delivered</Typography>
                    </div>

                    <div className="flex mt-4 gap-3 items-center">
                      <Typography className="font-bold ml-2 w-full">Fulfilment status:</Typography>
                      <Typography className="border-[#C4C4C4] w-full rounded-3xl bg-white px-3 py-2">Delivered</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>

        <Typography fullWidth className="mt-6 rounded-3xl p-3 text-lg font-bold border border-[#C4C4C4]">Shipping Details</Typography>

          <div class="mb-8">

          
            <div className="flex gap-4 w-full mt-3">
              <div className="w-1/3">
               
                <div className="flex mt-4 gap-1">
                  <Typography className="font-bold ml-2">
                    Address:
                  </Typography>
                  <Typography className="">993 E. Brewer St. Holtsville</Typography>
                </div>
               
              </div>
              <div class="w-1/3">
                <div className="flex mt-4 gap-1">
                  <Typography className="font-bold ml-2">
                   Phone:
                  </Typography>
                  <Typography className="">+1(070) 4567–8800</Typography>
                </div>
                <div className="flex mt-2 gap-1">
                  <Typography className="font-bold ml-2">Date:</Typography>
                  <Typography className="">1example@mail.com </Typography>
                </div>
              </div>
              <div className="w-1/3">
               
               <div className="flex mt-4 gap-1">
                 <Typography className="font-bold ml-2">
                   State/Region:
                 </Typography>
                 <Typography className="">New York</Typography>
               </div>
               <div className="flex mt-2 gap-1">
                 <Typography className="font-bold ml-2">City:</Typography>
                 <Typography className="">New York </Typography>
               </div>
               <div className="flex mt-2 gap-1">
                 <Typography className="font-bold ml-2">Country:</Typography>
                 <Typography className="">United States </Typography>
               </div>
             </div>
            
            </div>
          </div>
        </div>
      </Paper>

      {/* Personal Info */}
    </div>
  );
}

export default SingleProduct;
