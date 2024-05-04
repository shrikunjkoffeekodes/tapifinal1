"use client";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import zikzak from "../../images/zikzak.svg";
import React, { useEffect } from "react";
import aboimg1 from "../../images/aboutimg1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useState } from "react";

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
      <div className="py-10 px-5   mt-10 container mx-auto">
        <div data-aos="fade-right" className="">
          <h1 className="font-extrabold lg:text-8xl md:text-5xl text-3xl lg:text-left text-center    poppins-regular uppercase">
            About us
          </h1>
          <div className="flex lg:justify-start justify-center">
            <Image className="mt-3" width={320} src={zikzak} alt=""></Image>
          </div>
          <div className="bg-[#3EA089] rounded-[20px] lg:px-10 px-5 py-5 lg:mt-48 md:mt-[440px] mt-[250px]  relative">
            <p className="text-white font-bold lg:text-[35px] md:text-[25px] leading-snug poppins-regular uppercase">
              We aim to provide expert <br /> advice and quality service
            </p>

            <Image
              src={aboimg1}
              alt=""
              className="absolute lg:right-36 md:right-10 right-0 lg:bottom-12 bottom-32"
            ></Image>
          </div>
        </div>
        <div data-aos="zoom-in" className="mt-10 lg:px-24 px-5">
          <ul className="list-disc">
            <li className="poppins-regular">
              TAPI Cashless is a young Fintech Organization incorporated in May
              - 2024, by the industry veterans with over 19+ years of expertise
              in Payment industry with a vision to serve the Unbanked and under
              banked community based on Financial Inclusion programmed and Model
              run by Reserve Bank Of India(RBI).
            </li>
            <li className="mt-5 poppins-regular">
              The company aims on providing online platform (Web and Mobile
              Application) which can help retailers to provide end to end
              financial services products to the masses through its well massive
              Cloud infrastructure.
            </li>
            <li className="mt-5 poppins-regular">
              TAPI Cashless is highly equipped and has full control over our
              product development roadmap. This also makes us nimble and able to
              rapidly roll out new features.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <div className="flex lg:flex-row flex-col gap-3">
            <div
              data-aos="flip-right"
              className="bg-[#EDF8F5] rounded-[20px] px-5 py-5 w-full"
            >
              <h1 className="text-[#3EA089] font-bold lg:text-[64px] md:text-[40px] uppercase saira">
                Our Focus
              </h1>
              <Image className="" src={zikzak} alt=""></Image>
              <ul className="list-disc mt-5">
                <li className="ml-5">
                  Our focus is to provide Banking services at all the Locations
                  across India where the Bank Branches are not present.
                </li>
                <li className="ml-5 mt-5">
                  TAPI Cashless is on a mission to create up to 1000+ employment
                  opportunities to the un-served & under-served community in
                  India, across the Urban and Rural Locations.
                </li>
              </ul>
            </div>
            <div
              data-aos="flip-left"
              className="bg-[#EDF8F5] rounded-[20px] px-5 py-5 w-full"
            >
              <h1 className="text-[#3EA089] font-bold lg:text-[64px] md:text-[40px] uppercase saira">
                Our Mission
              </h1>
              <Image className="" src={zikzak} alt=""></Image>
              <ul className="list-disc mt-5">
                <li className="ml-5">
                  TAPI Cashless is building the largest network of its business
                  associates and these associates are equipped with technology
                  and connectivity to provide retail financial services via a
                  one stop payment solution platform for its end customers.
                </li>
              </ul>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="bg-[#EDF8F5] rounded-[20px] px-5 py-5 w-full mt-3"
          >
            <h1 className="text-[#3EA089] font-bold lg:text-[64px] md:text-[40px] uppercase saira">
              Our Vision
            </h1>
            <Image className="" src={zikzak} alt=""></Image>
            <ul className="list-disc mt-5 poppins-regular ">
              <li className="ml-5">
                TAPI Cashless brings banking and financial services to millions
                of Indian consumers who are under banked and unbanked, to
                provide banking services at doorstepons across India where the
                Bank Branches are not present.
              </li>
              <li className="ml-5 mt-5 poppins-regular ">
                Our company vision is to provide various Essential services like
                Banking, Remittance, eDC Machine, Bill Payments, Online
                shopping, Loans including all the services with comes under
                Financial Inclusion to the under banked/Unbanked community
                across India.
              </li>
              <li className="ml-5 mt-5 poppins-regular ">
                Our key objective is to engage with locals and convert them into
                Entrepreneur (VLE- Village Level Entrepreneur) and thus provide
                them with basic dignified, self-sustainable earning model at
                Economical cost.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p
            data-aos="zoom-in"
            className="saira uppercase font-bold lg:text-4xl md:text-3xl text-2xl text-center"
          >
            Frequently Asked{" "}
            <span className="text-[#3EA089]"> Questions (FAQ) </span>
          </p>
          <div className="mt-10 lg:px-24 ">
            <div className=" w-full">
              <div
                data-aos="zoom-in-down"
                className="collapse  collapse-arrow shadow-lg join-item border border-base-300"
              >
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className=" poppins-regular font-bold text-[16px] collapse-title ">
                  What is a payment gateway?
                </div>
                <div className="collapse-content">
                  <p className="poppins-regular text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Dui libero non
                    bibendum malesuada. Amet eget pellentesque non montes donec
                    suspendisse ultricies. Mi metus integer sit sit. Et fames
                    pellentesque nam lobortis aliquam pharetra. Malesuada
                    commodo nunc nunc nisi metus non ultricies cursus turpis. A
                    elementum elementum sed tellus morbi rhoncus justo orci.
                    Ornare augue diam nulla eget enim. Massa egestas facilisi
                    congue sapien adipiscing viverra convallis amet. Ornare.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-down"
                className="collapse mt-5 collapse-arrow shadow-lg join-item border border-base-300"
              >
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="poppins-regular font-bold text-[16px] collapse-title ">
                  How does payment gateway work?
                </div>
                <div className="collapse-content">
                  <p className="poppins-regular text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Dui libero non
                    bibendum malesuada. Amet eget pellentesque non montes donec
                    suspendisse ultricies. Mi metus integer sit sit. Et fames
                    pellentesque nam lobortis aliquam pharetra. Malesuada
                    commodo nunc nunc nisi metus non ultricies cursus turpis. A
                    elementum elementum sed tellus morbi rhoncus justo orci.
                    Ornare augue diam nulla eget enim. Massa egestas facilisi
                    congue sapien adipiscing viverra convallis amet. Ornare.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-down"
                className="collapse mt-5 collapse-arrow shadow-lg join-item border border-base-300"
              >
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="poppins-regular font-bold text-[16px] collapse-title">
                  Why should you choose payment suite?
                </div>
                <div className="collapse-content">
                  <p className="poppins-regular text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Dui libero non
                    bibendum malesuada. Amet eget pellentesque non montes donec
                    suspendisse ultricies. Mi metus integer sit sit. Et fames
                    pellentesque nam lobortis aliquam pharetra. Malesuada
                    commodo nunc nunc nisi metus non ultricies cursus turpis. A
                    elementum elementum sed tellus morbi rhoncus justo orci.
                    Ornare augue diam nulla eget enim. Massa egestas facilisi
                    congue sapien adipiscing viverra convallis amet. Ornare.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-down"
                className="collapse mt-5 collapse-arrow shadow-lg join-item border border-base-300"
              >
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="poppins-regular font-bold text-[16px] collapse-title">
                  What is a TCPL Partners rights?
                </div>
                <div className="collapse-content">
                  <p className="poppins-regular text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. Dui libero non
                    bibendum malesuada. Amet eget pellentesque non montes donec
                    suspendisse ultricies. Mi metus integer sit sit. Et fames
                    pellentesque nam lobortis aliquam pharetra. Malesuada
                    commodo nunc nunc nisi metus non ultricies cursus turpis. A
                    elementum elementum sed tellus morbi rhoncus justo orci.
                    Ornare augue diam nulla eget enim. Massa egestas facilisi
                    congue sapien adipiscing viverra convallis amet. Ornare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Page;
