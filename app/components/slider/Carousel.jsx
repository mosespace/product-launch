"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className='overflow-hidden relative mb-[7rem]'>
      <div
        className='grid grid-cols-3 gap-[2rem] transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${current * 100})` }}
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev}>
          <ChevronLeft
            size={40}
            className='p-1 rounded-full shadow bg-black/80 hover:bg-black'
          />
        </button>
        <button onClick={next}>
          <ChevronRight
            size={40}
            className='p-1 rounded-full shadow bg-black/80 hover:bg-black'
          />
        </button>
      </div>

      <div className='absolute bottom-0 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-black rounded-full ${
                current === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
