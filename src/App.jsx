
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchJob from "./components/SearchJob";
import { data } from "./assets/dummyJobData.json";
import { useState } from "react";
import Error from "./components/ErrorPage";
import {lazy, Suspense} from "react";

const Header = lazy(() => import("./components/Header"));

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
      <Suspense fallback={<h1>Loading...</h1>}>
            <Header />
      </Suspense>
      <SearchJob filteredJobData={filteredJobData} />
      {jobData?.map((item) => (
        <JobCard key={item.id} jobData={item} />
      ))}
      {jobData.length == 0 && <Error />}
    </div>
  );
}

export default App;
