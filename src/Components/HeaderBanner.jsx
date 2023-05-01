import React from "react";
import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (
    <div className="bg-[#F9F9FF] relative">
      <div className="container mx-auto pt-4 flex md:flex-row flex-col-reverse gap-6">
        <div className="flex justify-center items-center md:px-0 px-4">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-semibold leading-10">
              One Step <br /> Closer To Your <br /><span className="text-[#818dfe]">Dream Job</span>
            </h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="py-3">
              <Link className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
