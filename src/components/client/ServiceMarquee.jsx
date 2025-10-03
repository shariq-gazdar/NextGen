"use client";
import React from "react";
import Marquee from "react-fast-marquee";

function ServiceMarquee({
  children,
  speed = 50,
  pauseOnHover = true,
  gradient = false,
  direction = "left",
  className = "",
}) {
  return (
    <Marquee
      speed={speed}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      direction={direction}
      className={className}
    >
      {children}
    </Marquee>
  );
}

export default ServiceMarquee;
