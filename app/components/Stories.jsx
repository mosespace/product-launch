import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TryForfree from "./buttons/TryForfree";
import Quote from "../../public/stories/quote1.svg";
import Story1 from "../../public/stories/story1.svg";
import Story3 from "../../public/stories/story2.svg";
import Story2 from "../../public/stories/story3.svg";
export default function Stories() {
  const stories = [
    {
      title: "250%",
      desc: "increase in communication",
      image: Story1,
      path: "/",
      category: "UNSW'S Story",
    },
    {
      title: "16,600",
      desc: "Hours saved over three years",
      image: Story2,
      path: "/",
      category: "UNSW'S Story",
    },
    {
      title: "50%",
      desc: "less time spent planning",
      image: Story3,
      path: "/",
      category: "UNSW'S Story",
    },
  ];
  return (
    <div className='px-[15rem] flex flex-col items-center gap-[4rem] pt-[7rem] pb-[5rem] w-full'>
      <div className='flex flex-col items-center gap-[4rem]'>
        <div>
          <h3 className='text-[52px] leading-[64px] font-bold text-[#181f38]'>
            Customer success stories
          </h3>
        </div>
        <div className='grid grid-cols-3 gap-4 w-[1200px]'>
          {stories.map((story, i) => (
            <div
              className='bg-white py-[1rem] group px-[2rem] text-[#181f38] rounded-lg  hover:border-2 hover:border-green-600'
              key={i}
            >
              <Link
                href={story.path}
                className='flex flex-col gap-[1.5rem]'
                key={i}
              >
                <Image src={story.image} alt='' />
                <span className='text-[4rem] font-bold'>{story.title}</span>
                <p>{story.desc}</p>
                <div className='flex items-center gap-[1rem] group-hover:text-green-600'>
                  {story.category}
                  <ArrowRight className='group-hover:animate-ping' />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-[3rem] flex-col items-center'>
        <div className='w-full border-[3.5px] rounded-lg py-[3.5rem] px-[7rem] text-[#181f38] border-green-600 flex flex-col gap-7'>
          <span className='text-[1.5rem]'>
            “Being able to create custom tags at a micro level is really
            important because you can search for something and find it easily in
            Wrike.”
          </span>
          <div className='flex items-center justify-between'>
            <span>Matt Andrews, Marketing Campaign Manager, Aerotek</span>
            <div className=''>
              <Image src={Quote} alt='Aerotek' />
            </div>
          </div>
        </div>
        <div className='flex gap-[1rem]'>
          <button className='border-4 rounded-full w-[50px] border-green-600'></button>
          <button className='border-2 rounded-full w-[50px] border-green-600'></button>
        </div>
      </div>
      <>
        <TryForfree
          className={`py-[1rem] px-[2.5rem] text-white font-bold text-[1.1rem] hover:bg-[#04ba71]`}
        />
      </>
    </div>
  );
}
