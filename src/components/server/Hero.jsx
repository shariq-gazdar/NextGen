import React from "react";
import { Typed } from "react-typed";
import TypingEffect from "../client/TypingEffect";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="text-section py-10  font-heading font-bold">
        <h1 className="text-[50px]">Your vision, backed by</h1>
        <TypingEffect />
        <h3 className="font-normal font-text text-[17px] mt-5">
          Stand out today. Scale with confidence tomorrow.
        </h3>
      </div>
      <div className="image-section w-[35%] flex justify-center">
        <Image src="/half-logo.png" height={300} width={300} alt="hero-logo" />
      </div>
    </div>
  );
}

export default Hero;
