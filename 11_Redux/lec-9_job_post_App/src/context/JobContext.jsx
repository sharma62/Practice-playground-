import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/jobs",
      responseType: "json",
    }).then(function (response) {
      // console.log(response.data);
      setJobs(response.data);
    });
  }, []);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};
