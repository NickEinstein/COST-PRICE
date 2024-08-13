import React, { useState } from "react";
import moment from "moment";
import gigLogo from "images/Ellipse 56.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ManageCompaniesTable({ tableArray }) {
  const [suspend, setSuspend] = React.useState(false);
  const [closeModal, setCloseModal] = React.useState(false);
  const [show, setShow] = React.useState("");
  const history = useNavigate();
  function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const openModal = (bol) => {
    setCloseModal(!closeModal);
    setSuspend(bol);
  };

  const tableArrayz = [
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

  const openBelow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="">
        <div
          onClick={openBelow}
          style={{ border: "1px solid #DADADA" }}
          className="px-8 w-full flex border2 py-2 min-h-[50%]"
        >
          <div className="w-1/5  p-3 flex items-center">
            <img src={tableArray?.image} className="rounded-full mr-2" />
            <div>
              <p className="font font-semibold">Bank Transfer</p>
              <p className="text-[#767676]">Withdraw</p>
            </div>
          </div>
          <div className="w-1/5  p-3 ">
            <div>
              <p className="font font-semibold">
                {moment(tableArray?.updatedAt).format("ll")}
              </p>
              <p className="text-[#767676]">
                {moment(tableArray?.updatedAt).format("hh:mm:ss")}
              </p>
            </div>
          </div>
          <div className="w-1/5 flex items-center p-3 ">{tableArray?.id}</div>
          <div className="w-1/5 flex items-center  p-3 ">
            N {numberWithCommas(tableArray?.amount)}
          </div>
          <div className="w-1/5  p-3 ">
            <Button
              onClick={openModal}
              className="px-12 bg-primary-main flex items-center h-8"
            >
              successful
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCompaniesTable;
