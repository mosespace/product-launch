import React from "react";
import Carousel from "./Carousel";
import Lense from "../../../public/benefits/lense.svg";
import Folder from "../../../public/benefits/folder.svg";
import Message from "../../../public/benefits/messages.svg";
import Image from "next/image";

export default function Slides() {
  const slides = [
    {
      title: "Improved asset management",
      desc: "Manage multiple campaigns across various production stages with ease.Designers and marketers can access campaign assets within their respective workflows simply by cross-tagging their work",
      image: Folder,
    },
    {
      title: "Improved asset management",
      desc: "Manage multiple campaigns across various production stages with ease.Designers and marketers can access campaign assets within their respective workflows simply by cross-tagging their work",
      image: Folder,
    },
    {
      title: "Improved asset management",
      desc: "Manage multiple campaigns across various production stages with ease.Designers and marketers can access campaign assets within their respective workflows simply by cross-tagging their work",
      image: Folder,
    },
    {
      title: "Improved asset management",
      desc: "Manage multiple campaigns across various production stages with ease.Designers and marketers can access campaign assets within their respective workflows simply by cross-tagging their work",
      image: Folder,
    },
    {
      title: "Better team connectivity",
      desc: "When it comes to interdepartmental efforts, you need to receive critical updates from each team. Add agenda items to a shared list to discuss in daily standups or review separately.",
      image: Message,
    },
    {
      title: "Enhanced project visibility",
      desc: "Wrike users can tag a task in multiple places to ensure it is fully visible. For PMOs who want to view all components of a launch plan, cross-tagging saves time without sacrificing clarity.",
      image: Lense,
    },
  ];
  return (
    <div className='h-screen px-[15rem] bg-white flex flex-col items-center gap-[4rem] py-[7rem]'>
      <h3 className='text-[52px] leading-[64px] font-bold text-[#181f38]'>
        Start cross-tagging with these templates
      </h3>
      <Carousel autoSlide={true}>
        {slides.map((slide, id) => {
          return (
            <div
              className='flex flex-col gap-8 bg-[#F1F8F7] py-[1rem] px-[1.5rem] w-full'
              key={id}
            >
              <Image src={slide.image} alt='' />
              <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-[28px] text-[#181f38] leading-[40px]'>
                  {slide.title}
                </h3>
                <span className='text-[18px] leading-[32px] text-[#2b3857]'>
                  {slide.desc}
                </span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
