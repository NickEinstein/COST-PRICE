import React, { useState } from "react";
import UserApi from "apis/UserApi";
import moment from "moment";
import { useSnackbar } from "notistack";
import useAuthUser from "hooks/useAuthUser";

import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { put } from "services/fetch";

function EditBikes({ editbikeObj, handleClose }) {
  const [address, setAddress] = React.useState(editbikeObj?.address);
  const [city, setCity] = React.useState(editbikeObj?.city);
  const [phoneNumber, setPhoneNumber] = React.useState(editbikeObj?.phoneNo);
  const [state, setState] = React.useState(editbikeObj?.state);
  const [email, setEmail] = useState(editbikeObj?.email);
  const [name, setName] = useState(editbikeObj?.fname);
  const [password, setPassword] = useState(editbikeObj?.password);
  const [userId, setUserId] = useState(editbikeObj?._id);
  const [liscence, setLiscence] = useState(editbikeObj?.liscence);
  const [bikeCompany, setBikeCompany] = useState(
    editbikeObj?.bikeDetails?.company
  );
  const [bikeModel, setBikeModel] = useState(
    editbikeObj?.bikeDetails?.bikeModel
  );
  const [bikeRegNo, setBikeRegNo] = useState(editbikeObj?.bikeDetails?.regNo);
  const [bikeOwner, setBikeOwner] = useState(
    editbikeObj?.bikeDetails?.RC_ownerName
  );

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [updateBikeMuation, updateBikeMutationResult] =
    UserApi.useUpdateBikeMutation({ userId });

  const onSubmit = async () => {
    let payload = {
      email: email,
      phoneNo: phoneNumber,
      password: password,
      userType: "rider",
      companyId: authUser._id,
      fname: name,
      // lname: null,
      // email: "rider2@gmail.com",
      // phoneNo: "",
      // password:
      //   "$2b$10$K2BQR9MZOVjVmSIjleNPuewEgJdsav8mXAs4AfaJfA3gO2k0FopaG",
      dob: "1993-12-07T23:00:00.000Z",
      bloodGroup: "B+",
      address: address,
      city: city,
      state: state,
      country: "Nigeria",
      bikeDetails: {
        type: "bike",
        company: bikeCompany,
        regNo: bikeRegNo,
        RC_ownerName: bikeOwner,
        bikeNo: "",
        bikeModel: bikeModel,
        // regDate: bikeDate,
      },
    };

    const res = await put({
      endpoint: `api/company/updateBike?userId=${userId}`,
      body: payload,
      auth: true,
    });

    enqueueSnackbar("updated successfully", { variant: "success" });

    handleClose();
  };

  return (
    <div className="add-bike">
      {/* <ToDoorSearch /> */}

      <div class="w-full">
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">Drivers Full Name</p>
            <TextField
              className="w-full bg-[#EBEBEB] border-none"
              multiline={true}
              rows={1.5}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full ">
            <p className="font-bold">Drivers Phone No.</p>
            <TextField
              disabled
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              value={phoneNumber}
              rows={1.5}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">Email Address</p>
            <TextField
              disabled
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              value={email}
              multiline={true}
              rows={1.5}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Liscence Expiry</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              onChange={(e) => setLiscence(e.target.value)}
              value={liscence}
              rows={1.5}
            />
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">City</p>
            <TextField
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              value={city}
              multiline={true}
              rows={1.5}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">State</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              value={state}
              rows={1.5}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full ">
            <p className="font-bold">House Address</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              value={address}
              multiline={true}
              rows={2}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex justify-between mb-8 gap-12">
          <Button onClick={onSubmit} className="h-12 w-2/6 bg-primary-main">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditBikes;
