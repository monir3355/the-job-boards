import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Jobs = ({ job }) => {
  const {
    id,
    company_name,
    logo_url,
    job_title,
    job_full,
    job_types,
    salary,
    location,
  } = job;

  

  return (
    <div className="space-y-3 border rounded-md p-6 py-8">
      <img className="h-14 w-32 rounded-md mb-6" src={logo_url} alt="" />
      <h3 className="font-semibold">{job_title}</h3>
      <p>{company_name}</p>
      <p>
        <span className="border border-blue-600 rounded-sm  p-1 mr-2 text-blue-600">
          {job_types}
        </span>{" "}
        <span className="border border-blue-600 rounded-sm  p-1 text-blue-600">
          {job_full}
        </span>
      </p>
      <p>
        <span>
          <MapPinIcon className="h-6 inline-flex" /> {location}
        </span>{" "}
        <span className="ml-12">
          <CurrencyDollarIcon className="h-6 inline-flex" /> {salary}
        </span>
      </p>
      <p className="inline-block">
        <Link to={`/detail/${id}`} className="btn-primary">
          View Details
        </Link>
      </p>
    </div>
  );
};

export default Jobs;
