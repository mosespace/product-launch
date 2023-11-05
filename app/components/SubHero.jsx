import React from "react";
import Task from "./tasks/Task";

export default function SubHero() {
  return (
    <div className='text-black mt-[-1%] flex flex-col items-center gap-8 px-[15rem] pb-[5rem]'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-[52px] font-bold'>Cross-tag at every level</h2>
        <p className='text-[20px] text-center'>
          Categorize your company’s entire workload with Wrike. Use our
          cross-tagging feature across tasks, subtasks, <br /> folders,
          milestones, phases, and projects.
        </p>
      </div>
      <Task />
    </div>
  );
}
