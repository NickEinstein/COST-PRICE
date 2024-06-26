import { lazy } from "react";
import Suspense from "common/Suspense";
import { Navigate, useRoutes } from "react-router-dom";
import { configureRoutes } from "utils/RouteUtils";
import { RouteEnum } from "constants/RouteConstants";

function AppPublic() {
  const routes = useRoutes(ROUTES);

  return <Suspense>{routes}</Suspense>;
}

const ROUTES = configureRoutes([
  {
    path: "*",
    element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.HOME,
    element: lazy(() => import("features/login/Login")),
  },
  {
    path: RouteEnum.SIGNUP,
    element: lazy(() => import("features/signup/Signup")),
  },
  {
    path: RouteEnum.FORGOTPASSWORD,
    element: lazy(() => import("features/login/ForgotPassword")),

    // element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.NEWPASSWORD,
    element: lazy(() => import("features/login/CreateNewPassword")),

    // element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.LOGIN,
    element: lazy(() => import("features/login/Login")),

    // element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.SIGNUP,
    element: lazy(() => import("features/signup/Signup")),

    // element: <Navigate to={RouteEnum.HOME} replace />,
  },

  {
    path: RouteEnum.SIGNUPA,
    element: lazy(() => import("features/signup/Signups")),

    // element: <Navigate to={RouteEnum.HOME} replace />,
  },
  // {
  //   path: RouteEnum.SIGNUPCLIENT,
  //   element: lazy(() => import("features/signup/SignUpClient")),
  // },
  // {
  //   path: RouteEnum.SIGNUPCLIENT,
  //   element: lazy(() => import("features/signup/SignUpClientF")),
  // },
  // {
  //   path: RouteEnum.SIGNUPCLIENTF,
  //   element: lazy(() => import("features/signup/SignUpClientF")),
  // },
  {
    path: RouteEnum.LOGIN,
    element: lazy(() => import("features/login/Login")),
  },
]);

export default AppPublic;
