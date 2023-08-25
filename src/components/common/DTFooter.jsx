import React from "react";
import DtIcon from "./DtIcons";

import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export const DTFooter = () => {
  const icons = [
    <FiFacebook />,
    <FiInstagram />,
    <FiTwitter />,
    <FiLinkedin />,
    <FiGithub />,
  ];

  return (
    <footer className="mt-[77.32px]">
      <div className="mx-auto w-full max-w-screen-xl py-4 lg:py-8">
        <div className="lg:flex lg:pr-[200px] justify-between">
          <div className="mb-6 md:mb-0 lg:w-[30%] w-[100%] lg:ml-[50px] ml-0 lg:px-0 px-4">
            <a href="/" className="block items-center">
              <img
                src="logo.jpeg"
                className="lg:w-[150px] w-[50%] mb-[40px]"
                alt="Digital Tech Pioneers Logo"
              />
            </a>
            <span className="self-center text-[16.22px]">
              We are comitted to creating the best online experience for
              customers visiting your site
            </span>
          </div>

          <div className="grid grid-cols-2 lg:px-0 px-4 lg:mt-0 mt-8 pr-[100px]">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-dt-black uppercase dark:text-white">
                About Us
              </h2>
              <ul className="text-dt-black text-opacity-50 font-medium ">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Lorem
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-dt-black uppercase dark:text-white">
                Reach Us
              </h2>
              <ul className="text-dt-black text-opacity-50 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    andrewmbuga@gmail.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    +254 700463499
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex mt-8 space-x-6 py-8 justify-end px-[50px]">
          {icons.map((icon) => (
            <div key={Math.random(300)}>
              <DtIcon
                icon={icon}
                iconStyle={
                  "text-dt-black p-3 rounded-full shadow shadow-dt-black hover:shadow-dt-blue"
                }
              />
            </div>
          ))}
        </div>

        <hr className="my-6 border-dt-black sm:mx-auto w-full lg:my-8" />

        <div className="text-center">
          <span className="text-sm text-dt-black text-center">
            © 2023
            <a href="/" className="hover:underline">
              Digital Tech Pioneers™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
