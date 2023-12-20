import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NotificationBtn } from "../notifications/NotificationBtn";
import { Bell } from "../../assets/icons/SVG";
import { Users } from "../../assets/icons/Users";
import { NewMessageList } from "../notifications/NewMessageList";
import { ConnectRequestList } from "../notifications/ConnectRequestList";
import { AcceptedConnectionRequest } from "../notifications/AcceptedConnectionRequest";
import UsersImg from "../../assets/icons/UsersImg.png";
import NotificationImg from "../../assets/icons/NotificationImg.png";

export const NavBar = () => {
  const [isNotificationListOpen, setNotificationListOpen] = useState(false);

  const toggleNotificationList = () => {
    setNotificationListOpen(!isNotificationListOpen);
  };

  return (
    <>
        <header className="fixed z-50 bg-white text-[#3B564D] container  flex flex-col overflow-hidden px-16 py-4 lg:flex-row lg:items-center">
          <Link
            to="/"
            className="flex items-center whitespace-nowrap text-2xl "
          >
            <span className="mr-2 w-8">
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="" /> */}
            </span>
            Job<span className="font-black">Hunt</span>
          </Link>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-5 right-5 cursor-pointer lg:hidden"
            htmlFor="navbar-open"
          >
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
          >
            <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
              <li className="lg:mr-12">
                <Link
                  className="rounded text-[#3B564D] transition focus:outline-none focus:ring-1 focus:ring-[#3B564D] focus:ring-offset-4"
                  to="/"
                >
                 Home
                </Link>
              </li>
              <li className="lg:mr-12">
                <Link
                  className="rounded text-[#3B564D] transition focus:outline-none focus:ring-1 focus:ring-[#3B564D] focus:ring-offset-4"
                  to="#"
                >
                  Feed Page
                </Link>
              </li>
              <li className="lg:mr-12">
                <Link
                  className="rounded text-[#3B564D] transition focus:outline-none focus:ring-1 focus:ring-[#3B564D] focus:ring-offset-4"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
              <li className="lg:mr-12">
                <Link
                  className="rounded text-[#3B564D] transition focus:outline-none focus:ring-1 focus:ring-[#3B564D] focus:ring-offset-4"
                  to="#"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li className="lg:mr-12">
        <Link
          className="rounded text-[#3B564D] transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
          href="#"
        >
          FAQ
        </Link>
      </li> */}
            </ul>
            <hr className="mt-4 w-full lg:hidden" />
            <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
              {" "}
              
              {/* user is here */}
              <Link to="/connections">
                <button>
                  {" "}
                  <img src={UsersImg} alt="" className="w-16" />
                </button>
              </Link>
              <div className="relative flex flex-row items-center justify-center">
                <button onClick={toggleNotificationList} className="w-full">
                  {" "}
                  <img src={NotificationImg} alt="" className="w-16" />{" "}
                </button>
              </div>
              {/* user is here */}              

              <Link
                to="#"
                title=""
                className="whitespace-nowrap rounded-xl bg-[#3B564D] px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
              >
                Sign In/ Up
              </Link>
            </div>
          </nav>
        </header>
      {isNotificationListOpen && (
        <div className="absolute top-16 right-56 z-40 max-w-sm mx-auto mt-1 shadow-md bg-white  rounded-[1rem] mb-16 ">
          <NewMessageList />
          <ConnectRequestList />
          <AcceptedConnectionRequest />
        </div>
      )}
    </>
  );
};
