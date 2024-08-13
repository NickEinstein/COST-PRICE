import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { MdRefresh } from "react-icons/md";
import { useSnackbar } from "notistack";
import useAuthUser from "hooks/useAuthUser";

import { AiFillWarning } from "react-icons/ai";

import DashboardChart from "./DashboardChart";

import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ToDoorSearch from "common/ToDoorSearch";
import WallCards from "common/WallCards";
import Frame1 from "assets/Frame 1618868161.png";
import Frame2 from "assets/Recent Activity.svg";
import Frame3 from "assets/Sales.png";
import Frame4 from "assets/Top Products.png";
import Frame5 from "assets/Total Revenue.png";
import Frame6 from "assets/Visitor Insights.png";

import WallcardIcon1 from "assets/dashboard/Frame 1618868148.svg";
import WallcardIcon2 from "assets/dashboard/Group 8734 (1).png";
import WallcardIcon3 from "assets/dashboard/Group 8734.png";
import WallcardIcon4 from "assets/dashboard/Group 8738.svg";
import DoubleBars from "features/charts/DoubleBars";
import DoubleLine from "features/charts/DoubleLine";
import StackedLInes from "features/charts/StackedLines";
import PieCharts from "features/charts/PieCharts";

function Dashboard(props) {
  const [earnings, setEarnings] = React.useState(true);
  const [val, setVal] = React.useState("Earnings");
  const [userId, setUserId] = React.useState("635fbde0bfadb9f5ea56afa4");
  const [show, setshow] = React.useState();
  const [companyMonthly, setCompanyMonthly] = useState();
  const handleChange = (event) => {
    setEarnings(!earnings);
  };

  const switsh = () => setshow(!show);
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const authUser = useAuthUser();

  console.log(authUser);

  function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getMonthlyEarningsResult = UserApi?.useGetEarningsByMonthQuery();
  const getMonthlyTripsResult = UserApi?.useGetTripsByMonthQuery();



  

  useEffect(() => {
    earnings
      ? setCompanyMonthly(getMonthlyEarningsResult?.data?.data)
      : setCompanyMonthly(getMonthlyTripsResult?.data?.data);

    earnings ? setVal("Earnings") : setVal("Rides");
  }, [earnings, getMonthlyEarningsResult, getMonthlyTripsResult]);

  return (
    <div>
      {!show && (
        <div>
          <ToDoorSearch />
          <div className="mb-8">
            <Typography variant="h5" className="font-bold">
              Analytics
            </Typography>
          </div>

          <div className="w-full ">
            <div className="flex-between mb-2 text-xs ">
              <p className="font-bold flex text-xs self-end">{""}</p>
              <div className="flex items-center">
                <span className="text-xs mr-1 opacity-50">
                  <MdRefresh />
                </span>
                <span className="text-xs opacity-50">Refresh</span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center  gap-4">
                <WallCards
                  dashboard={true}
                  big={true}
                  name="Total Merchants"
                  count={500}
                  img={WallcardIcon1}
                />
                <WallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Verified Merchant"
                  img={WallcardIcon4}
                  count={500}
                />
                <WallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Total Products"
                  img={WallcardIcon3}
                  count={500}
                />

                <WallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Pending Verifications"
                  img={WallcardIcon2}
                  count={500}
                />
              </div>
            </div>
          </div>
          {/* <DashboardChart
                    companyMonthly={companyMonthly}
                    companyMonthlyTrips={getMonthlyTripsResult?.data?.data}
                  /> */}

          <div className="w-full flex gap-5 items-center first-letter:">
            <Card className="bg-white  m-4 h-[300px] w-3/5">
              <DoubleLine />
              {/* <img src={Frame1} /> */}
            </Card>
            <Card className="bg-white  m-4 h-[300px] w-2/5">
              <img src={Frame6} />
            </Card>
          </div>
          <div className="w-full flex gap-5">
            <Card className="bg-white  m-4 h-[300px] w-3/5">
              <DoubleBars />
              {/* <img src={Frame5} /> */}
            </Card>
            <Card className="bg-white  m-4 h-[300px] w-2/5">
              {/* <img src={Frame3} /> */}
              <PieCharts/>
            </Card>
          </div>
          <div className="w-full flex gap-5">
            <Card className="bg-white  m-4 h-[300px] w-3/5">
              <img className="h-full" src={Frame4} />
            </Card>
            {/* <Card className="bg-white  m-4 h-[300px] w-2/5">
              <img className="h-full w-full" src={Frame2} />
            </Card> */}
          </div>
        </div>
      )}

      {/* <StackedLInes /> */}
    </div>
  );
}

export default Dashboard;
