import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  // console.log(job);
   return (
    <section className="mx-auto antialiased">
      <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-xl group cursor-pointer transform duration-500 hover:-translate-y-1">
        <div className="min-w-80">
          <div className="p-3 ">
            <div className="flex items-center justify-start gap-3.5">
              <img
                src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
                alt="logo"
                width={50}
                className="rounded-3xl"
              />
              <h1 className="text-xl font-semibold text-gray-800 mt-1">
                {job.jobTitle}
              </h1>
            </div>
            <p className="text-md   leading-relaxed">
              {job.companyName} - {job.jobLocation}
            </p>
            <small className="text-gray-400">{(job.jobDescription).slice(0,120)}</small>
          </div>
          <div className="bg-blue-50 p-2">
            <div className="sm:flex sm:justify-end gap-3 ">
             <Link to={`/jobs/${job.jobId}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 no-underline">
                Apply
              </Link>
            </div>
            <div className="mt-3 text-gray-600 text-sm md:text-sm ">
              <span className="text-gray-400">Posted on : </span> {job.postedAt}{" "}
              <p>Apply before Wed May 14 2025</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default JobCard;
