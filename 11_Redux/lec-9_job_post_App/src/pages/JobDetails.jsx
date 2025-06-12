import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { JobContext } from "../context/JobContext";

const JobDetails = () => {
  const currUrl = useParams();
  const { id } = currUrl;

  const jobs = useContext(JobContext);
  const currJob = jobs.jobs.find((job) => job.jobId === id);
  if (!currJob) {
    return <div className="text-center text-red-500">Job not found</div>;
  }
  console.log(currJob);

  return (
    <div className="flex flex-col items-center justify-center  min-w-screen md:min-w-lg bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="grid grid-cols-1">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
                alt=""
                className="rounded-3xl w-25"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {currJob.type}
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-around  mt-2 w-full md:gap-30 ">
              <p className="text-sm text-gray-500 mt-1">
                Posted on: {currJob.postedAt}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Job Id: {currJob.jobId}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Email: {currJob.email}
              </p>
            </div>
          </div>
          <span className="mt-4 md:mt-0 inline-block px-3 py-1 text-sm bg-blue-100 text-blue-600 font-medium rounded-full">
            {currJob.position}
          </span>
        </div>

        <div className="space-y-2">
          <div className="text-lg text-gray-700 font-semibold">Company:</div>
          <div className="text-gray-600">{currJob.companyName}</div>

          <div className="text-lg text-gray-700 font-semibold">Location:</div>
          <div className="text-gray-600">{currJob.jobLocation}</div>

          <div className="text-lg text-gray-700 font-semibold">Category:</div>
          <div className="text-gray-600">{currJob.category}</div>

          <div className="text-lg text-gray-700 font-semibold">Position:</div>
          <div className="text-gray-600">{currJob.position}</div>

          <div className="flex flex-row  justify-start  gap-5 ">
            <div className="text-lg text-gray-700 font-semibold ">Salary:</div>
            <div className="text-gray-600 mt-1.5  ">
              {`${currJob.salaryRange[0]}/- To ${currJob.salaryRange[1]}/-`}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Required Skill
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {currJob.requiredSkills.map((skill, index) => {
              return (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-600 font-semibold px-2 py-1 rounded-full mr-3 mb-2"
                >
                  {skill}
                </span>
              );
            })}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Job Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {currJob.jobDescription}{" "}
          </p>
        </div>

        <div className="text-center">
          <Link
            to={`/Apply/${currJob.id}`}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer no-underline"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default JobDetails;
