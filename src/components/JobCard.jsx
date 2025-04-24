import React from 'react';
import dayjs from "dayjs";

const JobCard = () => {

  let skills = ["JavaScript", "HTML", "CSS", "React", "Redux"];
  let date1 = dayjs(Date.now());
  let diffDate = date1.diff("04-20-2025", "day");

  return (
    <div className='w-10/12 mx-auto my-2'>
      <div className='bg-zinc-200 px-6 py-4 rounded-xl shadow-2xl flex justify-between items-center hover:border hover:border-blue-500 hover:bg-zinc-100'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='font-semibold'>FrontEnd Developer - Google</h1>
          <p>Full-time &#x2022; Fresher &#x2022; 4 Openings</p>
          <div className='flex items-center gap-2'>
            {skills.map((item)=><p className='px-2 py-1 rounded-xl border'>{item}</p>)}
          </div>
        </div>
        <div>
          <p>{diffDate} Days Ago</p>
          <button>Apply now</button></div>
      </div>
    </div>
  )
};

export default JobCard;