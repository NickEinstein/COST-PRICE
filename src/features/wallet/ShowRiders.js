import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useSnackbar } from "notistack";

import { useNavigate } from "react-router-dom";

function ManageRiders(props) {
  
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

 

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();



 

  return (
    <div>
      <div className="flex justify-between my-7">
        <ManageRiders />
        <ManageRiders />
        <ManageRiders />
      </div>
      <div className="flex justify-between my-7">
        <ManageRiders />
        <ManageRiders />
        <ManageRiders />
      </div>
      <div className="flex justify-between my-7">
        <ManageRiders />
        <ManageRiders />
        <ManageRiders />
      </div>
    </div>
  );
}

export default ManageRiders;
