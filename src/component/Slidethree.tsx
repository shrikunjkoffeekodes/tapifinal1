'use client'
import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsThreeDots } from "react-icons/bs";


import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

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

function MultipleItems() {
    const owlCarouselOptions = {
      loop: true,
      margin: 10,
      responsiveClass: true,
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
          items: 3,
          nav: true,
          loop: true,
        },
      },
    };

   useEffect(() => {
    
     AOS.init();
   }, []);

  return (
    <OwlCarousel
      className="owl-theme mt-10 mb-10"
      {...owlCarouselOptions}
      loop
      margin={10}
      nav
    >
      <div data-aos="fade-flip" className="item ">
        <div className="bg-[#EDF8F5] px-10 py-5 rounded-lg ">
          <p className="text-xl font-bold poppins-regular">Services is good</p>
          <p className="mt-2 poppins-regular">
            Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet
            tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum
            porttitor egestas semper. Neque donec euismod elit massa nisl
            scelerisque eu congue sem. Porttitor at pharetra.
          </p>

          <BsThreeDots style={{ fontSize: "64px" }} />

          <p className="font-bold text-xl  uppercase poppins-regular">
            Mathieu Diab
          </p>
          <p className="text-sm poppins-regular"> Globalshyp, Founder</p>
        </div>
      </div>
      <div data-aos="fade-flip" className="item">
        <div className="bg-[#EDF8F5] px-10 py-5 rounded-lg">
          <p className="text-xl font-bold poppins-regular">Services is good</p>
          <p className="mt-2 poppins-regular">
            Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet
            tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum
            porttitor egestas semper. Neque donec euismod elit massa nisl
            scelerisque eu congue sem. Porttitor at pharetra.
          </p>
          <BsThreeDots style={{ fontSize: "64px" }} />

          <p className="font-bold text-xl  uppercase poppins-regular">
            Mathieu Diab
          </p>
          <p className="text-sm poppins-regular"> Globalshyp, Founder</p>
        </div>
      </div>
      <div data-aos="fade-flip" className="item">
        <div className="bg-[#EDF8F5] px-10 py-5 rounded-lg">
          <p className="text-xl font-bold poppins-regular">Services is good</p>
          <p className="mt-2 poppins-regular">
            Lorem ipsum dolor sit amet consectetur. Id felis et ligula aliquet
            tellus tortor lectus. Risus non ultrices cras dolor ullamcorper cum
            porttitor egestas semper. Neque donec euismod elit massa nisl
            scelerisque eu congue sem. Porttitor at pharetra.
          </p>
          <BsThreeDots style={{ fontSize: "64px" }} />

          <p className="font-bold text-xl  uppercase poppins-regular">
            Mathieu Diab
          </p>
          <p className="text-sm poppins-regular"> Globalshyp, Founder</p>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default MultipleItems;
