import React from "react";
import ReactDOM from "react-dom";
import logo from "images/logo-Softwork.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
// import { Button, Input } from 'antd';
import { Input, Button } from "@mui/material";

const NavBar = (prop) => {
  const history = useNavigate();

  const signUp = () => {
    history("/signup");
  };
  const login = () => {
    history("/login");
  };

 
  return (
    <div className="general-padding" style={{ color: prop.backgroundColor }}>
      <nav className="list-none w-full">
        <div className="flex flex justify-between items-center w-full ">
          <div className="w-1/2">
            <div className="flex justify-between items-center bold">
              <li className="cursor-pointer">
                <img src={logo} className="" />
              </li>
              <li className="cursor-pointer">Post a Job</li>
              <li className="cursor-pointer">Find Work</li>
              <li className="cursor-pointer">Explore</li>
              <li className="cursor-pointer">About Us</li>
            </div>
          </div>
          <ul
            className="flex text-white justify-between items-center bold second-part px-4"
            style={{ width: "35%" }}
          >
            <li></li>
            <li>
              <Button
                color="tetiary"
                onClick={login}
                className="bold p-2 rounded-3xl w-28"
              >
                Login
              </Button>
            </li>
            <li>
              <Button
                color="tetiary"
                onClick={signUp}
                className="bold p-2 w-28"
              >
                SignUp
              </Button>
            </li>
          </ul>
        </div>

        <ul className="flex justify-between bold border2 mt-10 px-16 py-3">
          <li>Web Design</li>
          <li>Development & IT</li>
          <li>Video & Animation</li>
          <li>Writing & Translation</li>
          <li>Design & Creative</li>
          <li>Graphics & Design</li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
