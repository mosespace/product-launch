import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import TryForfree from "../buttons/TryForfree";
import Task01 from "../../../public/tasks/task02.png";

export default function Task() {
  return (
    <div className='flex flex-col justify-center items-center gap-[4rem] pt-[2.5rem]'>
      <div className='flex items-start justify-start gap-[2rem] pt-[1rem]'>
        <div className='flex flex-col gap-[1rem] text-black w-[85%]'>
          <div className='bg-[#04454D] text-white border-4 hover:border-transparent cursor-pointer border-[#08cf65] rounded-lg py-4 px-8 flex flex-col gap-2 justify-between '>
            <h3 className='text-[20px] font-bold'>Task</h3>
            <p className='text-[16px] leading-[28px]'>
              Create tasks in multiple work streams without duplicating the task
              itself. This way, your task is easily accessible to multiple
              departments, but can be uniquely tracked for your team’s specific
              purposes.
            </p>
          </div>
          <button className='bg-white py-4 px-8 flex justify-between rounded-lg font-medium'>
            Subtasks <ChevronDown />
          </button>
          <button className='bg-white py-4 px-8 flex justify-between rounded-lg font-medium'>
            Folders <ChevronDown />
          </button>
          <button className='bg-white py-4 px-8 flex justify-between rounded-lg font-medium'>
            MileStones <ChevronDown />
          </button>
          <button className='bg-white py-4 px-8 flex justify-between rounded-lg font-medium'>
            Phase <ChevronDown />
          </button>
          <button className='bg-white py-4 px-8 flex justify-between rounded-lg font-medium'>
            Projects <ChevronDown />
          </button>
        </div>
        <div className='mt-[-1%] relative w-[1100px] h-[550px]'>
          <Image
            src={Task01}
            alt='task-one'
            fill
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <div className=''>
        <TryForfree
          className={`py-[1rem] px-[2.5rem] text-white font-bold text-[1.1rem] hover:bg-[#04ba71]`}
        />
      </div>
    </div>
  );
}
