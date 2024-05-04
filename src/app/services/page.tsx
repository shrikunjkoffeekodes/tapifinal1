"use client";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import zikzak from "../../../public/images/zikzak.svg";
import oursermain from "../../../public/images/ourserviceimg.svg";
import phonerupee from "../../../public/images/phoneruppee.svg";
import letter from "../../../public/images/letterimg.svg";
import cardimg from "../../../public/images/cardimg.svg";
import cashper from "../../../public/images/cashbag.svg";
import righttik from "../../../public/images/righttik.svg";
import serbig2 from "../../../public/images/servicebig2.svg";
import lic from "../../../public/images/licperson.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

function Page() {
  const [ismenuvisible, setismenuvisible] = useState(false);
   useEffect(() => {
     
     AOS.init();
   }, []);
  return (
    <div>
      <Navbar
        ismenuvisible={ismenuvisible}
        setismenuvisible={setismenuvisible}
      ></Navbar>
      <div className="py-10 lg:px-5    mt-10 container mx-auto">
        <div data-aos="fade-right">
          <h1 className="font-extrabold lg:text-8xl md:text-5xl text-3xl lg:text-left text-center  poppins-regular uppercase">
            Our services
          </h1>
          <div className="flex lg:justify-start justify-center">
            <Image className="mt-3" width={320} src={zikzak} alt=""></Image>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-10 lg:px-10 px-5  mt-12">
            <div className="w-full">
              <p className="uppercase saira lg:text-[40px] md:text-[30px] ">
                <span className="text-[#3EA089]"> TAPI Cashless </span> offers
                multiple financial and payment services to ease online
                transaction process
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image className="w-full" src={oursermain} alt=""></Image>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-10 lg:px-0 px-5">
          <div
            data-aos="zoom-in-right"
            className="bg-[#EDF8F5] font-bold py-3 uppercase text-center hover:bg-[#3EA089] hover:text-white"
          >
            <p className="poppins-regular">All Services</p>
          </div>
          <div
            data-aos="zoom-in-right"
            className="bg-[#EDF8F5] font-bold py-3 uppercase text-center hover:bg-[#3EA089] hover:text-white"
          >
            <p className="poppins-regular">Banking Services</p>
          </div>
          <div
            data-aos="zoom-in-right"
            className="bg-[#EDF8F5] font-bold py-3 uppercase text-center hover:bg-[#3EA089] hover:text-white"
          >
            <p className="poppins-regular">Utility Bill Payment Centre</p>
          </div>
          <div
            data-aos="zoom-in-right"
            className="bg-[#3EA089] font-bold py-3 uppercase text-white text-center hover:bg-[#3EA089] hover:text-white"
          >
            <p className="poppins-regular">Digital Suite</p>
          </div>
        </div>
        <div className="mt-10 lg:px-8 px-5">
          <p
            data-aos="zoom-in"
            className="text-[#3EA089] font-bold lg:text-[32px] md:text-[25px] text-[20px] uppercase lg:text-center tracking-wide"
          >
            Upgrade your business with TAPI Cashless digital solutions:
          </p>
          <p data-aos="fade-right" className="text-[20px] mt-2">
            This service is free for all our partner retailers. TAPI Cashless
            Digital Suite helps you scale your business by adopting the right
            digital tools, from multiple digital payment options to digitized
            customer ledger to manage payments, reconciliation and customer
            credits better
          </p>

          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div
              data-aos="flip-right"
              className="bg-[#EDF8F5] rounded-lg py-5 px-5"
            >
              <div className="bg-[#91D4C4] rounded-full h-[108px] w-[108px] flex justify-center items-center">
                <Image src={phonerupee} alt=""></Image>
              </div>
              <div className="mt-7">
                <p className="font-bold text-[22px] poppins-regular">
                  Mobile and DTH recharge
                </p>
                <p className="poppins-regular mt-2">
                  Recharge of different mobile networks and DTH connection
                  service is provided from our portal, like Airtel, Vodafone,
                  Idea, Tata Sky, Videocon, Airtel DTH, Sun etc.
                </p>
              </div>
            </div>
            <div
              data-aos="flip-right"
              className="bg-[#EDF8F5] rounded-lg py-5 px-5"
            >
              <div className="bg-[#91D4C4] rounded-full h-[108px] w-[108px] flex justify-center items-center">
                <Image src={letter} alt=""></Image>
              </div>
              <div className="mt-7">
                <p className="font-bold text-[22px] poppins-regular">
                  Gas, Electricity & Water Bills
                </p>
                <p className="poppins-regular mt-2">
                  Recharge of different mobile networks and DTH connection
                  service is provided from our portal, like Airtel, Vodafone,
                  Idea, Tata Sky, Videocon, Airtel DTH, Sun etc.
                </p>
              </div>
            </div>
            <div
              data-aos="flip-right"
              className="bg-[#EDF8F5] rounded-lg py-5 px-5"
            >
              <div className="bg-[#91D4C4] rounded-full h-[108px] w-[108px] flex justify-center items-center">
                <Image src={cardimg} alt=""></Image>
              </div>
              <div className="mt-7">
                <p className="font-bold text-[22px] poppins-regular">
                  Credit Card Payments
                </p>
                <p className="poppins-regular mt-2">
                  Help customers make their credit card payments across 25+
                  banks. Credit card payment also follows a monthly cycle, and
                  will ensure recurring income opportunity ...
                </p>
              </div>
            </div>
            <div
              data-aos="flip-right"
              className="bg-[#EDF8F5] rounded-lg py-5 px-5"
            >
              <div className="bg-[hsl(166,44%,70%)] rounded-full h-[108px] w-[108px] flex justify-center items-center">
                <Image src={cashper} alt=""></Image>
              </div>
              <div className="mt-7">
                <p className="font-bold text-[22px] poppins-regular">
                  Cash Collection
                </p>
                <p className="poppins-regular mt-2">
                  Offer cash collection services for more than 40+ partners.
                  Customers and collection agents can deposit EMIs at your
                  store, and you earn on every cash deposit
                </p>
              </div>
            </div>
            <div
              data-aos="flip-right"
              className="bg-[#EDF8F5] rounded-lg py-5 px-5"
            >
              <div className="bg-[#91D4C4] rounded-full h-[108px] w-[108px] flex justify-center items-center">
                <Image src={lic} alt=""></Image>
              </div>
              <div className="mt-7">
                <p className="font-bold text-[22px] poppins-regular">
                  LIC Premium
                </p>
                <p className="poppins-regular mt-2">
                  Help customers pay their LIC premiums monthly, quarterly,
                  half-yearly or annually and ensure a recurring income for
                  yourself
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#B6E2D8] py-10 md:px-10 px-5 rounded-[20px] mt-10 flex lg:flex-row flex-col justify-center items-center gap-10">
            <div data-aos="zoom-in" className="w-full">
              <Image src={serbig2} alt=""></Image>
            </div>
            <div data-aos="fade-left" className="w-full">
              <p className="uppercase saira lg:text-[40px] md:text-[30px] font-medium">
                financial services to streamline{" "}
                <span className="text-[#3EA089]"> online transactions </span>.
              </p>
              <div className="mt-5">
                <div className="flex md:flex-row flex-col gap-5 justify-center md:items-center mt-5">
                  <div className="bg-[#3EA089] flex justify-center items-center rounded-full md:h-[60px] h-[70px] w-[70px]">
                    <Image src={righttik} alt=""></Image>
                  </div>
                  <div>
                    <p className="text-[16px] font-bold poppins-regular">
                      Easy Integration
                    </p>
                    <p className="text-[14px] mt-2 poppins-regular">
                      Quick & Easy integrations are available with the source
                      code/SDK/Sample code{" "}
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-5 justify-center md:items-center mt-5">
                  <div className="bg-[#3EA089] flex justify-center items-center rounded-full md:h-[60px] h-[70px] w-[70px]">
                    <Image src={righttik} alt=""></Image>
                  </div>
                  <div>
                    <p className="text-[16px] font-bold poppins-regular">
                      Easy Integration
                    </p>
                    <p className="text-[14px] mt-2 poppins-regular">
                      Quick & Easy integrations are available with the source
                      code/SDK/Sample code{" "}
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-5 justify-center md:items-center mt-5">
                  <div className="bg-[#3EA089] flex justify-center items-center rounded-full md:h-[60px] h-[70px] w-[70px]">
                    <Image src={righttik} alt=""></Image>
                  </div>
                  <div>
                    <p className="text-[16px] font-bold poppins-regular">
                      Easy Integration
                    </p>
                    <p className="text-[14px] mt-2 poppins-regular">
                      Quick & Easy integrations are available with the source
                      code/SDK/Sample code{" "}
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-5 justify-center md:items-center mt-5">
                  <div className="bg-[#3EA089] flex justify-center items-center rounded-full md:h-[60px] h-[70px] w-[70px]">
                    <Image src={righttik} alt=""></Image>
                  </div>
                  <div>
                    <p className="text-[16px] font-bold poppins-regular">
                      Easy Integration
                    </p>
                    <p className="text-[14px] mt-2 poppins-regular">
                      Quick & Easy integrations are available with the source
                      code/SDK/Sample code{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer></Footer>
    </div>
  );
}

export default Page;
