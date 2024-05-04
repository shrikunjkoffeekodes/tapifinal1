"use client";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import zikzak from "../../../public/images/zikzak.svg";
import location from "../../../public/images/location.svg";
import emailabt from "../../../public/images/emailabout.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import callus from "../../../public/images/callimg.svg";
import contper from "../../../public/images/contactperson.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Page() {
   useEffect(() => {
   
     AOS.init();
   }, []);
  const [ismenuvisible, setismenuvisible] = useState(false);
  return (
    <div>
      <Navbar
        ismenuvisible={ismenuvisible}
        setismenuvisible={setismenuvisible}
      ></Navbar>

      <div className="py-10 lg:px-5  mt-10 container mx-auto">
        <h1
          data-aos="fade-right"
          className="font-extrabold lg:text-8xl md:text-5xl text-3xl lg:text-left text-center    poppins-regular uppercase"
        >
          Contact Us
        </h1>
        <div
          data-aos="fade-right"
          className="flex lg:justify-start justify-center"
        >
          <Image className="mt-3" width={320} src={zikzak} alt=""></Image>
        </div>
        <div
          data-aos="fade-right"
          className="flex lg:flex-row flex-col lg:gap-24 gap-10 lg:px-10 px-5  mt-12"
        >
          <div>
            <h1 className="uppercase saira md:text-4xl text-2xl lg:text-left text-center font-medium">
              How can we <span className="text-[#3EA089]"> help you? </span>
            </h1>
            <div className="mt-5 ">
              <form action="">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full   py-2 px-2 poppins-regular outline-none border-[1px] border-[#3EA089] rounded-lg bg-[#EDF8F5]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your email id"
                    className="w-full mt-3  py-2 px-2 poppins-regular outline-none border-[1px] border-[#3EA089] rounded-lg bg-[#EDF8F5]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Mobile Number"
                    className="w-full mt-3  py-2 px-2 poppins-regular outline-none border-[1px] border-[#3EA089] rounded-lg bg-[#EDF8F5]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Subject title"
                    className="w-full mt-3  py-2 px-2 poppins-regular outline-none border-[1px] border-[#3EA089] rounded-lg bg-[#EDF8F5]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Enter your Message here"
                    className="w-full h-32 mt-3 resize-none text-start py-2 px-2 poppins-regular outline-none border-[1px] border-[#3EA089] rounded-lg bg-[#EDF8F5]"
                  />{" "}
                </div>
                <div
                  data-aos="zoom-in"
                  className="mt-3 flex lg:flex-row flex-col gap-2"
                >
                  <button className="text-white poppins-regular text-center uppercase rounded-lg bg-[#3EA089] py-2 px-4">
                    clear
                  </button>
                  <button className="text-white poppins-regular text-center uppercase rounded-lg bg-[#3EA089] py-2 lg:px-36">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="w-full flex justify-center items-center"
          >
            <Image className="h-[500px]" src={contper} alt=""></Image>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   lg:gap-3 gap-12  lg:mt-20 mt-14 px-10">
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] w-full py-5 h-40  flex flex-col  items-center rounded-lg"
          >
            <div className="bg-[#3EA089] w-24 flex -mt-14 justify-center items-center border-8 border-white rounded-full px-6 py-5">
              <Image src={location} alt=""></Image>
            </div>
            <p className="poppins-regular text-center mt-4 ">
              G/87, HAPPY GOLDMINES <br /> SHOPPERS, B/S BELADIMORA, VESU,{" "}
              <br />
              SURAT - 305007
            </p>
          </div>
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] w-full py-5 h-40   flex flex-col  items-center rounded-lg"
          >
            <div className="bg-[#3EA089] w-24 h-24 flex -mt-14 justify-center items-center border-8 border-white rounded-full px-6 py-5">
              {" "}
              <Image src={emailabt} alt=""></Image>
            </div>
            <p className="poppins-regular text-center mt-4 ">
              Email Us: <br /> support@tapipe.com
            </p>
          </div>
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] w-full py-5 h-40   flex flex-col  items-center rounded-lg"
          >
            <div className="bg-[#3EA089] w-24 h-24 flex -mt-14 justify-center items-center border-8 border-white rounded-full px-6 py-5">
              {" "}
              <Image src={callus} alt=""></Image>
            </div>
            <p className="poppins-regular text-center mt-4">
              Call Us: <br /> (+91) 721 116 7666
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Page;
