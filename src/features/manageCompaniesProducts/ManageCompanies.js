import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useSnackbar } from "notistack";
import gigLogo from "images/Ellipse 56.png";
import {
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ManageCompanyCard from "./ManageCompanyCard";
import { RiArrowLeftSLine } from "react-icons/ri";
import ManageCompaniesTable from "./ManageCompaniesTable";
import NewWallCards from "common/NewWallCards";
import ToDoorSearch from "common/ToDoorSearch";

function ManageCompanies(props) {
  const [show, setShow] = useState(false);
  const handleShow = (event) => {
    setShow(!show);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const top100Films = [
    { label: "Edo State", year: 1994 },
    { label: "Oredo", year: 1972 },
  ];

  const tableArray = [
    {
      image: gigLogo,
      name: "Nickky Samuel jonas  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },

    {
      image: gigLogo,
      name: "John jimmy Samuel  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },
  ];


  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

 
 

  return (
    <div>
      <ToDoorSearch />
      {!show && (
        <div>
          <div className="flex justify-between my-7">
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
          </div>
          <div className="flex justify-between my-7">
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
          </div>
          <div className="flex justify-between my-7">
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
          </div>
        </div>
      )}

      {show && (
        <div>
          <div
            onClick={handleShow}
            className="flex items-center mb-8 cursor-pointer w-16 p-2"
          >
            <div
              style={{ border: "1px solid #494949" }}
              className="border-solid w-5 mr-2 rounded h-5 flex justify-center items-center"
            >
              <RiArrowLeftSLine
                className=""
                style={{ fontSize: "22px", color: "#494949" }}
              />
            </div>
            <p style={{ color: "#494949" }} className="text-base">
              Back
            </p>
          </div>

          <div
            className="flex items-center"
            style={{ backGroundColor: "#1E1E1E" }}
          >
            <img src={gigLogo} />
            <Typography variant="h5" className="font-bold ml-4 ">
              GIG LOGISTICS
            </Typography>
          </div>
          <div className="flex ">
            <div className="flex items-center  mt-8 border2 p-2">
              <NewWallCards
                dashboard={true}
                small={true}
                bigspace={true}
                name="Riders"
                count="20"
              />
            
              <NewWallCards
                dashboard={true}
                small={true}
                cutborder={true}
                name="Earnings"
                count="30,000"
              />
            </div>
          </div>
          <div className="flex justify-between  items-end">
            <Typography
              variant="h5"
              className="font-bold mt-8 text-primary-main"
            >
              Riders
            </Typography>

            <div className="flex justify-between items-end">
              <Autocomplete
                className="mr-3"
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>

          {tableArray.map((e) => (
            <ManageCompaniesTable tableArray={e} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageCompanies;
