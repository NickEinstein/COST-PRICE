import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiErrorWarningLine } from "react-icons/ri";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { MdArrowBackIosNew } from "react-icons/md";
import { HiSelector } from "react-icons/hi";
import { get, post } from "services/fetch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "3%",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ closeModal, openModal, suspend }) {
  const [open, setOpen] = React.useState(false);
  const [listOfBanks, setListOfBanks] = React.useState([]);
  const [bankInfo, setBankInfo] = React.useState(null);
  const [ConfirmWithdrawal, setConfirmWithdrawal] = React.useState(false);
  const [Confirm, setConfirm] = React.useState(false);
  const [recipientsDetails, setRecipientsDetails] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [accountNumber, setAccountNumber] = React.useState(0);
  const [withDrawalAmount, setWithDrawalAmount] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    getBanks();
  }, []);

  const top100Films = listOfBanks.map((e) => ({
    id: e?.id,
    code: e?.code,
    label: e?.name,
  }));
  const verifyAccount = async () => {
    let payload = {
      account_number: accountNumber,
      account_bank: bankInfo?.code,
    };

    const res = await post({
      endpoint: `api/payment/verifyAccountNumber`,
      body: { ...payload },
      auth: true,
    });
    console.log(res)
    setRecipientsDetails(res?.data?.response?.data)
    if(res.status == 200)
      setCurrent((current) => current + 1);

  };

  const getBanks = async () => {
    // const deleteRider = async () => {
    const res = await get({
      endpoint: `api/payment/getAllBanks`,
      //  body: { ...payload },
      auth: true,
    });
    setListOfBanks(res?.data?.response?.data);
    //  setAllBikez(res.data.data);
  };
  const increaseCurrent = () => {
    if (current < 2) {
      if (current < 1) {
        verifyAccount();
        return;
      }
      setCurrent((current) => current + 1);
    }
  };
  const decreaseCurrent = () => {
    if (current > 0) setCurrent((current) => current - 1);
  };

  const payRecipient = async () => {
    let payload = {
      account_number: accountNumber,
      account_bank: bankInfo?.code,
      amount: +withDrawalAmount,
    };

    const res = await post({
      endpoint: `api/payment/Withdrawal`,
      body: { ...payload },
      auth: true,
    });

    closeModal()
  };

  return (
    <div>
      <Modal
        open={closeModal}
        onClose={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {current == 1 && (
            <Box sx={style}>
              <div className="flex mb-5 text-left ">
                <Typography variant="h5" className="font-bold text-left">
                  Withdraw
                </Typography>
              </div>
              <p className="mb-2">How much do you want to withdraw</p>
              <TextField
                onChange={(e) => setWithDrawalAmount(e.target.value)}
                className="w-full"
              />
              <div className="mt-10">
                <p className="text-primary-main mb-5">Saved Account Info</p>
                <div className="">
                  <div className="flex items-center justify-between mb-3">
                    <p>Account Number:</p>
                    <Typography variant="h5" className="font-bold">
                      {accountNumber}
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <p>Bank</p>
                    <Typography className="font-bold">
                      {bankInfo?.label}
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <p>Company</p>
                    <Typography className="font-bold">
                      {recipientsDetails?.account_name?.toUpperCase()}
                    </Typography>
                  </div>
                </div>
                <Button
                  onClick={() => increaseCurrent()}
                  className="w-full mb-3 mt-9 bg-primary-main"
                >
                  Confirm Withdrawal
                </Button>
                <div class=" flex justify-between text-center text-primary-main font-bold">
                  <div
                    className="flex cursor-pointer"
                    onClick={decreaseCurrent}
                  >
                    <MdArrowBackIosNew className="mr-1" size={16} />
                    <p>Go Back</p>
                  </div>
                  <p>Use another account?</p>
                </div>
              </div>
            </Box>
          )}

          {current == 2 && (
            <Box sx={style}>
              <div className="flex justify-center mb-5 text-left ">
                <Typography variant="h5" className="font-bold">
                  Confirm Withdrawal
                </Typography>
              </div>
              <p className="mb-2 text-center px-8">
                You are transferring{" "}
                <span class="font-bold">NGN {withDrawalAmount} to </span> <br />
                <p class="font-bold mt-2">{recipientsDetails?.account_name}</p>
              </p>

              <div className="mt-10 flex justify-between items-center">
                <div className="flex cursor-pointer" onClick={decreaseCurrent}>
                  <MdArrowBackIosNew className="mr-1" size={16} />
                  <p>Go Back</p>
                </div>
                <Button
                  onClick={() => payRecipient()}
                  className="bg-primary-main"
                >
                  Confirm
                </Button>
              </div>
            </Box>
          )}

          {current == 0 && (
            <Box sx={style}>
              <div className="flex justify-center mb-5 text-left ">
                <Typography variant="h5" className="font-bold">
                  Input Account Info
                </Typography>
              </div>
              <div className="text-left my-8">
                <p className="mb-1 text-left text-sm">Bank Name</p>
                <Autocomplete
                  disablePortal
                  className="w-full bg-[#EBEBEB]"
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  onChange={(e, v) => setBankInfo(v)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>

              <div className="text-left my-8">
                <p className="mb-1 text-left text-sm">Account Number</p>
                <TextField
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full bg-[#EBEBEB]"
                />
              </div>

              <div className="mt-10 flex justify-between items-center">
                <Button
                  onClick={increaseCurrent}
                  className=" bg-primary-main h-10 w-full mb-8"
                >
                  Save Account Info
                </Button>
              </div>
            </Box>
          )}
        </div>
      </Modal>
    </div>
  );
}
