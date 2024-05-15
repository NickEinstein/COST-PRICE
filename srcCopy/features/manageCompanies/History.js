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

  const allHistory = getHistoryQueryResult?.data?.data;

  const getProductsQueryResult = UserApi?.useGetProductsQuery();

  const products = getProductsQueryResult?.data?.data;

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
    <div className="relative w-full ">
      <div className="w-full ">
        <div className="w-full">
          <ToDoorSearch />
        </div>

        <div className="mb-8 flex justify-between">
          <Typography variant="h5" className="font-bold">
            Product Management
          </Typography>

          <Button onClick={() => redirect()}> Add New Product</Button>
        </div>
      </div>
      {true && (
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
              <Tab className="bg-transparent" value="one" label="All" />
              <Tab className="bg-transparent" value="two" label="Available" />
              <Tab
                className="bg-transparent"
                value="three"
                label="Unavailable"
              />
              <Tab
                className="bg-transparent"
                value="four"
                label="Discountinued"
              />
            </Tabs>
          </Box>

          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className="flex-between gap-8 w-full mb-4">
                <div className="flex w-full items-center">
                  <Button
                    className="bg-[#0000000A] text-[#2B3674] font-bold p-2"
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick2}
                    endIcon={<RiArrowDownSFill />}
                  >
                    {filtername}
                  </Button>
                  <Menu
                    anchorEl={anchorEl2}
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem
                      className="flex gap-2"
                      onClick={() => handleClose2("Name")}
                    >
                      Name
                    </MenuItem>
                    <MenuItem
                      className="flex gap-2"
                      onClick={() => handleClose2("Category")}
                    >
                      Category
                    </MenuItem>
                    <MenuItem
                      className="flex gap-2"
                      onClick={() => handleClose2("Status")}
                    >
                      Status
                    </MenuItem>
                  </Menu>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          {/* <MdOutlineSearch /> */}
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "7px",
                    }}
                    className="w-3/5 text-ssm "
                    placeholder="Search"
                  />
                </div>
                <DatePicker
                  className=" mr-8 w-full w-[20%]"
                  // label="Basic example"
                  value={start_date}
                  onChange={(newValue) => {
                    // setWorkList({ ...workList, start_date: newValue });
                    setStart_date(moment(newValue).format("YYYY-MM-DD"));
                    // setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </LocalizationProvider>
          </div>

          <Table className="bg-white">
            <TableHead>
              <TableRow>
                <TableCell className="text-[#8B909A]">PRODUCT NO</TableCell>
                <TableCell className="text-[#8B909A]">PRODUCT NAME</TableCell>
                <TableCell className="text-[#8B909A]">CATEGORY</TableCell>
                <TableCell className="text-[#8B909A]">PRICE</TableCell>
                <TableCell className="text-[#8B909A]">BRAND</TableCell>
                <TableCell className="text-[#8B909A]">MOQ</TableCell>
                <TableCell className="text-[#8B909A]">STATUS</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell className="flex gap-2">
                    <img className="w-8 h-8" src={gigLogo} />
                    <div>
                      <o>{row.name}</o>
                      <p className="text-ssm">{row.name}</p>
                    </div>
                  </TableCell>

                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.mod}</TableCell>
                  <TableCell>
                    <Typography className="p-1 bg-[#FFC60029] text-[#FFC600] text-center w-4/5">
                      {row.country}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={handleClick}>
                      <AiOutlineMore />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem className="flex gap-2" onClick={handleClose}>
                        <AiFillEdit /> Edit
                      </MenuItem>
                      <MenuItem className="flex gap-2" onClick={handleClose}>
                        <TiEye /> View
                      </MenuItem>
                      <MenuItem className="flex gap-2" onClick={handleClose}>
                        <AiFillDelete /> Delete
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="w-full flex items-center justify-center"></div>

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <div className="flex items-center gap-64 ">
              <div className="flex items-center ">
                <Avatar
                  sx={{ width: "90px", height: "90px" }}
                  className="mr-3 "
                  alt="Travis Howard"
                  src={gigLogo}
                />
                <div>
                  <p className="text-[#1E1E1E] text-sm mb-1">
                    {user?.fname || "Oladimeji"} {user?.lname || "Bankole"}
                  </p>
                  <Button className="h-6 bg-primary-main">
                    {user?.phoneNo}
                  </Button>
                  <p className="text-center mt-1">
                    {moment(user?.dob).format("ll") || "27th June 2022"}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <span> {user?.address || "Opposite Mofcon"}, </span>
                <span> {user?.city || "Maryland,"} </span>
                <p>{user?.state || "Lagos"}</p>
                <p> {"Nigeria"},</p>
              </div>
            </div>

            <div className="mt-12 text-center ">
              <Button
                onClick={() => setShowBikeDetails(!showBikeDetails)}
                className="w-2/5"
              >
                Bike Details
              </Button>
              {showBikeDetails && (
                <div>
                  {/* <p>bikeDetails:{user?.bikeDetails} </p> */}
                  <p>type:{user?.bikeDetails?.type} </p>
                  <p>company:{user?.bikeDetails?.company} </p>
                  <p>regNo:{user?.bikeDetails?.regNo} </p>
                  <p>RC_ownerName:{user?.bikeDetails?.RC_ownerName} </p>
                  <p>bikeNo:{user?.bikeDetails?.bikeNo}</p>
                  <p>bikeModel:{user?.bikeDetails?.bikeModel} </p>
                  <p>
                    regDate:{moment(user?.bikeDetails?.regDate).format("ll")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 text-center ">
              <Button
                onClick={() => setShowBikeDetails(!showBikeDetails)}
                className="w-2/5"
              >
                Bank Details
              </Button>
              {showBikeDetails && (
                <div>
                  <p>accountNo: {user?.bankDetails?.accountNo},</p>
                  <p>holderName: {user?.bankDetails?.holderName},</p>
                  <p>bank: {user?.bankDetails?.bank}</p>
                </div>
              )}
            </div>
          </Box>
        </div>
      </Modal>

      <Paper elevation={3} className="p-5">
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

      {/* Personal Info */}
    </div>
  );
}

export default Trips;
