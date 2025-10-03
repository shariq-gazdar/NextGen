"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Image Grid */}
      <div className="flex flex-wrap justify-between gap-y-10">
        {images.map((img, i) => (
          <div
            key={i}
            className="flex flex-col items-center w-full lg:w-[30%] "
          >
            <img
              src={img.src}
              alt={img.title}
              className="cursor-pointer rounded-lg shadow-md hover:opacity-80 transition"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({
          src: img.src,
          title: img.title,
        }))}
        plugins={[Fullscreen, Zoom, Share, Captions]}
      />
    </div>
  );
}

export default Gallery;
