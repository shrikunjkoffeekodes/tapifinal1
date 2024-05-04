'use client'
import React, { useEffect } from "react";

import messgeicon from "../../public/images/massegeicon.svg";
import zikzak from "../../public/images/zikzak.svg";
import logo1 from "../../public/images/logo1.svg";
import facebook from "../../public/images/facebook.svg";
import insta from "../../public/images/Instagram.svg";
import linken from "../../public/images/linkedin.svg";
import watsap from "../../public/images/WhatsApp.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  useEffect(() => {
    
    AOS.init();
  }, []);
  return (
    <div className="mt-5">
      <div
        
        className="bg-cover py-10 bg-[url('../../public/images/footerbg2.svg')] "
      >
        <div data-aos="fade-right" className="container mx-auto px-10">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between lg:items-end">
            <div>
              <div className="bg-[#91D4C4] animate-rotate-y animate-infinite rounded-full flex w-20 justify-center items-center p-6">
                <Image src={messgeicon} alt=""></Image>
              </div>
              <div>
                <p className="text-white text-3xl font-medium saira uppercase mt-5 lg:pr-[400px]">
                  Keep up with the latest
                </p>
                <Image
                  className="mt-5"
                  src={zikzak}
                  alt=""
                  width={200}
                  height={200}
                ></Image>
                <p className="text-white text-sm mt-5 poppins-regular">
                  Join our newsletter to stay up-to-date on the latest features
                  and releases.
                </p>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-sm poppins-regular">
                Get up yo date
              </p>
              <div className="flex md:flex-row flex-col gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Get Started"
                  className="placeholder:text-white lg:w-[350px]  text-white border-2 border-gray-300 bg-transparent outline-none rounded-lg px-2 py-2"
                />
                <button className="text-white bg-[#3EA089] px-4 py-2 rounded-lg poppins-regular transition-all duration-500 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                  SUBMIT
                </button>
              </div>
              <p className="text-white text-sm mt-2 poppins-regular">
                By subscribing, you agree to our{" "}
                <span className="text-[#3EA089] poppins-regular">
                  {" "}
                  Privacy Policy.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="py-10">
        <div className="container mx-auto px-5 ">
          <div className="grid lg:grid-cols-4  grid-cols-1 lg:justify-items-center ">
            <div>
              <Image src={logo1} alt=""></Image>
              <p className="mt-5 text-sm poppins-regular">
                Lorem ipsum dolor sit amet consectetur. Id felis et ligula
                aliquet tellus tortor lectus. Risus non ultrices cras dolor
                ullamcorper cum porttitor egestas semper. Neque donec euismod
                elit massa nisl scelerisque eu congue sem. Porttitor at
                pharetra.
              </p>
              <p className="mt-5 poppins-regular">
                Copyright © 2024 TCPL , All Rights Reserved.
              </p>
            </div>
            <ul>
              <li className="lg:mt-0 mt-5">
                <Link
                  href=""
                  className="text-[#3EA089] mb-5 text-xl font-medium poppins-regular"
                >
                  Useful links
                </Link>
              </li>
              <li className="mt-10">
                <Link href="" className="hover:text-[#3EA089] poppins-regular">
                  Home
                </Link>
              </li>
              <li className="mt-3">
                <Link href="" className="hover:text-[#3EA089] poppins-regular">
                  About Us
                </Link>
              </li>
              <li className="mt-3">
                <Link href="" className=" hover:text-[#3EA089] poppins-regular">
                  Service
                </Link>
              </li>
              <li className="mt-3">
                <Link href="" className="hover:text-[#3EA089] poppins-regular">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul>
              <li className="lg:mt-0 mt-5">
                <Link
                  href=""
                  className="text-[#3EA089] mb-5 text-xl font-medium poppins-regular"
                >
                  Support
                </Link>
              </li>
              <li className="mt-10">
                <Link href="" className="hover:text-[#3EA089] poppins-regular">
                  FAQs
                </Link>
              </li>
              <li className="mt-3">
                <Link href="" className="hover:text-[#3EA089] poppins-regular">
                  Raise a Ticket
                </Link>
              </li>
              <li className="mt-3">
                <Link href="" className="hover:text-[#3EA089] poppins-regular">
                  {" "}
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-3">
                <Link href="" className="hover:text-[#3EA089] poppins-regular">
                  {" "}
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="lg:mt-0 mt-5">
              <p className="text-[#3EA089] mb-5 text-xl font-medium poppins-regular">
                Contact us
              </p>
              <p className="mt-5 text-sm poppins-regular">
                G/87, HAPPY GOLDMINES SHOPPERS, B/S BELADIMORA, <br /> VESU,
                SURAT - 305007
              </p>
              <p className="mt-5 text-sm poppins-regular">
                Call us : (+91) 721 116 7666 <br /> Email Us :
                support@tapipe.com
              </p>
              <div className="flex gap-3 mt-3">
                <Image src={facebook} alt=""></Image>
                <Image src={insta} alt=""></Image>
                <Image src={linken} alt=""></Image>
                <Image src={watsap} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
