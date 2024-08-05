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
  Chip,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
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
import { BackspaceRounded } from "@mui/icons-material";
import {
  BsBackspaceReverse,
  BsFillSkipBackwardCircleFill,
} from "react-icons/bs";
import { RouteEnum } from "constants/RouteConstants";

function SingleProduct() {
  const [open, setOpen] = React.useState(false);
  const [filtername, setfiltername] = React.useState("Select Filter");
  const [currentSingleProduct, setcurrentSingleProduct] = React.useState(""
  );
  const [userId, setUserId] = React.useState(null);
  const [start_date, setStart_date] = React.useState();
  const [end_date, setEnd_date] = React.useState();
  const [riderId, setRiderId] = React.useState();
  const handleChange = (event) => {
    setRiderId(event.target.value);
  };
  const history = useNavigate();
  const { id } = useParams();

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

  const getProductbyId = UserApi?.useGetProductsByIdQuery({ productId: id });
  const singleProduct = getProductbyId?.data?.data?.product;

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

  useEffect(() => {
    setcurrentSingleProduct(singleProduct?.product_images[0]?.image);
  }, [singleProduct]);

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

  // console.log(JSON.parse(singleProduct.tags));
  return (
    <div className="relative w-full my-8">
      <Paper elevation={3} className="mt-12 p-12">
        <BsFillSkipBackwardCircleFill
          size={32}
          className="mb-6 cursor-pointer text-primary-main"
          onClick={() => {
            history(RouteEnum.PRODUCT_MANAGEMENT);
          }}
        />
        <div className="flex w-full gap-4">
          <div className="flex flex-col gap-2 w-1/2">
            <Paper
              elevation={2}
              className="w-full h-full flex items-center justify-center "
            >
              <img className="w-full object-cover" src={currentSingleProduct} />
            </Paper>
            <div className="flex flex gap-2 ">
              {singleProduct?.product_images?.map((e) => (
                <Paper
                  onClick={() => setcurrentSingleProduct(e?.image)}
                  elevation={1}
                  className="w-[25%] h-[120px] cursor-pointer"
                >
                  <img className="h-full " src={e?.image} />
                </Paper>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex justify-between items-center mb-6">
              <Typography className="text-primary-main font-bold" variant="h4">
                {singleProduct?.name}
              </Typography>
              <Typography
                className={`p-2 px-6  text-center  font-bold ${
                  singleProduct?.availability == "available"
                    ? "text-[#0F973D] bg-[#D1FFE3]"
                    : "text-[#FFC600] bg-[#FFC60029]"
                }`}
              >
                {singleProduct?.availability?.toUpperCase()}
              </Typography>
            </div>
            <div className="w-auto">
              <Typography className="font-bold">Description</Typography>
              <Typography>{singleProduct?.description}</Typography>
            </div>
            <div className="w-3/5">
              <Typography className="font-bold mb-3">Category</Typography>

              <div className="flex justify-between">
                <Typography className="text-[#475367] font-bold text-sm">
                  Product Category
                </Typography>
                <Typography className="text-[#475367] font-bold text-sm">
                  Sub Category
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>{singleProduct?.category?.name}</Typography>
                <Typography>{singleProduct?.subcategory?.name}</Typography>
              </div>
            </div>

            <div>
              <div>
                <Typography className="font-bold">Tags (Optional)</Typography>
              </div>
              <div>
                {/* {(singleProduct?.tags||[])?.map((tag) => (
                  <Chip>{tag}</Chip>
                ))} */}
                {singleProduct?.tags}
              </div>
            </div>

            <div>
              <div>
                <Typography className="font-bold mb-3">
                  Pricing Information
                </Typography>
              </div>
              <div>
                <div className="flex w-full py-2">
                  <Typography className="w-1/4">Location</Typography>
                  <Typography className="w-1/4">company Price</Typography>
                  <Typography className="w-1/4">Min Price</Typography>
                  <Typography className="w-1/4">Max Price</Typography>
                </div>
                <Divider />
                {singleProduct?.product_prices?.map((price) => (
                  <div className="flex w-full py-2">
                    <Typography className="w-1/4">{price.region}</Typography>
                    <Typography className="w-1/4">
                      {/* ₦ {(price?.min + price?.max) / 2} */}
                      N/A
                    </Typography>
                    <Typography className="w-1/4">₦ {price?.min}</Typography>
                    <Typography className="w-1/4">₦ {price?.max}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full mt-12 flex flex-col gap-5">
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
        </div> */}
      </Paper>

      {/* Personal Info */}
    </div>
  );
}

export default SingleProduct;
