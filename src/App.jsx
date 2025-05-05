import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchJob from "./components/SearchJob";
import { data } from "./assets/dummyJobData.json";
import { useState } from "react";

function App() {
  const [jobData, setJobData] = useState(data);

  const filteredJobData = (filters) => {
    // console.log(filters,"filters");

    const filterdata = jobData?.filter((job) => {
      return Object.entries(filters).every(([key, value]) => {
        // convert filter keys to match job object keys if needed
        if (value === "") return true;
        if (key === "Job_title") return job.title === value;
        if (key === "Location") return job.location === value;
        if (key === "Job_type") return job.employment_type === value;

        return true; // default: ignore unknown filters
      });
    });
    console.log(filterdata, "filterdata");
    setJobData(filterdata);
  };

  // data.filter(
  //   (item) =>
  //     item.employment_type == Job_type ||
  //     item.location == Location ||
  //     item.title == Job_title
  // );

  return (
    <div>
      <Navbar />
      <Header />
      <SearchJob filteredJobData={filteredJobData} />
      {jobData?.map((item) => (
        <JobCard key={item.id} jobData={item} />
      ))}
      {jobData.length == 0 && (
        <div className="text-white text-3xl text-center my-6">
          No Job Found...! <br /> Please Reload
        </div>
      )}
    </div>
  );
}

export default App;
