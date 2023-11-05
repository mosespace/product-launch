import React from "react";
import Image from "next/image";
import TryForfree from "../buttons/TryForfree";
import Lense from "../../../public/benefits/lense.svg";
import Folder from "../../../public/benefits/folder.svg";
import Message from "../../../public/benefits/messages.svg";

export default function Benefits() {
  const benefits = [
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
    <div className='h-screen bg-white text-[#181f38] flex flex-col items-center justify-between gap-[3.5rem] px-[15rem] py-[7rem]'>
      <div className='text-center flex flex-col justify-center gap-[3rem]'>
        <h2 className='text-[52px] leading-[64px] font-bold'>
          How cross-tagging benefits <br />
          every company
        </h2>
        <p className='text-[20px] leading-[32px] text-[#2b3857]'>
          Wrike’s cross-tagging feature can increase transparency and
          communication across teams, departments,
          <br /> and organizations.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-9'>
        {benefits.map((benefit, id) => {
          return (
            <div className='flex flex-col gap-8' key={id}>
              <Image src={benefit.image} alt='' />
              <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-[28px] leading-[40px]'>
                  {benefit.title}
                </h3>
                <span className='text-[18px] leading-[32px] text-[#2b3857]'>
                  {benefit.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className='pt-[2rem]'>
        <TryForfree
          className={`py-[1rem] px-[2.5rem] text-white font-bold text-[1.1rem] hover:bg-[#04ba71]`}
        />
      </div>
    </div>
  );
}
