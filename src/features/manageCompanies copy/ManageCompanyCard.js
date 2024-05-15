import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useSnackbar } from "notistack";
import gigLogo from "images/Ellipse 56.png";

import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ManageCompanyCard(props) {
  const history = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  return (
    <div className="">
      <Card
        className=" text-black text-center relative"
        sx={{ minWidth: 255, minHeight: 120, backgroundColor: "#EBEBEB" }}
      >
        <CardContent className="">
          <div
            onClick={props.handleShow}
            className="flex pb-2  cursor-pointer"
            style={{ backGroundColor: "#EBEBEB" }}
          >
            <img src={gigLogo} />
            <div
              className="ml-2 text-left"
              style={{ backGroundColor: "#EBEBEB" }}
            >
              <Typography variant="h6">GIG Logistics</Typography>
              <p className="medium-size cardhead">Apapa, Lagos</p>
            </div>
          </div>

          <Divider />

          <div className="w-4/5 ">
            <div className=" text-left pt-2">
              <div className="">
                <div className=" relative flex">
                  <img
                    className="absolute"
                    style={{ width: "27px" }}
                    src={gigLogo}
                  />
                  <img
                    className="absolute"
                    style={{ width: "27px", left: "20px" }}
                    src={gigLogo}
                  />
                </div>
                <div>
                  <Typography className="ml-14 mt-1 font-bold text-sm">
                    33 Riders
                  </Typography>
                </div>
              </div>
              <div className="mt-4 " style={{ backGroundColor: "#EBEBEB" }}>
                <div>
                  <Typography className="text-sm font-bold text-cardhead-blue">
                    NGN 20,000 Earned
                  </Typography>
                  <p className="medium-size cardhead">Since Aug 29, 2022</p>
                </div>

                <p className="text-lg cardhead absolute bottom-3 opacity-50 right-2">
                  ...
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ManageCompanyCard;
