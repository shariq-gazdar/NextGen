"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Card({ service }) {
  const addToCart = () => {
    // get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // check if item already exists
    const index = cart.findIndex((item) => item.title === service.title);

    if (index !== -1) {
      // already exists → increase qty
      cart[index].qty += 1;
    } else {
      // new item → push with qty:1
      cart.push({ ...service, qty: 1 });
    }

    // save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  };
  return (
    <motion.div
      className="relative w-[373px] h-[81px] bg-gray-200 rounded-lg flex items-center"
      whileHover="hover"
      onClick={addToCart}
      initial="initial"
    >
      {/* Line + Dot container */}
      <div className="absolute -left-6 top-0  flex justify-center h-[65px] translate-y-[15%]">
        {/* Line */}
        <motion.div
          className="w-[2px] bg-green-500"
          variants={{
            initial: { scaleY: 0 },
            hover: { scaleY: 1 },
          }}
          transition={{ duration: 0.8 }}
          style={{
            transformOrigin: "bottom",
            // height: 80,
            filter: "drop-shadow(0 0 6px #22c55e)",
          }}
        />

        {/* Dot with glow */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-green-500"
          style={{
            bottom: 0,
            filter: "drop-shadow(0 0 6px #22c55e)", // green glow
          }}
          variants={{
            initial: { y: "65px", opacity: 0 },
            hover: { y: "-65px", opacity: 1 },
          }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Card content */}
      <div className="flex items-center">
        <Image
          src={service.icon}
          width={90}
          height={25}
          alt={service.title}
          className="mr-5 scale-[45%]"
        />
        <div className="flex flex-col justify-between h-20 py-1">
          <h1 className="font-heading text-[15px]">{service.title}</h1>
          <p className="text-[14px] w-[99%] font-text">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
