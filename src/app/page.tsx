"use client";
import Navbar from "@/component/Navbar";



import Image from "next/image";
import yourtrustimag2 from "../../public/images/yourtrustmain2.svg";
import yourtrustimag3 from "../../public/images/yourtrustmain3.svg";
import zikzak from "../../public/images/zikzak.svg";
import img1 from "../../public/images/img1.svg";
import micro from "../../public/images/calculator.svg";
import insur from "../../public/images/insur.svg";

import flagthree from "../../public/images/flagthree.svg";
import aadhar from "../../public/images/aadhaar.svg";
import workdownimg from "../../public/images/workdownimg.svg";
import youtube from "../../public/images/youtubeicon.svg";
import rupee from "../../public/images/ruppes.svg";
import map2 from "../../public/images/map1.svg";
import CountUp from "react-countup";

import verf from "../../public/images/verif.svg";
import getway from "../../public/images/getway.svg";
import graph1 from "../../public/images/graph1.svg";
import emi from "../../public/images/emi_collection.svg";
import createac from "../../public/images/creteac.svg";
import payment from "../../public/images/paymeny.svg";

import { useEffect, useState } from "react";
import Footer from "@/component/Footer";
import Slidethree from "@/component/Slidethree";
import AOS from "aos";
import "aos/dist/aos.css";
import Slidemultiple from "@/component/Slidemultiple";

