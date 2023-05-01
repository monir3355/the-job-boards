import React, { useEffect } from "react";
import Job from "./Job";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { getApplyJob } from "../FakeDB/FakeDB";

const Applied = () => {
  const jobs = useLoaderData();
  const [allJobs, setAllJobs] = useState([]);
  const [isFilterJobs, SetIsFilterJobs] = useState(false);
  const storedJobs = getApplyJob();
  const uniqueId = storedJobs.filter((val, id, array) => {
    return array.indexOf(val) == id;
  });
  useEffect(() => {
    const appliedJobs = jobs.jobs.filter((job) => uniqueId.includes(job.id));
    if (appliedJobs) {
      setAllJobs(appliedJobs);
    }
  }, []);

  const handleSelectValue = (e) => {
    const filterJobs = allJobs.filter((job) =>
      e.target.value.includes(job.job_types)
    );
    if (filterJobs) {
      SetIsFilterJobs(filterJobs);
    }
  };
  return (
    <>
      <div className="bg-[#F9F9FF] pt-4 pb-14 text-3xl text-center font-semibold relative">
      Applied Jobs
        <div className="absolute bottom-0">
          <img
            className="w-24 md:w-36"
            src="/images/All Images/Vector.png"
            alt=""
          />
        </div>
      </div>
      {/* filter the applied all jobs */}
      <div className="mt-12 container mx-auto md:px-0 px-4 text-right">
        <div className="inline-block relative w-40">
          <select
            onChange={handleSelectValue}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Filter the Jobs</option>
            <option value="Onside"> Onside</option>
            <option value="Remote">Remote</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      {allJobs.length > 0 ? (
        <div className="flex flex-col gap-6 my-12 container mx-auto px-4 md:px-0">
          {isFilterJobs
            ? isFilterJobs.map((job) => <Job key={job.id} job={job}></Job>)
            : allJobs.map((job) => <Job key={job.id} job={job}></Job>)}
        </div>
      ) : (
        <div className="text-center font-semibold text-5xl py-12">
          <div className="mb-4">You don't have Applied Job</div>
          <p>
            Please{" "}
            <Link className="text-blue-400" to="/">
              Apply
            </Link>{" "}
            your Jobs
          </p>
        </div>
      )}
    </>
  );
};

export default Applied;
