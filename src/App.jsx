import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchJob from "./components/SearchJob";
import {data} from "./assets/dummyJobData.json";
import { useState } from "react";

function App() {
  const [jobData,setJobData] = useState(null);

  const filteredJobData = (props)=>{
      console.log("Hello", data.filter(item => (item.employment_type==props.Job_type || item.location==props.Location || item.title==props.Job_title )));
  };
  
  return (
    <div>
      <Navbar />
      <Header />
      <SearchJob filteredJobData={filteredJobData}/>
      {data.map((item)=><JobCard key={item.id} jobData={item}/>)}
    </div>
  )
}

export default App;