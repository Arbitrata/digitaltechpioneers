import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import DtButton from "./DtButton";

const DtNavbar = ({}) => {
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "aboutus",
      label: "About us",
    },
    {
      to: "services",
      label: "Services",
    },
    {
      to: "blog",
      label: "Blog",
    },
  ];

  const [open, setOpen] = useState(false);

  const activeLink =
    "text-[14.22px] text-dt-blue md:font-medium font-bold cursor-pointer";

  return (
    <nav className="h-[90.89px] lg:px-0 px-[33px] fixed w-full z-50 lg:bg-dt-white bg-[#e7f4fa] lg:border-b border-opacity-20 border-b-dt-black items-center flex justify-between">
      <div className="w-full h-full basis-1/4 grid place-content-center">
        <img src="logo.jpeg" className="lg:w-[160px] w-auto" />
      </div>
      <ul
        className={`md:flex basis-1/2 lg:w-full lg:h-full w-[50%] lg:bg-dt-white bg-[#e7f4fa]  lg:shadow-none shadow shadow-dt-white grid place-content-center transition-all duration-200 md:static absolute lg:justify-end items-center ${
          open
            ? "top-[90.89px] right-[33px] lg:py-0 py-4"
            : "right-[-400px] md:opacity-100 top-[90.89px]"
        }`}
      >
        {links.map((link) => (
          <li key={link.to} className="text-left px-6 md:mt-0 mt-3">
            <NavLink
              to={link.to}
              onClick={() => setOpen(!open)}
              className={({ isActive }) =>
                isActive
                  ? activeLink
                  : "text-[14.22px] text-dt-black md:px-0 md:py-0 md:font-medium font-bold cursor-pointer"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="basis-1/4 w-full h-full grid place-content-center lg:visible md:visible invisible">
        <Link to={"contactus"}>
          <DtButton buttonText={"Contact us"} buttonStyle={"text-dt-white"} />
        </Link>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden visible md:pl-0 pl-4 text-dt-green"
      >
        {open ? <BiX size={30} /> : <BiMenu size={35} />}
      </button>
    </nav>
  );
};

export default DtNavbar;
