import React, { useState } from "react";
import leftInput from "images/attach-circle.png";
import rightInput from "images/Vector.png";
import gigLogo from "images/Ellipse 56.png";
import {
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { RiArrowLeftSLine } from "react-icons/ri";

function SupportChart({ setOpen, open }) {
  const [show, setShow] = useState(false);
  const handleShow = (event) => {
    setShow(!show);
  };

  return (
    <div>
      <div>
        <div
          onClick={handleShow}
          className="flex items-center mb-2 cursor-pointer w-16 p-2"
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
          <p
            onClick={() => setOpen(!open)}
            style={{ color: "#494949" }}
            className="text-base"
          >
            Back
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div
            className="flex items-center"
            style={{ backGroundColor: "#1E1E1E" }}
          >
            <img src={gigLogo} />
            <Typography variant="h5" className="font-bold ml-4 ">
              Taiwo Daniel
            </Typography>
          </div>

          <Button variant="outlined">View Profile</Button>
        </div>
        <Divider className="my-4" />
        <div className=" ">
          <p className="text-center text-[#50555C]">Today Sept. 10th, 2022</p>
        </div>
      </div>
      <div className="relative p-4 w-full">
        <div className="">
          <div>
            <div className="  max-w-[25%] left-0 ">
              <div className="flex">
                <p
                  style={{ borderRadius: "5px" }}
                  className="px-4 py-1 bg-[#EBEBEB]"
                >
                  Hello
                </p>
              </div>
              <p
                className=" text-left"
                style={{
                  fontSize: "9px",
                  color: "#767676",
                }}
              >
                12:22pm
              </p>
            </div>
            <div className=" ml-auto text-white max-w-[25%] left-0 ">
              <p
                style={{ borderRadius: "5px" }}
                className="px-4 py-1 bg-[#037329]"
              >
                Good afternoon Taiwo How may we be of service to you.
              </p>
              <p
                className=" text-right "
                style={{
                  fontSize: "9px",
                  color: "#767676",
                }}
              >
                12:22pm
              </p>
            </div>
          </div>
        </div>

        <TextField
          className="w-full mt-12"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <img
                  className="cursor-pointer"
                  style={{ width: "18px" }}
                  src={rightInput}
                />
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <img
                  className="cursor-pointer"
                  style={{ width: "18px" }}
                  src={leftInput}
                />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default SupportChart;
