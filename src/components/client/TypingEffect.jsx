"use client";
import React from "react";
import { ReactTyped } from "react-typed";

function TypingEffect() {
  return (
    <div className="text-accent2 font-heading text-[50px]  ">
      <ReactTyped
        className="font-bold"
        strings={[
          "Efficient Operations",
          "Strong Reputation",
          "Smart Execution",
        ]}
        typeSpeed={80}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default TypingEffect;
