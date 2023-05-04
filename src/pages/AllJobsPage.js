import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import axios from "axios";
import NewJob from "./NewJob";
import { deleteJob, updateJob } from "../utilities/all-jobs-api";

const AllJobsPage = ({ user, setUser }) => {
  const [jobs, setJobs] = useState([]);
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [position, setPosition] = useState("");
  const [status,setStatus]=useState(false);
  const [isAddingNew, setisAddingNew] = useState(false);

  /*Whenever we are adding new data we'll make a true,when we'll close the data we'll make false above one e.g */
  const [newJob, setNewJob] = useState("");

  //* for getting all the jobs
  const getJobs = async () => {
    try {
      const jobs = await axios.get("/api/jobs");
      console.log(jobs.data);
      setJobs(
        jobs.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  /*Proccess of adding New job while clicking */
  // path: 1)addNewJob create function => 2)create UI Part Below The Add new Button and call this addNewJob on submit  =>3) whenever we click add New btn it will show the form so for that : we need to call event Listners on one addNewbtn and call here below to make this true use !isAddingNew true for flip =>4)come back to our addNewJob function and work on :: check more than 0 or not if it's show msg if it's not go further and call backend

  const addNewBtn = () => {
    /*To show the form we need to setisAddingNew true only */
    // setisAddingNew(true)
    setisAddingNew(!isAddingNew);
  };

  //* to add new job
  const addNewJob = async (e) => {
    e.preventDefault();
    if (newJob.length <= 0) {
      toast.error("Job is empty");
      return;
    }
    try {
      const job = await axios.post("/api/jobs", {
        companyName: newJob,
        source: source,
        appliedOn: date,
        position: position,
        status:status
      });
      console.log(job.data);
      toast.success("New job Created");
      setisAddingNew(false); //which will close this form
      setNewJob(""); //setNewJob will be empty which is initially value;

      // after successfully created job i will add this into setNewJob for updating ...jobs(it spread all the jobs which is already there) befoure this I should add my newJob list in form of object {...data}
      setJobs([{ ...job.data }, ...jobs]);
      
      // navigate("/jobs");
      console.log(jobs);
    } catch (error) {
      console.log(error);
    }
  };
  //* to delete a job
  async function deleteFunc(id) {
    const response = await deleteJob(id);
    console.log(response);
    setJobs(jobs.filter((job) => job._id !== id));
    // window.location.reload();
  }
  //* to update a job
  async function updateFunc(id) {
    const response = await updateJob(id);
    console.log(response);
    setJobs(jobs);
  }

  return (
    <div>
      <div className="addbutton">
        <button type="button" onClick={addNewBtn}>
          Add New Job
        </button>
      </div>
      {/*
      1)1st Query if the value isAddingNew is true I'll actually show the form. 
      2)2nd Query Whenever we will change the input value It will also change the value of newJob value */}
      {isAddingNew && (
        <form onSubmit={addNewJob}>
          <input
            type="text"
            // value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
            placeholder="Company name Required"
          />
          <input
            type="text"
            // value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position applied for"
          />
          <input
            type="text"
            // value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="Source where job is applied"
          />
          <input
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
            name="Applied on"
          />
          
          <button type="submit">Add</button>
        </form>
      )}

      {jobs?.length > 0 ? (
        <>
          {jobs?.map((job) => (
            <NewJob key={job._id} job={job} deleteFunc={deleteFunc} />
          ))}
        </>
      ) : (
        "No jobs found, Create job"
      )}
    </div>
  );
};

export default AllJobsPage;
