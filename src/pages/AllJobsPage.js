import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";

import NewJob from "./NewJob";
const AllJobsPage = ({ user, setUser }) => {
  const [jobs, setJobs] = useState([]);
  const [source, setSource] = useState([]);
  const [date, setDate] = useState([]);
  const [position, setPosition] = useState([]);
  const [isAddingNew, setisAddingNew] = useState(false);

  /*Whenever we are adding new data we'll make a true,when we'll close the data we'll make false above one e.g */
  const [newJob, setNewJob] = useState("");

  //   return (
  //     <>
  //     <div>
  //       <NewJob  user={user} setUser={setUser} />
  //       <ul>
  //         {jobs.map((job, index) => (
  //           <li key={index}>{job}</li>
  //         ))}
  //       </ul>
  //     </div>

  //     <table class="table">
  //                         <thead>
  //                             <tr className="table-dark">
  //                                 <th scope="col">Company Name</th>
  //                                 <th scope="col">Position</th>
  //                                 <th scope="col">Job Source</th>
  //                                 <th scope="col">Applied On</th>
  //                                 <th scope="col">Status</th>
  //                                 <th scope="col"></th>
  //                             </tr>
  //                         </thead>
  //                         {/* <tbody>

  //                             {
  //                                 getuserdata.map((element, id) => {
  //                                     return (
  //                                         <>
  //                                             <tr>
  //                                                 <th scope="row">{id + 1}</th>
  //                                                 <td>{element.company}</td>
  //                                                 <td>{element.position}</td>
  //                                                 <td>{element.source}</td>
  //                                                 <td>{element.date}</td>
  //                                                 <td>{element.status}</td>

  //                                                 <td className="d-flex justify-content-between">
  //                                                     <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
  //                                                     <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
  //                                                     <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
  //                                                 </td>
  //                                             </tr>
  //                                         </>
  //                                     )
  //                                 })
  //                             }
  //                         </tbody> */}
  //                     </table>

  //                     </>
  //   );
  // }
  const getJobs = async () => {
    try {
      const { job } = await axios.get("/api/job/myjob");
      setJobs(
        job.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  /*Proccess of adding New task while clicking */
  // path: 1)addNewTask create function => 2)create UI Part Below The Add new Button and call this addNewTask on submit curly brases =>3) whenever we click add New btn it will show the form so for that : we need to call event Listners on one addNewbtn and call here belew to make this true use !isAddingNew true for flip =>4)come back to our addNewTask function and work on :: check more than 0 or not if it's show msg if it's not go further and call backend

  const addNewBtn = () => {
    /*To show the form we need to setisAddingNew true only */
    // setisAddingNew(true)
    setisAddingNew(!isAddingNew);
  };

  const addNewJob = async (e) => {
    e.preventDefault();
    if (newJob.length <= 0) {
      toast.error("Job is empty");
      return;
    }
    try {
      const { job } = await axios.post("/api/job", {
        companyName: newJob,
        source: source,
        appliedOn: date,
        position: position,
      });
      toast.success("New job Created");
      setisAddingNew(false); //which 'll habitually close this form
      setNewJob(""); //setNewJob will be empty which is initially value;

      // after successfully created job i will add this into setNewJob for updating ...jobs(it spread all the jobs which is already there) befoure this I should add my newJob list in form of obje {...data}
      setJobs([{ ...job }, ...jobs]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/job/${id}`);
      toast.success("Job successfully deleted");
      /*after successfully deleted job we need remove from our jobs into our states so for that we need filter which says accept delete all thing properly run go @w3school and explore filter */
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <button type="button" onClick={addNewBtn}>
          Add New
        </button>
      </div>
      {/*
      1)1st Querry if the valuse isAddingNew is true I'll actually show the form. 
      2)2nd Querry Whenever we will change the input value It will also change the value of newTask value */}
      {isAddingNew && (
        <form onSubmit={addNewJob}>
          <input
            type="text"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
            placeholder="Company name Required"
          />
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position applied for"
          />
          <input
            type="text"
            value={source}
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

      {jobs.length > 0 ? (
        <table>
          <tbody>
            {jobs.map((job) => (
              <NewJob key={job._id} job={job} deleteJob={deleteJob} />
            ))}
          </tbody>
        </table>
      ) : (
        "No jobs found, Create job"
      )}
    </div>
  );
};

export default AllJobsPage;
