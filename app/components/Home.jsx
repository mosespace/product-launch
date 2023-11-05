import React from "react";
import Link from "next/link";
import { myFont } from "../../styles/fonts";
import { FiArrowLeft } from "react-icons/fi";

export default function HomeComponent() {
  return (
    <div
      className={`flex flex-col bg-[#0c3245] items-center justify-center gap-[2rem] pt-[8rem] py-[2rem] text-center text-white`}
    >
      <div>
        <Link
          href='/features'
          className='text-[#08cf65] flex items-center gap-[1.2rem] hover:text-[#7BC056] hover:animate-bounce'
        >
          <FiArrowLeft />
          All features
        </Link>
      </div>
      <div className='flex flex-col gap-[1.6rem]'>
        <p className='text-[68px] font-bold leading-[84px]'>
          <span className={`${myFont.className}`}>
            Improve Department <br /> Visibility With Cross-Tagging
          </span>
        </p>
        <p className='text-[20px] leading-[32px] '>
          Cross-tagging in Wrike enables teams to view tasks in context of their
          unique <br /> projects, as well as wider company initiatives.
        </p>
      </div>
      <button className='py-[1rem] px-[2rem] bg-[#08cf65] font-medium rounded-lg hover:bg-[#08CF65]'>
        Try Wrike for free
      </button>
    </div>
  );
}
