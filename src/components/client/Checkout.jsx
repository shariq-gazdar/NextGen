"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "../ui/button";

function Checkout() {
  const [cart, setCart] = useState([]);

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

  // Load cart from localStorage when sheet opens or component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Find service icon by title
  const findServiceIcon = (title) => {
    const service = services.find((service) => service.title === title);
    return service ? service.icon : null;
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Calculate total savings (assuming $99 savings as shown in image)
  const calculateSavings = () => {
    return 99.0; // Fixed savings as shown in the image
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <Sheet>
      <div className="fixed bottom-2 left-2">
        <SheetTrigger className="relative bg-accent2 p-3 rounded-full flex items-center justify-center">
          <ShoppingCart className="w-8 h-8" />
          {cart.length > 0 && (
            <div className="absolute -top-1 -left-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              {cart.length}
            </div>
          )}
        </SheetTrigger>
      </div>
      <SheetContent
        side="left"
        className="w-[90vw] max-w-[350px] h-full flex flex-col"
      >
        <SheetHeader>
          <div className="flex items-center gap-x-2 relative">
            {/* Cart Icon */}
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {/* Qty dot */}
              {cart.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cart.length}
                </div>
              )}
            </div>
            <SheetTitle>Your Cart</SheetTitle>
          </div>
        </SheetHeader>

        {/* Cart items - make this scrollable */}
        <div className="flex-1 overflow-y-auto mt-4 flex flex-col gap-3">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item, index) => {
              const serviceIcon = findServiceIcon(item.title);
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 bg-white"
                >
                  <div className="flex gap-3">
                    {/* Service Image */}
                    {serviceIcon && (
                      <div className="flex-shrink-0">
                        <img
                          src={serviceIcon}
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </div>
                    )}

                    {/* Item details */}
                    <div className="flex-1">
                      {/* Item header with title and remove button */}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* Quantity and pricing info */}
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          Qty: {item.qty}
                        </div>
                        <div className="flex flex-col items-end">
                          {/* Savings badge */}
                          <div className="text-xs font-medium text-green-600 mb-1">
                            SAVE ${calculateSavings().toFixed(2)}
                          </div>
                          {/* Price */}
                          <div className="text-sm font-semibold">
                            ${(item.price * item.qty).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom button group - always sticks to bottom with shadow */}
        <div className="sticky bottom-0 bg-white/90 backdrop-blur-md shadow-t flex flex-col gap-y-2 p-4">
          <div className="flex w-full justify-between text-[17px] font-text text-accent1 py-2">
            <h1>Your savings on this order are:</h1>
            <h1>${calculateSavings().toFixed(2)}</h1>
          </div>
          <button className="w-full bg-black text-white py-4 font-text font-normal hover:bg-white hover:border-2 hover:text-black">
            {cart.length > 0 && (
              <div className="flex justify-center text-lg items-center">
                <span>Checkout - </span>
                <span className="ml-1">${calculateSubtotal().toFixed(2)}</span>
              </div>
            )}
          </button>
          <button className="w-full bg-black text-white py-4 font-text font-normal hover:bg-white hover:border-2 hover:text-black">
            Continue
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Checkout;
