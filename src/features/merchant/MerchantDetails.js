import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import moment from "moment";
import gigLogo from "images/Ellipse 56.png";

import {
  Button,
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
  Divider,
  Paper,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import ToDoorSearch from "common/ToDoorSearch";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { TiEye } from "react-icons/ti";
import { RouteEnum } from "constants/RouteConstants";
import { useSnackbar } from "notistack";

function MerchantDetails() {
  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = React.useState(false);
  const [filtername, setfiltername] = React.useState("Select Filter");
  const [selectedRow, setSelectedRow] = useState(null);
  const [showBikeDetails, setShowBikeDetails] = React.useState(false);

  const history = useNavigate();
  const { id } = useParams();

  const redirect = () => {
    history(RouteEnum.MERCHANT_MANAGEMENT);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, row) => {
    setSelectedRow(row);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSelectedRow(null);
    setAnchorEl(null);
  };

  const getMerchenatListedProductQueryResult =
    UserApi?.useGetMerchantProductsByMerchantIDQuery({
      merchantId: id,
    });
  const merchanteListeedProduct =
    getMerchenatListedProductQueryResult?.data?.data;

  const data = [
    {
      id: "#0007366388",
      merchName: "Adeyemi Adekanmi",
      name: "Relaxer",
      merchPrice: "N 3009",
      age: "Hair Care",
      city: "N 12344",
      country: "PENDING",
    },
    {
      id: "#0007366388",
      merchName: "Adeyemi Adekanmi",
      name: "Relaxer",
      merchPrice: "N 3009",
      age: "Hair Care",
      city: "N 12344",
      city: "N 12344",
      country: "PENDING",
    },
    {
      id: "#0007366388",
      merchName: "Adeyemi Adekanmi",
      name: "Relaxer",
      merchPrice: "N 3009",
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

  const [verifyProductMutation, verifyProductnMutationResult] =
    UserApi.useVerifyProoductMutation();
  const [unverifyProductMutation, unverifyProductnMutationResult] =
    UserApi.useUnVerifyProoductMutation();
  const verify = async (id) => {
    try {
      const data = await verifyProductMutation({
        data: { listing_id: id },
      }).unwrap();
      // TODO extra login
      // redirect();
      enqueueSnackbar("Product Verified", {
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

  const unverify = async (id) => {
    try {
      const data = await unverifyProductMutation({
        data: { listing_id: id },
      }).unwrap();
      // TODO extra login
      // redirect();
      enqueueSnackbar("Product Verified", {
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
  return (
    <div className="relative w-full ">
      <div className="w-full ">
        <div className="w-full">
          <ToDoorSearch />
        </div>

        <div className="mb-8 flex justify-between">
          <Typography variant="h5" className="font-bold text-[#2B3674]">
            Merchant Details
          </Typography>

          <div class="flex gap-5">
            <Button
              className="text-[#2B3674] bg-[#E0E5F2]"
              onClick={() => redirect()}
            >
              {" "}
              Cancel
            </Button>
            <Button onClick={() => redirect()}> Save Changes</Button>
          </div>
        </div>
      </div>

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
                    {merchanteListeedProduct?.fname || "Oladimeji"}{" "}
                    {merchanteListeedProduct?.lname || "Bankole"}
                  </p>
                  <Button className="h-6 bg-primary-main">
                    {merchanteListeedProduct?.phoneNo}
                  </Button>
                  <p className="text-center mt-1">
                    {moment(merchanteListeedProduct?.dob).format("ll") ||
                      "27th June 2022"}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <span>
                  {" "}
                  {merchanteListeedProduct?.address || "Opposite Mofcon"},{" "}
                </span>
                <span> {merchanteListeedProduct?.city || "Maryland,"} </span>
                <p>{merchanteListeedProduct?.state || "Lagos"}</p>
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
                  {/* <p>bikeDetails:{merchanteListeedProduct?.bikeDetails} </p> */}
                  <p>type:{merchanteListeedProduct?.bikeDetails?.type} </p>
                  <p>
                    company:{merchanteListeedProduct?.bikeDetails?.company}{" "}
                  </p>
                  <p>regNo:{merchanteListeedProduct?.bikeDetails?.regNo} </p>
                  <p>
                    RC_ownerName:
                    {merchanteListeedProduct?.bikeDetails?.RC_ownerName}{" "}
                  </p>
                  <p>bikeNo:{merchanteListeedProduct?.bikeDetails?.bikeNo}</p>
                  <p>
                    bikeModel:{merchanteListeedProduct?.bikeDetails?.bikeModel}{" "}
                  </p>
                  <p>
                    regDate:
                    {moment(
                      merchanteListeedProduct?.bikeDetails?.regDate
                    ).format("ll")}{" "}
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
                  <p>
                    accountNo: {merchanteListeedProduct?.bankDetails?.accountNo}
                    ,
                  </p>
                  <p>
                    holderName:{" "}
                    {merchanteListeedProduct?.bankDetails?.holderName},
                  </p>
                  <p>bank: {merchanteListeedProduct?.bankDetails?.bank}</p>
                </div>
              )}
            </div>
          </Box>
        </div>
      </Modal>

      {/* Personal Info */}

      <Paper className="p-[5%] mt-4">
        <div className="flex items-start gap-4 w-full ">
          <img className="w-[90px]" src={gigLogo} />
          <div className="w-full ">
            <div className="w-full ">
              <div className="flex items-center gap-5 mb-3">
                <Typography variant="h5">
                  {merchanteListeedProduct?.merchant_details?.name}
                </Typography>
                <Typography className="p-1 bg-[#FFC60029] text-[#FFC600] text-center">
                  {merchanteListeedProduct?.merchant_details?.status ||
                    "pending"}
                </Typography>
              </div>
              <div className="w-full flex gap-3 items-center my-3">
                <Typography className="text-[#0F973D] min-w-[150px] ">
                  0 verified Products
                </Typography>
                <div className="flex items-center w-full">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <Typography className="p-1">
                    9 total products listed
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-[20%] w-full">
              <div className="w-full">
                <Divider />
                <div className="flex justify-between mt-5">
                  <Typography className="font-bold">Email:</Typography>
                  <Typography className="text-[#8A9099]">
                    {merchanteListeedProduct?.merchant_details?.email}
                  </Typography>
                </div>
                <div className="flex justify-between mt-5">
                  <Typography className="font-bold">Phone</Typography>
                  <Typography className="text-[#8A9099]">
                    {merchanteListeedProduct?.merchant_details?.phone_number}
                  </Typography>
                </div>
              </div>
              <div className="w-full">
                <Divider />
                <div className="flex justify-between mt-5">
                  <Typography className="font-bold">Merchant Type:</Typography>
                  <Typography className="text-[#8A9099]">
                    {merchanteListeedProduct?.merchant_details?.type}
                  </Typography>
                </div>
                <div className="flex justify-between mt-5">
                  <Typography className="font-bold">Location</Typography>
                  <Typography className="text-[#8A9099]">
                    {merchanteListeedProduct?.merchant_details?.state}
                    {merchanteListeedProduct?.merchant_details?.lga},
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Typography variant="h5" className="text-primary-main font-bold mt-16">
          Products Claimed
        </Typography>

        <Table className="bg-white mt-8">
          <TableHead>
            <TableRow>
              <TableCell className="text-[#8B909A]">PRODUCT NO</TableCell>
              <TableCell className="text-[#8B909A]">MERCHANT NAME</TableCell>
              <TableCell className="text-[#8B909A]">PRODUCT NAME</TableCell>
              <TableCell className="text-[#8B909A]">CATEGORY</TableCell>
              <TableCell className="text-[#8B909A]">PRICE</TableCell>
              <TableCell className="text-[#8B909A]">MERCHANT PRICE</TableCell>

              <TableCell className="text-[#8B909A]">STATUS</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {merchanteListeedProduct &&
              merchanteListeedProduct["listed-products"]?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell className="flex gap-2">
                    <img className="w-8 h-8" src={gigLogo} />
                    <div>
                      <o>{merchanteListeedProduct?.merchant_details?.name}</o>
                      <p className="text-ssm">{row?.name}</p>{" "}
                    </div>
                  </TableCell>

                  <TableCell>{row?.product?.name}</TableCell>
                  <TableCell>{row.product.category_id}</TableCell>
                  <TableCell>{row?.price}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>
                    <Typography className="p-1 bg-[#FFC60029] text-[#FFC600] text-center w-4/5">
                      {row.country}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={(event) => handleClick(event, row)}>
                      <AiOutlineMore />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && selectedRow === row}
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
                      <MenuItem
                        className="flex gap-2 text-[#0F973D]"
                        onClick={() => {
                          handleClose();
                          verify(row?.id);
                        }}
                      >
                        <AiFillEdit /> Verify Product
                      </MenuItem>

                      <MenuItem
                        className="flex gap-2 text-[#E61919]"
                        onClick={() => {
                          unverify(row?.id);
                          handleClose();
                        }}
                      >
                        <AiFillDelete /> Decline Verification
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default MerchantDetails;
