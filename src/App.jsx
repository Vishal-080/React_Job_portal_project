import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchJob from "./components/SearchJob";
import {data} from "./assets/dummyJobData.json";

function App() {

  const filteredData = {
    
  };
  
  return (
    <div>
      <Navbar />
      <Header />
      <SearchJob />
      {data.map((item)=><JobCard key={item.id} jobData={item}/>)}
    </div>
  )
}

export default App;