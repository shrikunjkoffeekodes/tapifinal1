"use client";
import Image from "next/image";
import logo1 from "../../public/images/logo1.svg";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({
  ismenuvisible,
  setismenuvisible,
}: {
  ismenuvisible: any;
  setismenuvisible: any;
}) {
  const tooglemenu = () => {
    setismenuvisible(!ismenuvisible);
  };
   useEffect(() => {
     // Initialize AOS
     AOS.init();
   }, []);
  
  return (
    <nav  className={`bg-[#DAF1EB] py-4 px-4 w-full sticky top-0 z-50`}>
      <div className={`flex justify-between items-center  `}>
        <div>
          <Image
            className=""
            src={logo1}
            height={150}
            width={150}
            alt="logo1"
          ></Image>
        </div>
        <div className="lg:block hidden">
          <ul className="flex items-center gap-7">
            <Link href="/">
              <li className="hover:text-[#3EA089] poppins-regular ">HOME</li>
            </Link>
            <Link href="about">
              <li className="hover:text-[#3EA089] poppins-regular">ABOUT US</li>
            </Link>
            <Link href="services">
              <li className="hover:text-[#3EA089] poppins-regular ">
                SERVICES
              </li>
            </Link>
            <Link href="contact">
              <li className="hover:text-[#3EA089] poppins-regular ">
                CONTACT US
              </li>
            </Link>
            <li>
              <button className="bg-[#3EA089] rounded-md px-3 py-2 text-white poppins-regular hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.2)] transition-all duration-500 ">
                GET STARTED
              </button>
            </li>
          </ul>
        </div>
        <div
          className={` lg:hidden block fixed flex justify-between items-start px-3  py-5 h-screen bg-[#DAF1EB] w-[50%] left-0 z-50 top-0  ${
            ismenuvisible ? "block" : "hidden"
          }`}
        >
          <ul className=" flex flex-col gap-7">
            <Link href="/">
              <li className="hover:text-[#3EA089] poppins-regular ">HOME</li>
            </Link>
            <Link href="about">
              <li className="hover:text-[#3EA089] poppins-regular ">
                ABOUT US
              </li>
            </Link>
            <Link href="services">
              <li className="hover:text-[#3EA089] poppins-regular ">
                SERVICES
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-[#3EA089] poppins-regular ">
                CONTACT US
              </li>
            </Link>
            <li>
              <button className="bg-[#3EA089] rounded-md px-3 py-2 text-white poppins-regular ">
                GET STARTED
              </button>
            </li>
          </ul>
          <div className="">
            <button onClick={tooglemenu}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <FaBars className="h-10 lg:hidden block" onClick={tooglemenu} />
      </div>
    </nav>
  );
}

export default Navbar;
