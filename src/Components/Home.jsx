import React, { useState } from "react";
import HeaderBanner from "./HeaderBanner";
import { Link, useLoaderData } from "react-router-dom";
import Category from "./Category";
import Jobs from "./Jobs";

const Home = () => {
  const [allJobs, setAllJobs] = useState(false);
  const jobsD = useLoaderData();
  const { jobs, category } = jobsD;

  return (
    <div>
      <HeaderBanner />
      {/* Job Category List Sections */}
      <section className="py-20">
        <div className="text-center pb-6 space-y-4 md:px-0 px-4">
          <h3 className="text-4xl font-semibold">Job Category List</h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:px-0 px-4">
          {category.map((ctg) => (
            <Category key={ctg.id} category={ctg} />
          ))}
        </div>
      </section>
      {/* Featured Jobs sections */}
      <section className="pb-20">
        <div className="text-center pb-6 space-y-4 md:px-0 px-4">
          <h3 className="text-4xl font-semibold">Featured Jobs</h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:px-0 px-4">
          {jobs.slice(0, allJobs ? jobs.length : 4).map((job) => (
            <Jobs key={job.id} job={job}></Jobs>
          ))}
        </div>

        {!allJobs && (
          <div className="py-6 text-center">
            <Link
              onClick={() => setAllJobs(!allJobs)}
              className="btn-primary text-center"
            >
              See All Jobs
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
