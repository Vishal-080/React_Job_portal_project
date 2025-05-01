import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchJob from "./components/SearchJob";
import {data} from "./assets/dummyJobData.json";
import { useState } from "react";

function App() {
  const [jobData,setJobData] = useState(null);

  const filteredJobData = (props)=>{
      console.log("Hello", data.filter(item => (item.location==props.Location && item.location==props.Location )));
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