import React from "react";

const Category = ({ category }) => {
  const { title, job_available, social_url } = category;
  return (
    <div className="bg-[#F9F9FF] p-6 flex flex-col justify-center items-center space-y-4 rounded-md">
      <img className="h-12 w-12" src={social_url} alt="" />
      <h3 className="font-semibold">{title}</h3>
      <p>{job_available} Jobs Available</p>
    </div>
  );
};

export default Category;
