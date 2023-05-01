import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  InboxIcon,
  InboxStackIcon,
} from "@heroicons/react/24/solid";
import { applyToDB } from "../FakeDB/FakeDB";
import toast, { Toaster } from "react-hot-toast";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { detailId } = useParams();
  const [job, setJob] = useState({});

  const handleAddToDB = (id) => {
    applyToDB(id);
    toast.success("Wow You have applied jobs!");
  };

  useEffect(() => {
    const foundJob = jobs.jobs.find((job) => job.id === detailId);
    if (foundJob) {
      setJob(foundJob);
    }
  }, [detailId]);
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
  // console.log(contact_info.phone);
  return (
    <section>
      <div className="bg-[#F9F9FF] pt-4 pb-14 text-3xl text-center font-semibold relative">
        Jobs Details
        <div className="absolute bottom-0">
          <img
            className="w-24 md:w-36"
            src="/images/All Images/Vector.png"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4 col-span-2">
            <h2 className="text-xl font-semibold">
              Company Name: {company_name}
            </h2>
            <p>
              <span className="font-bold">Job Description:</span>
              {job_description}
            </p>
            <p>
              <span className="font-bold">Job Responsibility:</span>
              {job_responsibility}
            </p>
            <p>
              <span className="font-bold">Educational Requirements:</span>
              <br /> {education_requirement}
            </p>
            <p>
              <span className="font-bold">Experiences:</span> <br />
              {experience}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mx-4 rounded-md bg-[#ebebf8] p-4">
              <div className="py-5 space-y-4">
                <h3 className="text-xl font-semibold">Job Details</h3>
                <hr className="border-1 border-blue-200" />
                <p className="flex">
                  <CurrencyDollarIcon className="h-6 text-blue-400 inline-flex" />
                  <span className="font-semibold pl-2"> Salary: </span>
                  {salary}
                </p>
                <p className="flex">
                  <InboxStackIcon className="h-6 text-blue-400 inline-flex" />
                  <span className="font-semibold pl-2"> Job Title: </span>
                  {job_title}
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <hr className="border-1 border-blue-200" />
                <p className="flex">
                  <PhoneIcon className="h-6 text-blue-400 inline-flex" />
                  <span className="font-semibold pl-2"> Phone: </span>{" "}
                  {contact_info?.phone}
                </p>
                <p className="flex">
                  {" "}
                  <InboxIcon className="h-6 text-blue-400 inline-flex" />
                  <span className="font-semibold pl-2"> Email: </span>{" "}
                  {contact_info?.email}
                </p>
                <p className="flex">
                  <MapPinIcon className="h-6 text-blue-400 inline-flex" />
                  <span className="font-semibold pl-2"> Address: </span>{" "}
                  {contact_info?.address}
                </p>
              </div>
            </div>
            <button className="m-4 block">
              <Link
                onClick={() => handleAddToDB(id)}
                className="btn-primary block"
              >
                Apply Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
