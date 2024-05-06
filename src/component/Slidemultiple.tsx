"use client";
import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import icicimg from "../images/iciciimg.svg";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

declare global {
  interface JQuery {
    owlCarousel(options?: any | "destroy"): JQuery;
  }
}

declare global {
  interface JQuery {
    owlCarousel(options?: any | "destroy"): JQuery;
  }
}

function Slidemultiple() {
    useEffect(() => {
    
      AOS.init();
    }, []);
  const owlCarouselOptions = {
    loop: true,
    margin: 10,
    items: 4,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
        loop: true,
      },
    },
  };
  return (
    <div>
      <OwlCarousel
        className="owl-theme mt-10 "
        {...owlCarouselOptions}
        loop
        margin={10}
        nav
        data-aos="fade-up-left"
      >
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
        <div className="bg-[#EDF8F5] py-10 px-5 flex justify-center items-center rounded-lg">
          <Image src={icicimg} alt=""></Image>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Slidemultiple;
