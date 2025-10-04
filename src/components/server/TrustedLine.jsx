import Image from "next/image";
import React from "react";

function TrustedLine() {
  const images = [
    "https://nextgenbusiness.co/wp-content/uploads/2025/08/Oracle-Logo-1-1536x864.png",
    "https://nextgenbusiness.co/wp-content/uploads/2025/08/Panasonic-1.png",
    "https://imgs.search.brave.com/-c_DNzpMggapfrwDHHgLVNRvvTy5Qs7DSq1WJyu7ro0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF0Y2h3aXNlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8xMC9pbWFnZS0x/My0xMDI0eDI3Ny5w/bmc",
    "https://imgs.search.brave.com/TAJtPWe1Zw-wdKFlPj-TCotQQWWnbcc0KaxhYDU_fKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvWW91VHViZS1M/b2dvLTIwMTMtNzAw/eDM5NC5wbmc",

    "https://nextgenbusiness.co/wp-content/uploads/2025/09/Untitled-design-2.png",
    "https://nextgenbusiness.co/wp-content/uploads/2025/08/Panasonic_optimized.png",
    "https://nextgenbusiness.co/wp-content/uploads/2025/08/Edward_Jones.png",
  ];
  return (
    <div className="font-text flex  items-center flex-col lg:flex-row justify-center ">
      <p>Trusted by top teams</p>
      <div className="flex justify-center items-center w-[85%] flex-col lg:flex-row">
        {images.map((image, index) => (
          <Image
            src={image}
            width={100}
            height={50}
            className="mx-5 object-contain"
            key={index}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}

export default TrustedLine;
