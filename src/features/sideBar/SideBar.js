import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import clipboard from "images/clipboard-text.svg";
import clipboardW from "images/clipboard-text white.svg";
import dashboard from "images/category-2.svg";
import dashboardW from "images/category-2 white.svg";
import wallet from "images/wallet-minus.svg";
import walletW from "images/wallet-minus white.svg";
import smartCar from "images/smart-car.svg";
import smartCarW from "images/smart-car white.svg";
import addBikes from "images/add-square.svg";
import addBikesW from "images/add-square white.svg";
import logouts from "images/logout.png";
import LoginHeader from "common/LoginHeader";
import { RouteEnum } from "constants/RouteConstants";
import { useNavigate } from "react-router-dom";
import useLogout from "hooks/useLogout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const history = useNavigate();
  const { logout } = useLogout();

  const location = useLocation();
  const currentUrl = location.pathname;

  const [outcasts, setOutcasts] = React.useState([
    { name: "Logout", linx: RouteEnum.HOME, image: logouts },
  ]);

  const [pat, setPat] = React.useState([
    {
      name: "Dashboard",
      d: RouteEnum.DASHBOARD,
      imageboolean: false,
      image2: dashboardW,
      image: dashboard,

      color: true,
    },
    {
      name: "Product Management",
      d: RouteEnum.PRODUCT_MANAGEMENT,
      imageboolean: true,
      image2: clipboardW,
      image: clipboard,
      color: false,
    },

    {
      name: "Analytics",
      imageboolean: true,
      d: RouteEnum.ANALYTICS,
      image: wallet,
      image2: walletW,
      color: false,
    },
    {
      name: "Merchants",
      imageboolean: true,
      // d: RouteEnum.TRIPS,
      image: smartCar,
      image2: smartCarW,
      color: false,
    },
    // {
    //   name: "Add Riders",
    //   imageboolean: true,
    //   image2: addBikes,
    //   image: addBikesW,
    //   color: false,
    //   d: RouteEnum.ADDRIDERS,
    // },
    {
      name: "Settings",
      imageboolean: true,
      image2: addBikes,
      image: addBikesW,
      color: false,
      d: RouteEnum.PROFILE,
    },

    {
      name: "Help &Support",
      imageboolean: true,
      // image2: addBikes,
      // image: addBikesW,
      color: false,
      d: RouteEnum.SUPPORT,
    },
  ]);

  const redirect = (push) => {
    history(push);
  };

  useEffect(() => {
    changeColorOnActive();
  }, [currentUrl]);

  const changeColorOnActive = (num) => {
    let k = pat.map((e, index) => ({
      key: e.name,
      name: e.name,
      d: e.d,
      imageboolean: e.d == currentUrl ? false : true,

      image: e.image,
      image2: e.image2,
      color: e.d == currentUrl ? true : false,
    }));

    setPat(k);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#1E1E1E" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="px-3 py-5">
          <LoginHeader />
        </div>
        <List>
          {pat.map((text, index) => (
            <ListItem
              className={"mb-3"}
              style={{
                backgroundColor: text.color ? "#2B3674" : "",
                color: text.color ? "white" : "",
              }}
              key={text.name}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  redirect(text.d);
                  changeColorOnActive(index);
                }}
              >
                <ListItemIcon>
                  <img src={text.imageboolean ? text.image : text.image2} />
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {outcasts.map((text, index) => (
            <ListItem
              className={index % 2 == 0 ? "mt-32" : ""}
              key={text.name}
              disablePadding
            >
              <ListItemButton onClick={() => logout(text.linx)}>
                <ListItemIcon>
                  <img src={text.image} />
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
