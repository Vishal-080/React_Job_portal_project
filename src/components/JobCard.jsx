import React from "react";
import dayjs from "dayjs";

const JobCard = (props) => {
  
  const {
    title,
    company,
    number_of_opening,
    job_created_on,
    job_link,
    skills,
    employment_type,
    salary,location,
  } = props.jobData;

  let date1 = dayjs(Date.now());
  let diffDate = date1.diff(job_created_on, "day");

  return (
    <div className="w-10/12 mx-auto my-4">
      <div className="bg-zinc-200 px-6 py-4 rounded-xl shadow-black shadow-md flex justify-between items-center hover:border hover:border-blue-500 hover:bg-zinc-100">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold">
            {title} - {company}
          </h1>
          <p>
            {employment_type} &#x2022; {number_of_opening} Openings &#x2022; {location} &#x2022; <span className="font-medium">{salary}</span>
          </p>
          <div className="flex items-center gap-2">
            {skills.map((item) => (
              <p key={item} className="px-2 py-1 rounded-xl border">{item}</p>
            ))}
          </div>
        </div>
        <div>
          <p>{diffDate} Days Ago</p>
          <a href={job_link} target="_blank">
            <button className="bg-blue-500 text-white rounded-md px-2 py-1 cursor-pointer">
              Apply now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;