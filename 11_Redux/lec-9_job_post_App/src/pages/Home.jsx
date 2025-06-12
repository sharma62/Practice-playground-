import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import JobCard from "../components/JobCard";
import { JobContext } from "../context/JobContext";
import { useSelector } from "react-redux";

const Home = () => {
  //soln:  jobs.jobs main keyword ko filter out karke jo bhi remaining job bach jate hai unko jobs.jobs mai re-Assign ka do taki jab jobs.jobs re-render ho
  const keywords = useSelector((state) => state.jobSearchSlice.keywords);

  const allJobs = useContext(JobContext);
  console.log(allJobs);
  console.log(keywords.toLowerCase());

  const filterdJobs = allJobs.jobs.filter(
    (currJob) =>
      currJob.category.toLowerCase() === keywords.toLowerCase() ||
      currJob.id.toLowerCase() === keywords.toLowerCase() ||
      currJob.jobId.toLowerCase() === keywords.toLowerCase()
  );

  console.log(filterdJobs.length > 0);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-center mt-10 text-blue-500">
          Welcome to Job Post App
        </h1>
        <p className="text-lg text-center mt-4">Find your dream job here!</p>
      </div>

      <SearchBox />

      <div>
        <div className="container mx-auto">
          <span >
            {" "}
            { filterdJobs.length > 0 && `Result: `+ filterdJobs.length + ` Jobs Found`}{" "}
          </span>
          <h1 className="text-4xl font-semibold text-center my-10">
            Active Jobs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Job cards will go here */}
            {
              // check karna hai ki
              filterdJobs.length > 0 ? (
                filterdJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : Array.isArray(allJobs.jobs) && allJobs.jobs.length > 0 ? (
                allJobs.jobs.map((job) => <JobCard key={job.jobId} job={job} />)
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
                  <p className="text-lg text-gray-500">No jobs available</p>
                </div>
              )
            }
            {/* Repeat for more job cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
