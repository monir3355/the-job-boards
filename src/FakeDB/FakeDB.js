const applyToDB = (id) => {
  let appliedjob = [];
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedjob = JSON.parse(storedJobs);
  }
  appliedjob.push(id);
  localStorage.setItem("applied-jobs", JSON.stringify(appliedjob));
};

const getApplyJob = () => {
  let appliedjob = [];
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedjob = JSON.parse(storedJobs);
  }
  return appliedjob;
};

export { applyToDB, getApplyJob };
