import React, { useState } from "react";
import { useImmer } from "use-immer";

const SearchJob = () => {
  // Used UseImmer hook to update the object effectively;

  const [searchJob, setSearchJob] = useImmer({
    Job_title: "",
    Location: "",
    Job_Type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearchJob((draft) => {
      draft[name] = value;
    });
  };

  const handleSearch = () => {
    console.log(searchJob);
  };

  return (
    <div className="flex justify-center items-center gap-5 my-10 flex-wrap">
      <select
        name="Job_title"
        value={searchJob.Job_title}
        onChange={handleChange}
        className="w-3/12  bg-white outline-none py-1 px-2 rounded"
      >
        <option value="" disabled hidden selected>
          Job Title
        </option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Sales Manager">Sales Manager</option>
        <option value="PHP Developer">PHP Developer</option>
        <option value="ML Engineer">ML Engineer</option>
        <option value="MERN Stack Developer">MERN Stack Developer</option>
      </select>
      <select
        name="Location"
        value={searchJob.Location}
        onChange={handleChange}
        className="w-2/12  bg-white outline-none py-1 px-2 rounded"
      >
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Remote">Remote</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
      <select
        name="Job_Type"
        value={searchJob.Job_Type}
        onChange={handleChange}
        className="w-2/12  bg-white outline-none py-1 px-2 rounded"
      >
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
      </select>
      <button
        onClick={handleSearch}
        className="w-2/12 bg-blue-500 text-white py-1 px-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchJob;
