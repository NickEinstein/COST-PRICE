import React, { useEffect } from "react";
import UserApi from "apis/UserApi";
import Modal from "common/Modal";
import gigLogo from "images/Ellipse 56.png";
import { Typography } from "@mui/material";
import WallCards from "common/WallCards";
import ManageCompaniesTable from "features/manageCompanies/ManageCompaniesTable";

import { MdRefresh } from "react-icons/md";
import ToDoorSearch from "common/ToDoorSearch";
import NewWallCards from "common/NewWallCards";
import { get } from "services/fetch";
import useAuthUser from "hooks/useAuthUser";
function ManageRiders(props) {
  const [closeModal, setCloseModal] = React.useState(false);
  const [payMentTransactions, setPayMentTransactions] = React.useState([]);
  const [totalEarnings, setTotalEarnings] = React.useState([]);
  const [availableBalance, setAvailableBalance] = React.useState([]);

  useEffect(() => {
    getPaymentTransactions();
    getTotalEarningsAndAvailableBalance();
  }, []);

  const authUser = useAuthUser();

  console.log(authUser)


  const getTotalEarningsAndAvailableBalance = async () => {
    const resTotalEarnings = await get({
      endpoint: `api/company/getTotalEarnings`,
      auth: true,
    });
    setTotalEarnings(resTotalEarnings?.data?.data[0]?.total_earning);

    const resAvailableBalance = await get({
      endpoint: `api/payment/getBalance`,
      auth: true,
    });
    setAvailableBalance(resAvailableBalance?.data?.data?.user?.walletBalance);
  };
  function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const openModal = () => {
    setCloseModal(!closeModal);
  };

  const tableArray = payMentTransactions?.map((e) => ({
    image: gigLogo,
    name: "Nickky Samuel jonas  ",
    company: "GIG Logistics",
    amount: e?.amount,
    id: e?.tx_ref,
    updatedAt: e?.updatedAt,
  }));

  const getAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

  const allBikes = getAllBikesQueryResult?.data?.data;

  const getPaymentTransactions = async (zz) => {
    const res = await get({
      endpoint: `api/company/getPaymentTransactions`,
      auth: true,
    });

    setPayMentTransactions(res?.data?.data);
  };

  return (
    <div>
      <ToDoorSearch />

      <Typography variant="h5" className="font-bold  mt-12">
        Wallet
      </Typography>
      <div className="flex items-end mr-3 w-3/6">
        <div className="mr-4">
          <WallCards
            className="mr-3"
            isVerified={authUser?.verified}
            rider={false}
            button={true}
            green={true}
            name="Available Balance"
            count={numberWithCommas(availableBalance||0)}
            openModal={openModal}
          />
        </div>
        <div>
          <div className="flex-between w-6/6 mb-2 text-xs ">
            <p className="font-bold flextext-xs self-end">PAST 30 DAYS</p>
            <div className="flex items-center">
              <span className="text-xs mr-1 opacity-50">
                <MdRefresh />
              </span>
              <span className="text-xs opacity-50">Refresh</span>
            </div>
          </div>
          {/* Dashboard Cards */}
          <div className="flex ">
            <div className="flex items-center border2 p-2">
              <NewWallCards
                dashboard={true}
                // small={true}
                big={true}
                name="Active Bikes"
                count={allBikes?.length}
              />

              <NewWallCards
                dashboard={true}
                earnings={true}
                cutborder={true}
                name="Earnings"
                count={numberWithCommas(totalEarnings)}
              />
            </div>
          </div>
        </div>
      </div>

      <Typography variant="h5" className="font-bold mt-12 text-primary-main">
        Cash Out Transactions
      </Typography>
      <div>
        <div
          style={{ border: "1px solid #DADADA" }}
          className=" cursor-pointer px-8 mt-4 py-2 flex border2 min-h-[50%]"
        >
          <div className="w-1/5  p-3 ">Type</div>
          <div className="w-1/5  p-3 ">
            <p className="">Date</p>
          </div>
          <div className="w-1/5  p-3 ">
            <p className="">Transaction ID</p>
          </div>
          <div className="w-1/5  p-3 ">
            <p className="">Amount</p>
          </div>
          <div className="w-1/5  p-3 ">
            <p className="">Status</p>
          </div>
        </div>
      </div>
      {tableArray.map((e) => (
        <ManageCompaniesTable tableArray={e} />
      ))}
      <Modal openModal={openModal} closeModal={closeModal} />
    </div>
  );
}

export default ManageRiders;