export default function Home() {
  
 
  const [ismenuvisible, setismenuvisible] = useState(false);
 useEffect(() => {
  
   AOS.init();
 }, []);
  return (
    <div className=" ">
      <Navbar
        ismenuvisible={ismenuvisible}
        setismenuvisible={setismenuvisible}
      ></Navbar>
      <div className="bg-[#065363] mainyourimg py-10 ">
        <div className="container mx-auto  px-10">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:gap-0 gap-14 ">
            <div className="text-white lg:w-[50%] ">
              <h1 className=" poppins-regular  uppercase font-extrabold md:text-4xl text-2xl md:w-[400px] leading-normal">
                Your Trusted Payment
              </h1>
              <div className="mt-5 relative ">
                <h1 className="uppercase font-extrabold text-5xl poppins-regular z-20">
                  Solution
                </h1>
                <div className="bg-[#3EA089] absolute  py-10 px-[230px]  z-10 -bottom-4 -left-40 opacity-50 rounded-e-lg"></div>
              </div>
              <p className="mt-10 md:mr-28 poppins-regular">
                Lorem ipsum dolor sit amet consectetur. Velit nulla nam hac cras
                sed senectus malesuada. Ut egestas sodales molestie id est. In
                vel lacus vestibulum nulla in egestas eget. Egestas quis massa.
              </p>
              <div className="container mx-auto flex md:flex-row flex-col gap-5 mt-10">
                <button className="  px-3 py-3 border border-slate-300 text-white hover:bg-[#3EA089] rounded-lg poppins-regular hover:border-teal-500 transition-all duration-500">
                  GET STARTED
                </button>
                <button className=" px-3 py-3 border border-slate-300 hover:bg-[#3EA089] rounded-lg uppercase poppins-regular hover:border-teal-500 transition-all duration-500">
                  More information
                </button>
              </div>
            </div>
            <div className="">
              <div className="">
                <Image
                  src={yourtrustimag2}
                  alt=""
                  className="yourtrustimag2 relative z-10"
                ></Image>
                <Image
                  className="absolute yourtrustimag3 right-0 overflow-x-hidden md:-bottom-12 -bottom-80"
                  src={yourtrustimag3}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto lg:px-0 px-10 mt-12 "
        data-aos="fade-right"
      >
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <p className="text-[#065363] font-bold text-3xl poppins-regular">
              <CountUp
                delay={2}
                duration={5}
                enableScrollSpy={true}
                end={150000}
              />
              +
            </p>
            <p className="text-sm poppins-regular"> Transactions Processed</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#065363] font-bold text-3xl poppins-regular ">
              <CountUp
                delay={2}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={1000}
                end={99.9}
              />{" "}
              %
            </p>
            <p className="text-sm poppins-regular"> Transaction Success Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#065363] font-bold text-3xl poppins-regular">
              $
              <CountUp
                delay={2}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={1000}
                end={500}
              />
              M+
            </p>
            <p className="text-sm poppins-regular">
              {" "}
              Total Value of Transactions
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#065363] font-bold text-3xl poppins-regular">
              <CountUp
                delay={2}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={1000}
                end={1000}
              />
              +
            </p>
            <p className="text-sm poppins-regular"> Satisfied Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#065363] font-bold text-3xl poppins-regular">
              <CountUp
                delay={2}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={1000}
                end={98}
              />
              %
            </p>
            <p className="text-sm poppins-regular">
              {" "}
              Customer Satisfaction Rate
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#EDF8F5]  rounded-lg text-[#3EA089] px-4 py-2 saira hover:-translate-y-1 transform transition-all duration-500 hover:shadow-md">
            Our Services
          </button>
        </div>
        <div className="flex justify-center items-center  uppercase font-medium md:text-4xl text-3xl mt-5 lg:px-[350px]">
          <h1 className="md:text-center saira">
            Feel the best <span className="text-[#3EA089]"> experience </span>{" "}
            with our features
          </h1>
        </div>
        <div className="mt-10 flex justify-center">
          <Image src={zikzak} alt="" width={200} height={200}></Image>
        </div>
      </div>
      <div className="container mx-auto lg:px-10 px-10 md:mt-12 mt-5">
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center">
          <div className="md:w-[400px]" data-aos="fade-right">
            <p className="poppins-regular">
              TAPI Cashless offers multiple financial and payment services to
              ease online transaction process
            </p>
          </div>
          <div data-aos="fade-left">
            <button className="bg-[#3EA089] animate-bounce animate-infinite animate-duration-[4000ms] animate-delay-[4000ms] text-white rounded-lg px-3 py-2 uppercase poppins-regular hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.2)] transition-all duration-500">
              View more
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 mt-12" data-aos-duration="0">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] rounded-lg px-10 py-5"
          >
            <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
              <Image className="" src={img1} alt=""></Image>
            </div>
            <div className="mt-10">
              <p className="font-bold text-xl poppins-regular">AEPS</p>
              <p className="mt-2 poppins-regular ">
                Help customers withdraw DBT, government relief funds and cash
                from their bank accounts using fingerprint with Aadhaar enabled
                Payment Services (AePS).
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] rounded-lg px-10 py-5"
          >
            <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
              <Image className="" src={micro} alt=""></Image>
            </div>
            <div className="mt-10">
              <p className="font-bold text-xl poppins-regular">Micro ATM</p>
              <p className="mt-2 poppins-regular ">
                A local Kirana Store can become an ATM centers that can provide
                basic ATM Services, accept payments from customers with Debit
                Cards.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] rounded-lg px-10 py-5"
          >
            <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
              <Image className="" src={insur} alt=""></Image>
            </div>
            <div className="mt-10">
              <p className="font-bold text-xl poppins-regular">Insurance</p>
              <p className="mt-2 poppins-regular ">
                Safeguard your customers from the uncertainties of life. Protect
                them with affordable insurance plans across health, medical and
                general insurance.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] rounded-lg px-10 py-5"
          >
            <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
              <Image className="" src={aadhar} alt=""></Image>
            </div>
            <div className="mt-10">
              <p className="font-bold text-xl poppins-regular">Aadhaar Pay</p>
              <p className="mt-2 poppins-regular ">
                Accept payments from customers using Aadhaar biometric.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] rounded-lg px-10 py-5"
          >
            <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
              <Image className="" src={emi} alt=""></Image>
            </div>
            <div className="mt-10">
              <p className="font-bold text-xl poppins-regular">
                EMI Collection
              </p>
              <p className="mt-2 poppins-regular ">
                Customer can pay loan amount for all major NBFCs.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="bg-[#EDF8F5] rounded-lg px-10 py-5"
          >
            <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
              <Image className="" src={payment} alt=""></Image>
            </div>
            <div className="mt-10">
              <p className="font-bold text-xl poppins-regular">
                Payment gateway
              </p>
              <p className="mt-2 poppins-regular ">
                Payment gateway is an interface to do online transactions. By
                payment gateway, the customer can avail credit card, debit card
                or net banking services at the ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 mt-12 " data-aos="fade-up">
        <div className="bg-[#EDF8F5] flex lg:flex-row flex-col justify-center lg:gap-2 gap-5 px-10 py-5 rounded-lg">
          <div>
            <div className="bg-[#91D4C4] rounded-full p-3 w-24 flex justify-center items-center">
              <Image
                className="animate-rotate-y animate-infinite"
                src={rupee}
                alt=""
              ></Image>
            </div>
            <div className="mt-10">
              <h1 className=" saira uppercase md:w-[340px] font-medium md:text-4xl text-3xl">
                Work with us from anywhere in{" "}
                <span className="text-[#3EA089]"> India </span>
              </h1>
              <Image
                className="mt-4"
                src={zikzak}
                alt=""
                width={200}
                height={200}
              ></Image>
              <p className="poppins-regular mt-4">
                TAPI Cashless is committed to appreciating and respecting the
                choice and privacy of its user base and the business associates
                when they use our website and services. The statement here
                highlights and gives information about the privacy practices
                employed and used by us in relation to the personal information
                we hold of our business associates and users.
              </p>
            </div>
          </div>
          <div>
            <Image src={map2} alt="" height={3000} width={3000}></Image>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 " data-aos="fade-up">
        <div className=" px-10 py-5 rounded-lg ">
          <div className="grid lg:grid-cols-2 lg:gap-0 gap-5 grid-cols-1 items-end ">
            <div className=" w-full   ">
              <Image src={flagthree} className="md:ml-10" alt=""></Image>

              <button className="text-white ml-10 bg-[#3EA089] animate-bounce animate-infinite rounded-lg px-4 py-2 text-nowrap mt-10 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.2)] transition-all duration-500">
                VIEW MORE
              </button>
              <div className="bg-[#EDF8F5] h-[300px] -mt-64   py-5 rounded-l-xl"></div>
            </div>

            <div className=" w-full ">
              <div className="lg:px-24 ">
                <button className="text-[#3EA089] animate-fade animate-infinite animate-duration-[1000ms] animate-delay-1000  mb-5 saira bg-[#EDF8F5] rounded-lg px-4 py-2 text-nowrap hover:-translate-y-1 transform transition-all duration-500 hover:shadow-md">
                  ABOUT US
                </button>
                <p className="saira uppercase font-medium md:text-4xl text-3xl mb-10">
                  We aim to provide expert advice and quality{" "}
                  <span className="text-[#3EA089]"> service</span>
                </p>
                <Image
                  className=" mb-16"
                  src={zikzak}
                  alt=""
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div className="bg-[#EDF8F5] md:h-[300px]  rounded-r-xl  py-5">
                <ul className="list-disc lg:ml-0 md:ml-10 ml-7 md:mr-10 mr-5">
                  <li className="mt-5 poppins-regular text-sm">
                    TAPI Cashless is a young Fintech Organisation incorporated
                    in May - 2024, by the industry veterans with over 19+ years
                    of expertise in Payment industry with a vision to serve the
                    Unbanked and under banked community based on Financial
                    Inclusion programmed and Model run by Reserve Bank Of
                    India(RBI).
                  </li>
                  <li className="mt-5 poppins-regular text-sm">
                    {" "}
                    The company aims on providing online platform (Web and
                    Mobile Application) which can help retailers to provide end
                    to end financial services products to the masses through its
                    well massive Cloud infrastructure.
                  </li>
                  <li className="mt-5 poppins-regular text-sm">
                    TAPI Cashless is highly equipped and has full control over
                    our product development roadmap. This also makes us nimble
                    and able to rapidly roll out new features.
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="absolute  w-[1250px]  bottom-0  z-10 rounded-xl"></div> */}
          </div>
        </div>
      </div>

      <div data-aos="fade-right">
        <div data-aos="" className="container mx-auto  mt-10">
          <h1 className="saira text-center uppercase font-medium md:text-4xl text-3xl  lg:px-96">
            <span className="text-[#3EA089]"> 100+ </span> More then trusted
            partners
          </h1>
          <div className="mt-5 flex justify-center">
            <Image src={zikzak} alt="" width={200} height={200}></Image>
          </div>
        </div>
        <div className="container mx-auto px-5  mt-5 pb-14">
          <Slidemultiple></Slidemultiple>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="bg-[#032930] w-full py-10 relative lg:h-[550px]"
      >
        <div className="container mx-auto ">
          <div className="lg:px-72 px-5">
            <h1 className="saira md:text-center uppercase font-medium md:text-4xl text-3xl  text-white">
              Stay ahead in your business with our user-friendly
              <span className="text-[#3EA089]"> dashboard. </span>
            </h1>
          </div>
          <div className="mt-5 flex  justify-center">
            <Image src={zikzak} alt="" width={200} height={200}></Image>
          </div>
          <div className="flex md:flex-row flex-col gap-3 justify-center items-center mt-10">
            <button className="bg-[#3EA089] animate-bounce animate-infinite poppins-regular py-3 w-[200px] text-white rounded-lg transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Get Register now
            </button>
            <button className=" py-3 w-[200px] animate-bounce animate-infinite poppins-regular text-white border-gray-200 border-2 rounded-lg transition duration-200 hover:bg-white hover:text-black  hover:border-teal-500">
              Contact us
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="absolute top-56  ">
            <Image src={graph1} alt=""></Image>
          </div>
        </div>
      </div>

      <div className="lg:mt-[400px] md:mt-[500px] mt-[100px] container mx-auto px-5">
        <div data-aos="zoom-in" className="">
          <div className="flex items-center justify-center">
            <button className="text-[#3EA089] uppercase animate-fade animate-infinite animate-duration-[1000ms] animate-delay-1000  saira bg-[#EDF8F5] rounded-lg px-4 py-2 text-nowrap">
              work process
            </button>
          </div>
          <h1 className="saira text-center uppercase font-medium md:text-4xl text-3xl  lg:px-96 mt-2">
            How its
            <span className="text-[#3EA089]"> work</span>
          </h1>
          <div className="mt-2 flex justify-center">
            <Image src={zikzak} alt="" width={200} height={200}></Image>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-20 gap-5 mt-5">
          <div data-aos="flip-left" className="">
            <div className="flex justify-center items-center">
              <div className="bg-[#065363] rounded-full p-5 w-20 flex justify-center items-center">
                <Image
                  className="animate-rotate-y animate-infinite"
                  src={createac}
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-[#032930]   text-xl text-center poppins-regular font-bold">
                Step 01: <br /> Create Account
              </p>
              <p className="text-justify poppins-regular mt-2">
                Lorem ipsum dolor sit amet consectetur. Id felis et ligula
                aliquet tellus tortor lectus. Risus non ultrices cras dolor
                ullamcorper cum porttitor egestas semper. Neque donec euismod
                elit massa nisl scelerisque eu congue sem. Porttitor at
                pharetra.
              </p>
            </div>
          </div>
          <div data-aos="flip-left" className="">
            <div className="flex justify-center items-center">
              <div className="bg-[#065363] rounded-full p-5 w-20 flex justify-center items-center">
                <Image
                  className="animate-rotate-y animate-infinite"
                  src={verf}
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-[#032930]  text-xl text-center font-bold poppins-regular">
                Step 02: <br /> Detail Verification
              </p>
              <p className="text-justify poppins-regular mt-2 ">
                Lorem ipsum dolor sit amet consectetur. Id felis et ligula
                aliquet tellus tortor lectus. Risus non ultrices cras dolor
                ullamcorper cum porttitor egestas semper. Neque donec euismod
                elit massa nisl scelerisque eu congue sem. Porttitor at
                pharetra.
              </p>
            </div>
          </div>
          <div data-aos="flip-left" className="">
            <div className="flex justify-center items-center">
              <div className="bg-[#065363] rounded-full p-5 w-20 flex justify-center items-center">
                <Image
                  className="animate-rotate-y animate-infinite"
                  src={getway}
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-[#032930] text-xl  text-center font-bold poppins-regular">
                Step 03:
                <br /> Get Payment Gateways
              </p>
              <p className="text-justify poppins-regular mt-2 ">
                Lorem ipsum dolor sit amet consectetur. Id felis et ligula
                aliquet tellus tortor lectus. Risus non ultrices cras dolor
                ullamcorper cum porttitor egestas semper. Neque donec euismod
                elit massa nisl scelerisque eu congue sem. Porttitor at
                pharetra.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="container mx-auto px-5 mt-10">
        <div className="relative flex justify-center items-center">
          <Image src={workdownimg} alt=""></Image>
          <div className="absolute ">
            <Image className="animate-pulse " src={youtube} alt=""></Image>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="container mx-auto px-10 mt-10">
        <div className="flex items-center justify-center">
          <button className="text-[#3EA089] animate-fade animate-infinite animate-duration-[1000ms] animate-delay-1000  uppercase saira bg-[#EDF8F5] rounded-lg px-4 py-2 text-nowrap hover:-translate-y-1 transform transition-all duration-500 hover:shadow-md">
            Testimonials
          </button>
        </div>{" "}
        <h1 className="saira text-center uppercase font-medium md:text-4xl text-3xl  lg:px-96 mt-2">
          Love from
          <span className="text-[#3EA089]"> clients</span>
        </h1>
        <div className="mt-5 flex justify-center">
          <Image src={zikzak} alt="" width={200} height={200}></Image>
        </div>
        <Slidethree></Slidethree>
      </div>
      <Footer></Footer>
    </div>
  );
}
