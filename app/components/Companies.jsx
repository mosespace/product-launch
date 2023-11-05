import React from "react";
import Image from "next/image";
import Sponsor01 from "../../public/sponsers/sponsor01.svg";
import Sponsor02 from "../../public/sponsers/sponsor02.svg";
import Sponsor03 from "../../public/sponsers/sponsor03.svg";
import Sponsor04 from "../../public/sponsers/sponsor04.svg";
import Sponsor05 from "../../public/sponsers/sponsor05.svg";
import Sponsor06 from "../../public/sponsers/sponsor06.svg";
import Sponsor07 from "../../public/sponsers/sponsor07.svg";

export default function Companies() {
  return (
    <section className='bg-wave bg-no-repeat bg-cover flex items-center justify-center mt-[-100px] px-[15rem] h-[430px] w-full'>
      <div className='flex py-8 flex-col items-center justify-center gap-4 w-full'>
        <span className='text-[12px] font-bold leading-[20px]'>
          TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
        </span>
        <div className='flex justify-center items-center gap-8'>
          <Image src={Sponsor01} alt='sponsor' />
          <Image src={Sponsor02} alt='sponsor' />
          <Image src={Sponsor03} alt='sponsor' />
          <Image src={Sponsor04} alt='sponsor' />
          <Image src={Sponsor05} alt='sponsor' />
          <Image src={Sponsor06} alt='sponsor' />
          <Image src={Sponsor07} alt='sponsor' />
        </div>
      </div>
    </section>
  );
}
