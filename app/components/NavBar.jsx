"use client";
import Link from "next/link";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Logo from "../../public/wrike-logo-dark.svg";
import LogoDark from "../../public/wrike-logo-light.svg";
import TryForfree from "./buttons/TryForfree";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled
          ? "fixed top-0 left-0 right-0 bg-white shadows text-black w-full px-8 lg:px-[15rem] flex justify-between"
          : "fixed top-0 left-0 right-0 bg-[#0c3245] text-white w-full px-8 lg:px-[15rem] flex justify-between "
      }`}
    >
      <div className='flex justify-center gap-[2.5rem] items-center'>
        {scrolled ? (
          <Image src={LogoDark} alt='Wrike Logo' />
        ) : (
          <Image src={Logo} alt='Wrike Dark Logo' />
        )}

        <ul className='flex items-center justify-center font-medium'>
          <li
            className={`hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
              scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
            }`}
          >
            <Link href='/' className='flex items-center gap-2'>
              {" "}
              Why Wrike?
              <FaChevronDown size={15} />
            </Link>
          </li>
          <li
            className={`hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
              scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
            }`}
          >
            <Link href='/' className='flex items-center gap-2'>
              {" "}
              Features <FaChevronDown size={15} />
            </Link>
          </li>
          <li
            className={`hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
              scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
            }`}
          >
            <Link href='/' className='flex items-center gap-2'>
              {" "}
              Resources <FaChevronDown size={15} />
            </Link>
          </li>
          <li
            className={`hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
              scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
            }`}
          >
            <Link href='/'> Enterprise</Link>
          </li>
          <li
            className={`hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
              scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
            }`}
          >
            <Link href='/'> Pricing</Link>
          </li>
        </ul>
      </div>
      <ul className='flex items-center justify-center gap-3 font-medium'>
        <Link
          href='/'
          className={`hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
            scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
          }`}
        >
          Contact Sales
        </Link>
        <Link
          href='/'
          className={`flex items-center gap-1 hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
            scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
          }`}
        >
          <TbWorld size={15} /> EN
        </Link>
        <Link
          href='/'
          className={`flex items-center gap-1 hover:bg-[#0a615a]/50 hover:rounded-md px-2 py-1 ${
            scrolled ? "hover:text-[#0a615a] hover:bg-transparent" : ""
          }`}
        >
          Log in
        </Link>
        <TryForfree />
      </ul>
    </div>
  );
}
