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

  // #F55425

  const [pat, setPat] = React.useState([
    {
      name: "Dashboard",
      d: RouteEnum.DASHBOARD,
      imageboolean: false,
      image2: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3444 20.1016H5.57221C3.02337 20.1016 0.958252 18.0248 0.958252 15.4733V8.57269C0.958252 7.30619 1.73965 5.71376 2.7443 4.93151L7.75826 1.02027C9.26524 -0.153099 11.6746 -0.208974 13.2374 0.889898L18.9862 4.9222C20.0931 5.69514 20.9583 7.35276 20.9583 8.70306V15.4825C20.9583 18.0248 18.8931 20.1016 16.3444 20.1016ZM8.61408 2.11915L3.60012 6.03039C2.93965 6.55188 2.3536 7.73457 2.3536 8.57269V15.4733C2.3536 17.2519 3.79547 18.7047 5.57221 18.7047H16.3444C18.1211 18.7047 19.5629 17.2613 19.5629 15.4825V8.70306C19.5629 7.80907 18.921 6.57051 18.1861 6.06764L12.4374 2.03533C11.3769 1.29034 9.62803 1.32758 8.61408 2.11915Z"
            fill="#F55425"
          />
          <path
            d="M10.6405 14.2805C10.2592 14.2805 9.94287 13.9638 9.94287 13.582V10.7883C9.94287 10.4065 10.2592 10.0898 10.6405 10.0898C11.0219 10.0898 11.3382 10.4065 11.3382 10.7883V13.582C11.3382 13.9638 11.0219 14.2805 10.6405 14.2805Z"
            fill="#F55425"
          />
        </svg>
      ),
      image: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3444 20.1016H5.57221C3.02337 20.1016 0.958252 18.0248 0.958252 15.4733V8.57269C0.958252 7.30619 1.73965 5.71376 2.7443 4.93151L7.75826 1.02027C9.26524 -0.153099 11.6746 -0.208974 13.2374 0.889898L18.9862 4.9222C20.0931 5.69514 20.9583 7.35276 20.9583 8.70306V15.4825C20.9583 18.0248 18.8931 20.1016 16.3444 20.1016ZM8.61408 2.11915L3.60012 6.03039C2.93965 6.55188 2.3536 7.73457 2.3536 8.57269V15.4733C2.3536 17.2519 3.79547 18.7047 5.57221 18.7047H16.3444C18.1211 18.7047 19.5629 17.2613 19.5629 15.4825V8.70306C19.5629 7.80907 18.921 6.57051 18.1861 6.06764L12.4374 2.03533C11.3769 1.29034 9.62803 1.32758 8.61408 2.11915Z"
            fill="#A3AED0"
          />
          <path
            d="M10.6405 14.2805C10.2592 14.2805 9.94287 13.9638 9.94287 13.582V10.7883C9.94287 10.4065 10.2592 10.0898 10.6405 10.0898C11.0219 10.0898 11.3382 10.4065 11.3382 10.7883V13.582C11.3382 13.9638 11.0219 14.2805 10.6405 14.2805Z"
            fill="#A3AED0"
          />
        </svg>
      ),
      color: true,
    },
    {
      name: "Product Management",
      d: RouteEnum.PRODUCT_MANAGEMENT,
      imageboolean: true,
      image2: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5167 6.08203H6.18332"
            stroke="#F55425"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5167 9.41602H6.18332"
            stroke="#F55425"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.35 12.749H6.18332"
            stroke="#F55425"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.1833 1.91602H4.51667C3.5962 1.91602 2.85001 2.66221 2.85001 3.58268V16.2113C2.85001 17.3656 3.9951 18.1705 5.08121 17.7794L6.38267 17.3109C6.78935 17.1645 7.237 17.1818 7.63115 17.3592L9.66606 18.2749C10.1011 18.4707 10.599 18.4707 11.0339 18.2749L13.0689 17.3592C13.4631 17.1818 13.9107 17.1645 14.3173 17.3109L15.6188 17.7794C16.7049 18.1705 17.85 17.3656 17.85 16.2113V3.58268C17.85 2.66221 17.1038 1.91602 16.1833 1.91602Z"
            stroke="#F55425"
            stroke-width="1.63636"
            stroke-linecap="round"
          />
        </svg>
      ),
      image: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5167 6.08203H6.18332"
            stroke="#A3AED0"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5167 9.41602H6.18332"
            stroke="#A3AED0"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.35 12.749H6.18332"
            stroke="#A3AED0"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.1833 1.91602H4.51667C3.5962 1.91602 2.85001 2.66221 2.85001 3.58268V16.2113C2.85001 17.3656 3.9951 18.1705 5.08121 17.7794L6.38267 17.3109C6.78935 17.1645 7.237 17.1818 7.63115 17.3592L9.66606 18.2749C10.1011 18.4707 10.599 18.4707 11.0339 18.2749L13.0689 17.3592C13.4631 17.1818 13.9107 17.1645 14.3173 17.3109L15.6188 17.7794C16.7049 18.1705 17.85 17.3656 17.85 16.2113V3.58268C17.85 2.66221 17.1038 1.91602 16.1833 1.91602Z"
            stroke="#A3AED0"
            stroke-width="1.63636"
            stroke-linecap="round"
          />
        </svg>
      ),
      color: false,
    },

    {
      name: "Analytics",
      imageboolean: true,
      d: RouteEnum.ANALYTICS,
      image2: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3167 7.75L11.9392 11.3162C11.5133 11.9551 10.5561 11.8955 10.2127 11.2087L10.0873 10.9579C9.7439 10.2712 8.78671 10.2116 8.3608 10.8504L5.98332 14.4167"
            stroke="#F55425"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="2.6499"
            y="2.75"
            width="15"
            height="15"
            rx="2"
            stroke="#F55425"
            stroke-width="2"
          />
        </svg>
      ),
      image: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3167 7.75L11.9392 11.3162C11.5133 11.9551 10.5561 11.8955 10.2127 11.2087L10.0873 10.9579C9.7439 10.2712 8.78671 10.2116 8.3608 10.8504L5.98332 14.4167"
            stroke="#A3AED0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="2.6499"
            y="2.75"
            width="15"
            height="15"
            rx="2"
            stroke="#A3AED0"
            stroke-width="2"
          />
        </svg>
      ),
      color: false,
    },
    {
      name: "Merchants",
      imageboolean: true,
      d: RouteEnum.MERCHANT_MANAGEMENT,
      image: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9583 18.5658C9.78331 18.5658 8.59998 18.1158 7.70831 17.2241L3.93331 13.4491C3.01664 12.5324 2.53331 11.2658 2.59164 9.97414L2.79164 5.79913C2.88331 3.80746 4.45831 2.23246 6.45831 2.13246L10.6249 1.93246C11.9249 1.87413 13.1833 2.35746 14.1 3.27413L17.8749 7.04913C19.6666 8.8408 19.6666 11.7658 17.8749 13.5575L14.2166 17.2158C13.3166 18.1158 12.1416 18.5658 10.9583 18.5658ZM4.81664 12.5575L8.59164 16.3324C9.89998 17.6408 12.0249 17.6408 13.3333 16.3324L16.9916 12.6741C18.3 11.3658 18.3 9.2408 16.9916 7.93246L13.2084 4.1658C12.5417 3.49913 11.6333 3.14913 10.6749 3.1908L6.50831 3.3908C5.15831 3.44913 4.09998 4.50746 4.03331 5.85746L3.83331 10.0324C3.79164 10.9658 4.14998 11.8908 4.81664 12.5575Z"
            fill="#A3AED0"
          />
          <path
            d="M8.81649 10.8756C7.32482 10.8756 6.10815 9.65898 6.10815 8.16732C6.10815 6.67565 7.32482 5.45898 8.81649 5.45898C10.3082 5.45898 11.5248 6.67565 11.5248 8.16732C11.5248 9.65898 10.3082 10.8756 8.81649 10.8756ZM8.81649 6.70898C8.01649 6.70898 7.35815 7.36732 7.35815 8.16732C7.35815 8.96732 8.01649 9.62565 8.81649 9.62565C9.61649 9.62565 10.2748 8.96732 10.2748 8.16732C10.2748 7.36732 9.61649 6.70898 8.81649 6.70898Z"
            fill="#A3AED0"
          />
          <path
            d="M11.733 15.0422C11.5747 15.0422 11.4164 14.9838 11.2913 14.8589C11.0497 14.6172 11.0497 14.2172 11.2913 13.9756L14.6247 10.6422C14.8664 10.4005 15.2664 10.4005 15.508 10.6422C15.7497 10.8838 15.7497 11.2838 15.508 11.5256L12.1747 14.8589C12.0497 14.9838 11.8913 15.0422 11.733 15.0422Z"
            fill="#A3AED0"
          />
        </svg>
      ),
      image2: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9583 18.5658C9.78331 18.5658 8.59998 18.1158 7.70831 17.2241L3.93331 13.4491C3.01664 12.5324 2.53331 11.2658 2.59164 9.97414L2.79164 5.79913C2.88331 3.80746 4.45831 2.23246 6.45831 2.13246L10.6249 1.93246C11.9249 1.87413 13.1833 2.35746 14.1 3.27413L17.8749 7.04913C19.6666 8.8408 19.6666 11.7658 17.8749 13.5575L14.2166 17.2158C13.3166 18.1158 12.1416 18.5658 10.9583 18.5658ZM4.81664 12.5575L8.59164 16.3324C9.89998 17.6408 12.0249 17.6408 13.3333 16.3324L16.9916 12.6741C18.3 11.3658 18.3 9.2408 16.9916 7.93246L13.2084 4.1658C12.5417 3.49913 11.6333 3.14913 10.6749 3.1908L6.50831 3.3908C5.15831 3.44913 4.09998 4.50746 4.03331 5.85746L3.83331 10.0324C3.79164 10.9658 4.14998 11.8908 4.81664 12.5575Z"
            fill="#F55425"
          />
          <path
            d="M8.81649 10.8756C7.32482 10.8756 6.10815 9.65898 6.10815 8.16732C6.10815 6.67565 7.32482 5.45898 8.81649 5.45898C10.3082 5.45898 11.5248 6.67565 11.5248 8.16732C11.5248 9.65898 10.3082 10.8756 8.81649 10.8756ZM8.81649 6.70898C8.01649 6.70898 7.35815 7.36732 7.35815 8.16732C7.35815 8.96732 8.01649 9.62565 8.81649 9.62565C9.61649 9.62565 10.2748 8.96732 10.2748 8.16732C10.2748 7.36732 9.61649 6.70898 8.81649 6.70898Z"
            fill="#F55425"
          />
          <path
            d="M11.733 15.0422C11.5747 15.0422 11.4164 14.9838 11.2913 14.8589C11.0497 14.6172 11.0497 14.2172 11.2913 13.9756L14.6247 10.6422C14.8664 10.4005 15.2664 10.4005 15.508 10.6422C15.7497 10.8838 15.7497 11.2838 15.508 11.5256L12.1747 14.8589C12.0497 14.9838 11.8913 15.0422 11.733 15.0422Z"
            fill="#F55425"
          />
        </svg>
      ),
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
      image2: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.02334 12.1952C2.49463 11.2447 2.23027 10.7695 2.23027 10.2507C2.23027 9.73181 2.49463 9.25659 3.02334 8.30615L3.96743 6.60898L4.96517 4.94279C5.52392 4.00969 5.8033 3.54314 6.25263 3.28372C6.70196 3.0243 7.24569 3.01563 8.33315 2.99829L10.275 2.96732L12.2168 2.99829C13.3043 3.01563 13.848 3.0243 14.2973 3.28372C14.7467 3.54314 15.026 4.00969 15.5848 4.94279L16.5825 6.60898L17.5266 8.30615C18.0553 9.25659 18.3197 9.73181 18.3197 10.2506C18.3197 10.7695 18.0553 11.2447 17.5266 12.1952L16.5825 13.8923L15.5848 15.5585C15.026 16.4916 14.7467 16.9582 14.2973 17.2176C13.848 17.477 13.3043 17.4857 12.2168 17.503L10.275 17.534L8.33315 17.503C7.24569 17.4857 6.70196 17.477 6.25263 17.2176C5.8033 16.9582 5.52392 16.4916 4.96517 15.5585L3.96743 13.8923L3.02334 12.1952Z"
            stroke="#F55425"
            stroke-width="1.6"
          />
          <circle
            cx="10.2749"
            cy="10.25"
            r="2.5"
            stroke="#F55425"
            stroke-width="1.6"
          />
        </svg>
      ),
      image: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.02334 12.1952C2.49463 11.2447 2.23027 10.7695 2.23027 10.2507C2.23027 9.73181 2.49463 9.25659 3.02334 8.30615L3.96743 6.60898L4.96517 4.94279C5.52392 4.00969 5.8033 3.54314 6.25263 3.28372C6.70196 3.0243 7.24569 3.01563 8.33315 2.99829L10.275 2.96732L12.2168 2.99829C13.3043 3.01563 13.848 3.0243 14.2973 3.28372C14.7467 3.54314 15.026 4.00969 15.5848 4.94279L16.5825 6.60898L17.5266 8.30615C18.0553 9.25659 18.3197 9.73181 18.3197 10.2506C18.3197 10.7695 18.0553 11.2447 17.5266 12.1952L16.5825 13.8923L15.5848 15.5585C15.026 16.4916 14.7467 16.9582 14.2973 17.2176C13.848 17.477 13.3043 17.4857 12.2168 17.503L10.275 17.534L8.33315 17.503C7.24569 17.4857 6.70196 17.477 6.25263 17.2176C5.8033 16.9582 5.52392 16.4916 4.96517 15.5585L3.96743 13.8923L3.02334 12.1952Z"
            stroke="#A3AED0"
            stroke-width="1.6"
          />
          <circle
            cx="10.2749"
            cy="10.25"
            r="2.5"
            stroke="#A3AED0"
            stroke-width="1.6"
          />
        </svg>
      ),
      color: false,
      d: RouteEnum.PROFILE,
    },

    {
      name: "Help &Support",
      imageboolean: true,
      image2: (
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6499 8.79883V8.38216C12.6499 7.00145 13.7692 5.88216 15.1499 5.88216M15.1499 5.88216C16.5306 5.88216 17.6499 7.00145 17.6499 8.38216V8.79883M15.1499 5.88216C16.0703 5.88216 16.8166 5.13597 16.8166 4.2155C16.8166 3.29502 16.0703 2.54883 15.1499 2.54883C14.2295 2.54883 13.4832 3.29502 13.4832 4.2155C13.4832 5.13597 14.2295 5.88216 15.1499 5.88216ZM17.6499 14.5106V15.8821C17.6499 16.8027 16.9037 17.5488 15.9832 17.5488C8.61944 17.5488 2.6499 11.5793 2.6499 4.2155C2.6499 3.29502 3.39609 2.54883 4.31657 2.54883H5.68818C6.36968 2.54883 6.98254 2.96375 7.23564 3.59652L7.91369 5.29163C8.23562 6.09645 7.88688 7.01367 7.11158 7.40132L6.81657 7.54883C6.81657 7.54883 7.23323 9.63213 8.8999 11.2988C10.5666 12.9655 12.6499 13.3821 12.6499 13.3821L12.7974 13.0872C13.185 12.3119 14.1023 11.9631 14.9071 12.285L16.6023 12.9631C17.2349 13.2162 17.6499 13.829 17.6499 14.5106Z"
            stroke="#F55425"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      image: (
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6499 8.79883V8.38216C12.6499 7.00145 13.7692 5.88216 15.1499 5.88216M15.1499 5.88216C16.5306 5.88216 17.6499 7.00145 17.6499 8.38216V8.79883M15.1499 5.88216C16.0703 5.88216 16.8166 5.13597 16.8166 4.2155C16.8166 3.29502 16.0703 2.54883 15.1499 2.54883C14.2295 2.54883 13.4832 3.29502 13.4832 4.2155C13.4832 5.13597 14.2295 5.88216 15.1499 5.88216ZM17.6499 14.5106V15.8821C17.6499 16.8027 16.9037 17.5488 15.9832 17.5488C8.61944 17.5488 2.6499 11.5793 2.6499 4.2155C2.6499 3.29502 3.39609 2.54883 4.31657 2.54883H5.68818C6.36968 2.54883 6.98254 2.96375 7.23564 3.59652L7.91369 5.29163C8.23562 6.09645 7.88688 7.01367 7.11158 7.40132L6.81657 7.54883C6.81657 7.54883 7.23323 9.63213 8.8999 11.2988C10.5666 12.9655 12.6499 13.3821 12.6499 13.3821L12.7974 13.0872C13.185 12.3119 14.1023 11.9631 14.9071 12.285L16.6023 12.9631C17.2349 13.2162 17.6499 13.829 17.6499 14.5106Z"
            stroke="#A3AED0"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
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
        <List className="px-2">
          {pat.map((text, index) => (
            <ListItem
              className={
                text.color ? "mb-3 border-r-4 border-r-[#F55425]" : "mb-3"
              }
              style={{
                // borderRight: text.color ? "4px" : "",
                // border: '2px solid red',

                borderRadius: text.color ? "60px 0 0 60px" : "",
                // borderBottomLeftRadius: text.color ? "10%" : "",
                // border-r-2 border-r-[#F55425]
                backgroundColor: text.color ? "#2B3674" : "",
                color: text.color ? "white" : "",
              }}
              key={text.name}
              disablePadding
            >
              <ListItemButton
                className="flex justify-start border items-center "
                onClick={() => {
                  redirect(text.d);
                  changeColorOnActive(index);
                }}
              >
                <ListItemIcon className=" flex">
                  {text.imageboolean ? text.image : text.image2}
                  {/* <img src={text.imageboolean ? text.image : text.image2} /> */}
                </ListItemIcon>
                <ListItemText className="text-base" primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
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
        </List>
      </Drawer>
    </Box>
  );
}
