"use client";
import React, { useState } from "react";
import Card from "./Card";
import ServiceMarquee from "./ServiceMarquee";
import Checkout from "./Checkout";

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const services = [
    {
      title: "AI Solutions",
      description: "Work smarter, faster, & with less effort",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/Graphic-Designing.png",
      price: 300,
    },
    {
      title: "Social Media Marketing",
      description: "Reach more people & grow your audience",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/social-media-marketing.png",
      price: 250,
    },
    {
      title: "Web Development",
      description: "Websites that impress & convert visitors fast",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/development.png",
      price: 600,
    },
    {
      title: "Graphic Design",
      description: "Where professionalism meets creativity",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/content.png",
      price: 200,
    },
    {
      title: "Animation (2D & 3D)",
      description: "Engaging visuals that bring ideas to life",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/film-editing.png",
      price: 400,
    },
    {
      title: "Branding",
      description: "Build a brand that's unforgettable",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/software-development.png",
      price: 350,
    },
    {
      title: "Business Analytics",
      description: "Know your numbers, grow your results",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/businessman.png",
      price: 450,
    },
    {
      title: "Accounting (Book Keeping)",
      description: "Stress-free financial accuracy & compliance",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/book-keeping.png",
      price: 300,
    },
    {
      title: "LLC Formation",
      description: "Fast, hassle-free setup for your business",
      icon: "https://nextgenbusiness.co/wp-content/uploads/2025/07/branding.png",
      price: 500,
    },
  ];

  const marquees = [
    "Trusted by 400+ growing businesses",
    "Serving clients in 12+ industries",
    "One request at a time (per service)",
    "Average 48-hour turnaround",
    "Pause or cancel anytime",
  ];

  return (
    <div className="flex flex-col" id="services">
      <h1 className="text-center w-full font-heading text-[45px] font-[600] py-4">
        Our Services
      </h1>
      {/* Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 justify-center w-[101.5%] ">
        {services.map((service, index) => (
          <Card key={index} service={service} setIsOpen={setIsOpen} />
        ))}
      </div>
      {/* Marquee */}
      <ServiceMarquee
        speed={80}
        pauseOnHover
        gradient={false}
        className="flex justify-between py-2"
      >
        {marquees.map((marquee, index) => (
          <span
            key={index}
            className="flex items-center mx-6 text-lg font-medium"
          >
            {marquee}
            {/* green blinking dot */}
            <span className="ml-10 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </span>
        ))}
      </ServiceMarquee>
      {/* TagLine */}
      <h1 className=" text-[8px] lg:text-[25px] w-full text-center font-heading font-normal py-2">
        GET
        <strong className="mx-2 font-black">3 FULL-TIME EMPLOYEES</strong>
        FOR SAME COST AS 1 PART-TIME EMPLOYEE
      </h1>
      <Checkout isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Services;
