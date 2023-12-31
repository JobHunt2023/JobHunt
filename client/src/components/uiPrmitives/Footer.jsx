import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-footer-bg-color">
        <div className="mx-auto  max-w-screen-xl flex flex-row justify-around gap-y-8 gap-x-12 px-4 py-10 xl:px-10">
          <div className="max-w-sm">
            <div className="mb-6 flex h-12 items-center space-x-2">
              <span className="text-2xl text-footer-txt-color">
                Job<span className="text-footer-txt-color font-bold">Hunt</span>
                .
              </span>
            </div>
            <div className="text-footer-txt-color">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad
              a officia ea expedita!
            </div>
          </div>
          {/* <div className="">
      <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
      <div className="text-footer-txt-color">
        35 Remida Heights, <br />
        45 Street, <br />
        South Caroline, US
      </div>
    </div> */}
          <div className="">
            <div className="mt-4 mb-2 text-footer-txt-color font-medium xl:mb-4">
              Links
            </div>
            <nav
              aria-label="Footer Navigation"
              className="text-footer-txt-color"
            >
              <ul className="space-y-3">
                {/* <li>
            <a className="hover:text-footer-txt-hover hover:underline" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-footer-txt-hover hover:underline" href="#">
              Demo
            </a>
          </li> */}
                <li>
                  <Link
                    className="hover:text-footer-txt-hover hover:underline"
                    to="/aboutus"
                  >
                    About Us
                  </Link>
                </li>
                {/* <li>
            <a className="hover:text-footer-txt-hover hover:underline" href="#">
              Support Hub
            </a>
          </li> */}
                <li>
                  <Link
                    className="hover:text-footer-txt-hover hover:underline"
                    to="/contactus"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div className="">
      <div className="mt-4 mb-2 font-medium xl:mb-4">
        Subscribe to our Newsletter
      </div>
      <div className="flex flex-col">
        <div className="mb-4">
          <input
            type="email"
            className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-foottext-footer-txt-color"
            placeholder="Enter your email"
          />
          <button className="block rounded-xl bg-foottext-footer-txt-color px-6 py-3 font-medium text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div> */}
        </div>
        <div className="bg-none text-footer-txt-hover flex flex-row justify-around pb-4 pt-20">
          <div className="">
            Job<span className="font-bold">Hunt</span> © 2023 All Rights
            Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};
