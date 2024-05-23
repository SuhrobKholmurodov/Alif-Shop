import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StoreIcon from "@mui/icons-material/Store";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Layout = () => {
  return (
    <div className="all">
      <div className="header pl-[2.5%] pr-[2.5%] fixed top-0 left-0 w-full bg-[#3698d9] shadow-[#b1b1b1] text-white shadow-md z-10">
        <ul className="flex items-center justify-between h-[64px]">
          <li className="flex gap-[7px] items-center">
            <StoreIcon sx={{ fontSize: "40px" }} />
            <p className="text-[22px] font-[700]">Alif</p>
          </li>
          <li className="flex items-center justify-center gap-[10px]">
            <li className="text-[18px]">
              <NavLink as to={"/"} className="navLink">
                Home
              </NavLink>
            </li>
            <li className="text-[18px]">
              <NavLink to={"/contact"} className="navLink">
                Contact
              </NavLink>
            </li>
            <li className="text-[18px]">
              <NavLink to={"/about"} className="navLink">
                About
              </NavLink>
            </li>
          </li>
          <li>
            <Link>
              <p className="absolute text-[13px] ml-[15px] mt-[-7px] h-[17px] rounded-full w-[17px] items-center flex justify-center bg-[red]">1</p>
              <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="content pt-[85px] pb-[30px] pl-[2.5%] pr-[2.5%]">
        <Outlet />
      </div>
      <div className="footer pl-[2.5%] pr-[2.5%] bg-[#3698d9] text-white py-8">
        <div className="container mx-auto flex justify-between">
          <div className="flex-1 mb-4">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>123 Store St, City, Country</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@alifstore.com</p>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Customer Service</h2>
            <ul>
              <li>FAQs</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <ul>
              <li className="flex gap-[5px]">
                <FacebookIcon />
                Facebook
              </li>
              <li className="flex gap-[5px]">
                <InstagramIcon />
                Instagram
              </li>
              <li className="flex gap-[5px]">
                <TwitterIcon />
                Twitter
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Newsletter</h2>
            <p>Subscribe to our newsletter for updates</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Alif. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
