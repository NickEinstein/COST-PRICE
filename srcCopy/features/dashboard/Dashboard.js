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
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ToDoorSearch from "common/ToDoorSearch";
import WallCards from "common/WallCards";
import Frame1 from "assets/Frame 1618868161.png";
import Frame2 from "assets/Recent Activity.svg";
import Frame3 from "assets/dashboard/Card.svg";
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
// import SingleLineArea from "features/charts/SigleLineArea";
import BasicAreaChart from "features/charts/SigleLineArea";
import BasicLinePLot from "features/charts/BasicLinePlot";
import MerchantsTable from "common/MechantsTables";

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

  const getCompanyStatisticsQueryResult = UserApi.useGetCompanyStatisticsQuery(
    {}
  );
  const companyStatistics = getCompanyStatisticsQueryResult?.data;

  const getAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

  const allBikes = getAllBikesQueryResult?.data?.data;

  useEffect(() => {
    earnings
      ? setCompanyMonthly(getMonthlyEarningsResult?.data?.data)
      : setCompanyMonthly(getMonthlyTripsResult?.data?.data);

    earnings ? setVal("Earnings") : setVal("Rides");
  }, [earnings, getMonthlyEarningsResult, getMonthlyTripsResult]);

  const header = [
    "TRANSACTIONID",
    "CUSTOMER",
    "TOTAL",
    "DATE",
    "PATMENT METHOD",
    "STATUS",
  ];

  const data = [
    {
      id: "#0007366388",
      merchName: "Adeyemi Adekanmi",
      name: "Relaxer",
      merchPrice: "N645",
      age: "2 mins ago",
      city: "N 12344",
      method: "CARD",
      country: "PENDING",
    },
    {
      id: "#0007366388",
      merchName: "Adeyemi Adekanmi",
      name: "Relaxer",
      merchPrice: "N645",
      age: "2 mins ago",
      city: "N 12344",
      method: "CARD",
      country: "PENDING",
    },
    {
      id: "#0007366388",
      merchName: "Adeyemi Adekanmi",
      name: "Relaxer",
      merchPrice: "N645",
      age: "2 mins ago",
      city: "N 12344",
      method: "CARD",
      country: "PENDING",
    },
  ];

  return (
    <div className="pb-12">
      {!show && (
        <div>
          <ToDoorSearch />
          <div className="mb-8">
            <Typography variant="h5" className="font-bold">
              Overview
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
                  name="Rides in progress"
                  img={WallcardIcon4}
                  count={500}
                />
                <WallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Completed"
                  img={WallcardIcon3}
                  count={500}
                />

                <WallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Online"
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
            <Paper className="bg-white  m-4 h-[360px] w-3/5 p-4">
              <Typography variant="h5" className="font-bold mb-6">
                Total Product Sales
              </Typography>
              {/* <DoubleLine /> */}
              {/* <SingleLineArea /> */}
              <BasicAreaChart />
              {/* <img src={Frame1} /> */}
            </Paper>
            <Card className="bg-white  m-4 h-[300px] w-2/5">
              <img src={Frame6} />
            </Card>
          </div>
          <div className="w-full flex gap-5 m-t-6">
            <Card className="bg-white  m-4 w-3/5 p-5">
              <div className="mb-6">
                <Typography variant="h5" className="font-bold">
                  Reports
                </Typography>
                <Typography>Last 7 days</Typography>
              </div>
              <BasicLinePLot />
              {/* <img src={Frame5} /> */}
            </Card>
            <Card className="bg-white  m-4 w-2/5">
              <img src={Frame3} />
              {/* <PieCharts /> */}
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

          <MerchantsTable header={header} data={data} />
        </div>
      )}

      {/* <StackedLInes /> */}
    </div>
  );
}

export default Dashboard;
