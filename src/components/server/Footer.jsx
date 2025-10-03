import React from "react";
import MeetingCalender from "../client/MeetingCalender";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        {/* Upper Heading */}
        <div>
          <Image
            src="/full-logo.png"
            width={150}
            height={50}
            className="my-5"
            alt="footer-logo"
          />
          <h1 className="font-heading text-[35px] lg:text-[55px] italic leading-14">
            See if NEXTGEN is the right fit for you (it totally is)
          </h1>
          <p className="text-[18px] font-text my-13 ">
            Schedule a quick, 15 minute guided tour through NEXTGEN.
          </p>
        </div>

        {/* Down Heading */}
        <div className="mb-4">
          {/* Icons */}
          <div className="flex gap-x-2 my-5">
            <Facebook />
            <Instagram />
            <Linkedin />
          </div>
          {/* Address & Text  */}
          <div className="flex gap-x-2 items-end">
            <p>Offices in Miami, Tokyo, London, Dubai</p>
            <Link className="text-gray-500 " href="/">
              Term Of Service
            </Link>
            <Link className="text-gray-500" href="/">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      {/* Calender Side */}
      <div className="w-1/2">
        <MeetingCalender />
      </div>
    </div>
  );
}

export default Footer;
