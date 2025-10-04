import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogoGallery from "../client/Gallery";
import Gallery from "../client/Gallery";
import ScrollImage from "../client/ScrollImage";

function WorkGallery() {
  const logos = [
    {
      src: "/logos/AR BEAT.png",
      title: "AR BEAT",
    },
    {
      src: "/logos/ARTYVIZ.png",
      title: "ARTYVIZ",
    },
    {
      src: "/logos/AUX LEDS.png",
      title: "AUX LEDS",
    },
    {
      src: "/logos/CONTOUR.png",
      title: "CONTOUR",
    },
    {
      src: "/logos/GETS.png",
      title: "GETS",
    },
    {
      src: "/logos/VELO PACKAGING.png",
      title: "VELO PACKAGING",
    },
  ];

  const simms = [
    {
      src: "/simms/CAR FOR RENT.png",
      title: "CAR FOR RENT",
    },
    {
      src: "/simms/GARNIER.png",
      title: "GARNIER",
    },
    {
      src: "/simms/ANIT ACNE.png",
      title: "ANIT ACNE",
    },
    {
      src: "/simms/SID.png",
      title: "SID",
    },
    {
      src: "/simms/WILSON.png",
      title: "WILSON",
    },
    {
      src: "/simms/BLISS.png",
      title: "BLISS",
    },
  ];

  const web = [
    {
      src: "/web-development/MEDICAL CARE.png",
    },
    {
      src: "/web-development/JUNGLE.png",
    },
    {
      src: "/web-development/CARS.png",
    },
    {
      src: "/web-development/HORSE.png",
    },
    {
      src: "/web-development/CHIEF.png",
    },
    {
      src: "/web-development/SKIN CARE.png",
    },
  ];

  const videos = [
    {
      src: "https://nextgenbusiness.co/wp-content/uploads/2025/08/Octaplay-Explainer-1.mp4",
    },
    {
      src: "https://nextgenbusiness.co/wp-content/uploads/2025/08/Showreel-Branding.mp4",
    },
    {
      src: "https://nextgenbusiness.co/wp-content/uploads/2025/08/Video-1-Final-Render-Updated.mp4",
    },
    {
      src: "https://nextgenbusiness.co/wp-content/uploads/2025/08/Chilwa-Minerals.mp4",
    },
    {
      src: "https://nextgenbusiness.co/wp-content/uploads/2025/08/ChillFlex-Product-Animation.mp4",
    },
    {
      src: "https://nextgenbusiness.co/wp-content/uploads/2025/08/V5-video.mp4",
    },
  ];
  return (
    <div className="flex flex-col items-center " id="portfolio">
      <h1 className="w-full text-center font-heading text-[45px]">Our Work</h1>
      <Tabs defaultValue="logo" className="bg-transparent">
        <TabsList className="w-[90vw] flex justify-between lg:mb-10 flex-wrap mb-20 ">
          <TabsTrigger value="logo" className="w-[24%] h-10">
            Logo
          </TabsTrigger>
          <TabsTrigger value="simm" className="w-[24%] h-10">
            SIMM
          </TabsTrigger>
          <TabsTrigger value="web-development" className="w-[24%] h-10">
            Web Development
          </TabsTrigger>
          <TabsTrigger value="2d/3d" className="w-full lg:w-[24%] h-10">
            2D / 3D
          </TabsTrigger>
        </TabsList>
        <TabsContent value="logo" className="flex justify-center">
          <Gallery images={logos} />
        </TabsContent>
        <TabsContent value="simm">
          <Gallery images={simms} />.
        </TabsContent>
        <TabsContent value="web-development">
          <ScrollImage images={web} />.
        </TabsContent>
        <TabsContent value="2d/3d">
          <div className="flex flex-wrap justify-between gap-y-5">
            {videos.map((video, index) => (
              <video
                src={video.src}
                key={index}
                controls
                className="w-full lg:w-[30%]"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default WorkGallery;
