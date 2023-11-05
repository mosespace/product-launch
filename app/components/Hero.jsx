import React from "react";
import Image from "next/image";
import DemoImage from "../../public/cross-tagging-media.png";

export default function Hero() {
  return (
    <div className='flex items-center justify-center bg-[#0c3245] px-[19.5rem]'>
      <Image src={DemoImage} alt='cross-tagging-media' objectFit='contain' />
    </div>
  );
}
