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
  InputLabel,
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
import { post } from "services/fetchDocuments";

function Trips() {
  const [open, setOpen] = React.useState(false);
  const [filtername, setfiltername] = React.useState("Select Filter");
  const [productDetails, setproductDetails] = useState({});
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

  // const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  // const user = getUserQueryResult?.data?.data;

  // const getHistoryQueryResult = UserApi?.useGetHistoryQuery({
  //   to: end_date,
  //   from: start_date,
  //   riderId: riderId,
  // });
  const getAllCategories = UserApi?.useGetCategoriesQuery();

  const allCategories = getAllCategories?.data?.data?.categories || [];

  console.log(getAllCategories);

  const getSubCategoryQueryResult = UserApi?.useGetSubCategoriesQuery({
    categoryId: productDetails.category_id,
  });
  const subCategories =
    getSubCategoryQueryResult?.data?.data?.sub_categories || [];

  const availability = [
    {
      id: "available",
      name: "Available",
    },
    { id: "Unavailable", name: "unavailable" },
    { id: "Discontinued", name: "Discontinued" },
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

  let variants = { color: "yellow", lights: "yes" };
  let tags = ["overall", "rain coat"];
  let specification = { weight: "5kg", volume: "2cl" };

  const createProduct = async () => {
    const formData = new FormData();
    formData.append("category_id", productDetails.category_id);
    formData.append("sub_category_id", productDetails.sub_category_id);
    formData.append("name", productDetails.name);
    formData.append("description", productDetails.description);
    // formData.append("specification", null);
    formData.append("availability", productDetails.availability);
    // formData.append("images", productDetails.images);
    formData.append("variants", JSON.stringify(variants));
    formData.append("tags", JSON.stringify(tags));
    formData.append("specification", JSON.stringify(specification));
    formData.append("images[0]", productDetails.images);
    formData.append(" prices[0][region]", 20);
    formData.append(" prices[0][min]", 2);
    formData.append(" prices[0][max]", 200);

    const res = await post({
      endpoint: "product",
      body: formData,
      // auth: false,
    });
    //     category_id
    // 55d716d0-75c6-43db-90cf-dc0fea804ad7

    // sub_category_id
    // 5d530402-af6a-4d0e-ab76-2cc49cc778dc

    // name
    // Hi-tech jacket

    // description
    // a wonderful text, a great text

    // specification
    // {"weight":"5kg","volume":"2cl"}

    // availability
    // available

    // images[0]
    // variants
    // {"color":"yellow","lights":"yes"}

    // tags
    // ["overall","rain coat"]

    // prices[0][region]
    // south-west

    // prices[0][min]
    // 20

    // prices[0][max]
    // 20

    // prices[1][region]
    // south-east

    // prices[1][min]
    // 20

    // prices[1][max]
    // 20
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
        console.log(info.file);
        setproductDetails({
          ...productDetails,
          images: info.file.originFileObj,
        });
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

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setproductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
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
          <Button onClick={() => createProduct()}>Save Product</Button>
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
                  <TextField
                    name="name"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div>
              <div className="w-full justify-between mt-3">
                <div className="w-full ">
                  <Typography className="font-bold">Description</Typography>
                  <TextField
                    name="description"
                    onChange={onChange}
                    multiline
                    rows={5}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div>
              <Divider />
            </div>
          </div>
          {/* <input type="file" onChange={(e) => console.log(e.target.files[0])} /> */}
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
                  <TextField
                    name="location"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div>
              <div className="w-full justify-between mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">Company Price</Typography>
                  <TextField
                    name="companyPrice"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div>
              <div className="w-full flex gap-4 justify-between mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">
                    Recommended Price (min)
                  </Typography>
                  <TextField
                    name="minPrice"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
                <div className="w-full ">
                  <Typography className="font-bold">
                    Recommended Price (max)
                  </Typography>
                  <TextField
                    name="maxPrice"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div>
              <Divider />
            </div>
          </div>{" "}
          <div className="w-full flex gap-4 justify-between mt-4">
            <div className="w-full ">
              <Typography className="font-bold">Specification</Typography>
              <TextField
                name="specification"
                // onChange={onChange}
                className="w-full"
                fullWidth
              />
            </div>
            <div className="w-full ">
              <Typography className="font-bold">Description</Typography>
              <TextField
                name="maxPrice"
                // onChange={onChange}
                className="w-full"
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className="w-2/5">
          <div className="p-8 bg-white mt-5">
            {/* <Typography className="font-bold">Category</Typography> */}
            <div className="mt-8">
              <div className="w-full justify-between ">
                {/* <div className="w-full ">
                  <Typography className="font-bold">
                    Product Category
                  </Typography>
                  <TextField name="category" onChange={onChange} className="w-full" fullWidth />
                </div> */}
                <div className="w-full">
                  <InputLabel className="text-left mb-2"> Category</InputLabel>
                  <TextField
                    onChange={(e) => {
                      onChange(e);
                      // getLgas(e.target.value);
                    }}
                    fullWidth
                    id="outlined-select-currency"
                    select
                    // label="Select"
                    name="category_id"
                    // value={completeRegFormData?.state_id}

                    // helperText="Please select your currency"
                  >
                    {allCategories?.map((option) => (
                      <MenuItem key={option.id} value={option?.id}>
                        {option?.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>

              <div className="w-full mt-4">
                <InputLabel className="text-left mb-2">Sub Category</InputLabel>
                <TextField
                  onChange={(e) => {
                    onChange(e);
                    // getLgas(e.target.value);
                  }}
                  fullWidth
                  id="outlined-select-currency"
                  select
                  // label="Select"
                  name="sub_category_id"
                  // value={completeRegFormData?.state_id}

                  // helperText="Please select your currency"
                >
                  {subCategories?.map((option) => (
                    <MenuItem key={option.id} value={option?.id}>
                      {option?.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              {/* <div className="w-full justify-between  mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">Sub Category</Typography>
                  <TextField
                    name="subCategory"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div> */}
              <div className="w-full justify-between mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">Tags (Optional)</Typography>
                  <TextField
                    name="tags"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 p-8 bg-white">
            <div className="w-full justify-between p-5">
              {/* <div className="w-2/5">
                <Typography className="font-bold">Availability</Typography>
              </div> */}
              <div className="w-full justify-between  mt-4">
                {/* <div className="w-full ">
                  <Typography className="font-bold">
                    Product Availability
                  </Typography>
                  <TextField
                    name="availability"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div> */}
                <div className="w-full mt-4">
                  <InputLabel className="text-left mb-2">
                    Availability
                  </InputLabel>
                  <TextField
                    onChange={(e) => {
                      onChange(e);
                      // getLgas(e.target.value);
                    }}
                    fullWidth
                    id="outlined-select-currency"
                    select
                    // label="Select"
                    name="availability"
                    // value={completeRegFormData?.state_id}

                    // helperText="Please select your currency"
                  >
                    {availability?.map((option) => (
                      <MenuItem key={option.id} value={option?.id}>
                        {option?.name}
                      </MenuItem>
                    ))}
                  </TextField>
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
                  <TextField
                    name="variants"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
                </div>
              </div>
              <div className="w-full justify-between mt-4">
                <div className="w-full ">
                  <Typography className="font-bold">attribute</Typography>
                  <TextField
                    name="attribute"
                    onChange={onChange}
                    className="w-full"
                    fullWidth
                  />
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
