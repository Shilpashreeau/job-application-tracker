import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

// import { useParams } from "react-router-dom";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// const NewJob = ({ job, deleteJob }) => {
const NewJob = ({ job }) => {
  const [isRejected, setIsRejected] = useState(job.status);
  const [isLoading, setIsLoading] = useState(false);
  // const { id } = useParams();

  console.log(job);

  //* For update
  const handleCheckboxClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/api/jobs/${job._id}`, {
        status: !isRejected,
      });
      setIsRejected(!isRejected);
      toast.success("Job Updated Successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //* for delete
  // const deleteJob = async (_id) => {
  //   try {
  //     return await axios.delete(`/api/jobs/${job._id}`);
  //   } catch (error) {
  //     console.log("error calling api", error);
  //   }
  // };
  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      toast.success("Job successfully deleted");
      /*after successfully delted task we need remove from our taskList into our states so for that we need filter which says accept delete all thing properly run go @w3school and explore filter */
      // setTaskList(taskList.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // const handleDelete = async (id) => {
  //   await deleteJob(id);
  // };

  return (
    <div className="newjob">
      {/* <table class="table">
      <thead>
        <tr className="table-dark">
          <th >Company Name</th>
          <th >Position</th>
          <th >Job Source</th>
          <th >Applied On</th>
          <th >Status</th>
          <th ></th>
        </tr>
      </thead> */}

      {/* <TableHeader /> */}

      <table class="table">
        <thead>
          <tr>
            {/* <th scope="row">{job._id + 1}</th> */}
            <th scope="col">{job.companyName}</th>
            <th scope="col">{job.position}</th>
            <th scope="col">{job.source}</th>
            <th scope="col">{job.appliedOn}</th>
            <th scope="col">
              <div
                role="checkbox"
                aria-checked
                onChange={handleCheckboxClick}
                disabled={isLoading}
              >
                <input
                  type="checkbox"
                  checked={isRejected}
                  readOnly
                  tabIndex={-1}
                  disabled={isLoading}
                />
              </div>
            </th>
            <th scope="col">
              {isRejected ? "rejected" : "Accepted for next step"}
            </th>{" "}
            <th>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => deleteJob(job._id)}
              >
                <DeleteOutlineIcon />
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default NewJob;
