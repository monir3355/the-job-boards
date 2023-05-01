import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Job = ({ job }) => {
  const {
    id,
    company_name,
    logo_url,
    job_title,
    job_full,
    job_types,
    salary,
    location,
    job_description,
    job_responsibility,
    education_requirement,
    experience,
    contact_info,
  } = job;
  return (
    <div className="border px-6 rounded-md md:flex justify-between items-center gap-4 space-y-4 py-4">
      <div className="md:flex justify-center items-center gap-6">
        <figure className="bg-gray-300 h-28 w-40 flex items-center justify-center p-4 rounded-md">
          <img className="h-14 w-32 rounded-md" src={logo_url} alt="Movie" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title font-semibold text-lg">{job_title}</h2>
          <p>{company_name}</p>
          <p>         
            <span className="border border-blue-600 rounded-sm  p-1 mr-2 text-blue-600">
              {job_types}
            </span>
            <span className="border border-blue-600 rounded-sm  p-1 text-blue-600">
              {job_full}
            </span>
          </p>
          <p className="flex">
            <MapPinIcon className="h-5 text-blue-400 inline-flex" />
            <span className="font-semibold pl-2"> Location: </span>
            {location}

            <CurrencyDollarIcon className="h-5 text-blue-400 inline-flex pl-4" />
            <span className="font-semibold pl-2"> Salary: </span>
            {salary}
          </p>
        </div>
      </div>
      <div className="inline-flex">
        <button>
          <Link to={`/detail/${id}`} className="btn-primary">
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Job;
