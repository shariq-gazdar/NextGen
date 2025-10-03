import Image from "next/image";
import React from "react";

function ScrollImage({ images }) {
  return (
    <div className="flex justify-evenly flex-wrap gap-y-10 w-[90vw]">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full lg:w-[30%] h-[450px] overflow-hidden relative group"
        >
          <Image
            src={image.src}
            alt={image.src}
            width={500}
            height={2000} // big enough to cover tall screenshots
            className="object-top w-full h-auto transition-transform duration-[2000ms] ease-linear group-hover:translate-y-[-75%]"
          />
        </div>
      ))}
    </div>
  );
}

export default ScrollImage;
