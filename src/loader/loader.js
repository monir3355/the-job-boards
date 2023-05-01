const jobsDataFetch = async () => {
  const jobsData = await fetch('/jobs.json');
  const jobsD = await jobsData.json();
  return jobsD;
};
export { jobsDataFetch };
