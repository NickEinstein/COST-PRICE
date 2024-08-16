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
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
import { useSnackbar } from "notistack";

function ProductManagement() {
  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = React.useState(false);
  const [filtername, setfiltername] = React.useState("Select Filter");
  const [showBikeDetails, setShowBikeDetails] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  const [start_date, setStart_date] = React.useState();
  const [end_date, setEnd_date] = React.useState();
  const [riderId, setRiderId] = React.useState();
  const [reloadProduct, setreloadProduct] = React.useState();
  const handleChange = (event) => {
    setRiderId(event.target.value);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/new-product");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = (link) => {
    setAnchorEl(null);
    setSelectedRow(null);

    // Navigate(link);
  };

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data?.data;

  


  const getProductsQueryResult = UserApi?.useGetProductsQuery({
    // productId: reloadProduct,
  });

  const products = getProductsQueryResult?.data?.data?.products || [];

  const [deleteProductnMuation, deleteProductnMutationResult] =
    UserApi.useDeleteProductMutation();

  const deleteProduct = async (id) => {
    try {
      const data = await deleteProductnMuation({
        productId: id,
      }).unwrap();
      // TODO extra login
      // redirect();
      enqueueSnackbar("Product Deleted", {
        variant: "success",
      });
      setreloadProduct(!reloadProduct);
    } catch (error) {
      enqueueSnackbar(error?.data?.message, "Failed to login", {
        variant: "error",
      });
    }
    // submitForm(values)
  };

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
      <div className="w-full ">
        <div className="w-full">
          <ToDoorSearch />
        </div>

        <div className="mb-8 flex justify-between">
          <Typography variant="h5" className="font-bold">
            Product Management
          </Typography>

          <Button onClick={() => redirect()}> + Add New Product</Button>
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
                    onClose={()=>handleClose2('Select Filter')}
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
                />{" "}
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
                <TableCell className="text-[#8B909A]">STATUS</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(valuez == "three"
                ? products.filter((e) => e.availability === "unavailable")
                : valuez == "two"
                ? products.filter((e) => e.availability === "available")
                : products
              )?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.product_code||'#'}</TableCell>
                  <TableCell className="flex gap-2">
                    <img
                      className="w-8 h-8"
                      src={row?.product_images[0]?.image}
                    />
                    <div>
                      <o>{row.name}</o>
                      <p className="text-ssm">{row.name}</p>{" "}
                    </div>
                  </TableCell>

                  <TableCell>{row.category?.name}</TableCell>
                  <TableCell>{row.product_prices[0]?.max}</TableCell>
                  <TableCell>
                    <Typography
                      className={`p-2 px-6  text-center  font-bold ${
                        row?.availability == "available"
                          ? "text-[#0F973D] bg-[#D1FFE3]"
                          : row?.availability == "unavailable"
                          ? "text-[#FFC600] bg-[#FFC60029]"
                          : "text-[##F43F5E] bg-[#FFF1F2]"
                        // #FFF1F2
                      }`}
                    >
                      {row?.availability?.toUpperCase()}
                    </Typography>
                    {/* <Typography className="p-1 bg-[#FFC60029] text-[#FFC600] text-center w-4/5">
                      {row.availability}
                    </Typography> */}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={(event) => handleClick(event, row)}>
                      <AiOutlineMore />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && selectedRow === row}
                      // open={Boolean(anchorEl)}
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
                      <MenuItem className="flex gap-2" 
                       onClick={() => {
                        history(`${RouteEnum.EDIT_PRODUCT_PAGE}/${row.id}`);
                        handleClose();
                      }}>
                        <AiFillEdit /> Edit
                      </MenuItem>
                      <MenuItem
                        className="flex gap-2"
                        onClick={() => {
                          history(`${RouteEnum.SINGLE_PRODUCT_PAGE}/${row.id}`);
                          handleClose();
                        }}
                      >
                        <TiEye /> View
                      </MenuItem>
                      <MenuItem
                        className="flex gap-2"
                        onClick={() => {
                          handleClose();
                          deleteProduct(row?.id);
                        }}
                      >
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
                    regDate:{moment(user?.bikeDetails?.regDate).format("ll")}{" "}
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

      {/* Personal Info */}
    </div>
  );
}

export default ProductManagement;
