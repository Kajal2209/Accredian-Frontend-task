import React, { useState } from "react";
import "./App.css";
import FormPopup from "./components/Refereal-form";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="text-center bg-blue-100 h-10">
        <div className="font-medium text-base text-black pt-1 leading-7">
          Navigate your ideal career path with tailored expert advice{" "}
          <span className="text-lg font-medium text-blue-500 pl-2">
            Contact Expert
          </span>
        </div>
      </div>

      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto mt-0 p-0 pt-0">
          <div className="flex items-center space-x-6 p-4 pt-0">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo.png" className="h-10 w-30" alt="Logo" />
            </a>

            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center font-medium text-sm w-auto py-2 px-3 text-white bg-blue-500 rounded-lg "
            >
              Courses{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>

          <div id="navbar-multi-level">
            <ul className="flex font-medium p-4 pt-0 mt-4 gap-2 bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 font-medium text-sm text-black"
                  aria-current="page"
                >
                  Refer & Earn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 font-medium text-sm text-black"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 font-medium text-sm text-black"
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 rounded-lg text-sm font-medium bg-gray-200 text-black"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Try for free
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex items-center mt-5 justify-center">
        <div className="bg-blue-100 rounded-full p-5 pt-4  text-center items-center justify-center w-[365px] h-16">
          <ul className="flex text-center font-normal text-xl text-gray-500 hover:text-blue-500 gap-7">
            {["Refer", "Benefits", "FAQs", "Support"].map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center mt-5 justify-center mb-5">
        <div className="bg-[#EEF5FF] rounded-3xl h-[500px] w-[1100px] flex shadow-2xl p-0 shadow-slate-500">
          <div className="flex-1 flex-col   ">
            <img src="/left-money.png" className="h-fit" />
            <div className="pl-14">
              <h2 className="text-7xl font-bold ">Let's Learn</h2>
              <h2 className="text-7xl font-bold ">& Earn</h2>
              <p className="text-4xl font-normal text-gray-700 pt-6">
                Get a chance to win <br />
                up-to{" "}
                <span className="text-5xl text-blue-500 font-bold">
                  Rs. 15,000
                </span>
              </p>
              <button
                onClick={handlePopupOpen}
                type="button"
                className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mb-2 "
              >
                Refer Now
              </button>
            </div>
          </div>

          <div className="flex-2 relative">
            <img
              src="/top-behind-phone.png"
              className="absolute w-36 top-4 left-28"
            />
            <img
              src="/Hero.png"
              alt="Description"
              className="h-full w-full object-cover relative p-0 m-0 mt-6 z-10"
            />
            <img src="/right-corner.png" className=" absolute top-2 right-2" />
            <img
              src="/left-bottom.png"
              className=" absolute bottom-2 left-6 z-20"
            />
            <img
              src="/right-bottom.png"
              className=" absolute top-40 right-0 "
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-5 p-0">
        <div className="bg-blue-100 w-[1934px] h-[780px] flex flex-col items-center justify-center relative mt-32 gap-2 p-0">
          <h2 className="text-center font-roboto font-semibold text-2xl text-black pt-1">
            How Do I <span className="text-blue-500 pt-1">Refer ?</span>
          </h2>
          <img src="/how.png" className="w-[1387px] h-[491px] mt-5 relative" />

          <div className="absolute bottom-[360px] left-[285px] flex flex-col gap-1 items-center">
            <img src="/first block.png" alt="First Block" />
            <p className="font-semibold text-base text-center text-black mt-2">
              Submit referrals easily via <br />
              our website’s referral <br />
              section.
            </p>
          </div>

          <div className="absolute bottom-[360px] left-[660px] flex flex-col gap-1 items-center">
            <img src="/second block.png" alt="Second Block" />
            <p className="font-semibold text-base text-center text-black mt-2">
              Earn rewards once your <br />
              referral joins an Accredian <br />
              program.
            </p>
          </div>

          <div className="absolute bottom-[360px] right-[310px] flex flex-col gap-1 items-center">
            <img src="/third block.png" alt="Third Block" />
            <p className="font-semibold text-base text-center text-black mt-2">
              Both parties receive a <br />
              bonus 30 days after <br />
              program enrollment.
            </p>
          </div>

          <button
          onClick={handlePopupOpen}
            type="button"
            className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mb-2 "
          >
            Refer Now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#1A73E8] w-[1300px] h-52 rounded-xl mb-2 relative">
          <img src="bluebox2.png" className=" relative mt-[7px]" />
          <div className="flex absolute bottom-20 space-x-6 pt-4">
            <img src="bluebox1.png" className="pl-24" />
            <div className="flex flex-col ">
              <p className="font-semibold text-3xl text-white">
                Want to delve deeper into the program?
              </p>
              <p className="font-normal text-base text-white">
                Share your details to receive expert insights from our program
                team!
              </p>
            </div>
            <button
              type="button"
              className="text-blue-600 bg-white font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mb-2 flex items-center ml-[900x]"
            >
              Get in touch
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <FormPopup showPopup={showPopup} handleClose={handlePopupClose}  />
    </>
  );
}
