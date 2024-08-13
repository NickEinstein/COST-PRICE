import { lazy } from "react";
import { useMediaQuery } from "@mui/material";
import { MediaQueryBreakpointEnum } from "constants/Global";
import { Navigate, useRoutes } from "react-router-dom";
import Suspense from "common/Suspense";
import { configureRoutes } from "utils/RouteUtils";
import { RouteEnum } from "constants/RouteConstants";
import Box from "@mui/material/Box";
import SideBar from "features/sideBar/SideBar";

function AppProtected(props) {
  // const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  // const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);

  const routes = useRoutes(ROUTES);
  return (
    <>
      {
        <div className="flex ">
          <SideBar />
          <Box className="px-8" component="" sx={{ flexGrow: 1 }}>
            <Suspense>{routes}</Suspense>
          </Box>
        </div>
      }
    </>
  );
}

export default AppProtected;

const ROUTES = configureRoutes([
  {
    path: "*",

    element: <Navigate to={RouteEnum.DASHBOARD} replace />,
  },

  {
    path: RouteEnum.FORGOTPASSWORD,
    element: lazy(() => import("features/login/ForgotPassword")),
  },
  {
    path: RouteEnum.DASHBOARD,
    element: lazy(() => import("features/dashboard/Dashboard")),
  },

  {
    path: RouteEnum.NEW_PRODUCT_PAGE,
    element: lazy(() => import("features/manageCompaniesProducts/NewProductPage.js")),
  },
  {
    path: RouteEnum.SINGLE_PRODUCT_PAGEs,
    element: lazy(() => import("features/manageCompaniesProducts/SingleProduct.js")),
  },
  {
    path: RouteEnum.EDIT_PRODUCT_PAGEs,
    element: lazy(() => import("features/manageCompaniesProducts/EditProductPage")),
  },
  {
    path: RouteEnum.ANALYTICS,
    element: lazy(() => import("features/analytics/Analytics")),
  },
  {
    path: RouteEnum.PRODUCT_MANAGEMENT,
    element: lazy(() => import("features/manageCompaniesProducts/History")),
  },
  {
    path: RouteEnum.MERCHANT_MANAGEMENT,
    element: lazy(() => import("features/merchant/MerchantManagement")),
  },
  {
    path: RouteEnum.MERCHANT_DETAIL,
    element: lazy(() => import("features/merchant/MerchantDetails")),
  },
  {
    path: RouteEnum.MERCHANT_PRODUCT,
    element: lazy(() => import("features/manageCompaniesProducts/SingleProduct")),
  },
  // {
  //   path: RouteEnum.PURCHASE_ORDER,
  //   element: lazy(() => import("features/merchant/PurchaseHistoryOrder")),
  // },
 
  {
    path: RouteEnum.MAPS,
    element: lazy(() => import("features/maps/Maps")),
  },
  {
    path: RouteEnum.ADDRIDERS,
    element: lazy(() => import("features/addriders/AddRider")),
  },
  {
    path: RouteEnum.PROFILE,
    element: lazy(() => import("features/profile/Profile")),
  },
  {
    path: RouteEnum.SUPPORT,
    element: lazy(() => import("features/support/Support")),
  },
]);
