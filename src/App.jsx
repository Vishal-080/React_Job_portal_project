import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchJob from "./components/SearchJob";

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <SearchJob />
      {/* <JobCard /> */}
    </div>
  )
}

export default App;