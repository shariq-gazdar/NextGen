import React from "react";
import { Typed } from "react-typed";
import TypingEffect from "../client/TypingEffect";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start">
      <div className="text-section pt-10  font-heading font-bold">
        <h1 className="text-[50px]">Your vision, backed by</h1>
        <TypingEffect />
        <h3 className="font-normal font-text text-[17px] mt-5">
          Stand out today. Scale with confidence tomorrow.
        </h3>
      </div>
      <div className="image-section w-full lg:w-[35%] flex justify-center">
        <Image
          src="/spherewave-white.gif"
          height={400}
          width={400}
          alt="hero-logo"
        />
      </div>
    </div>
  );
}

export default Hero;
