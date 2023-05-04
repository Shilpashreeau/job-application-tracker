// import axios from "axios";
import React, { useState } from "react";
import { updateJob } from "../utilities/all-jobs-api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const NewJob = ({ job, deleteFunc }) => {
  const [isRejected, setIsRejected] = useState(job.status);
  const [isLoading, setIsLoading] = useState(false);
  const [checkbox,setCheckbox]=useState(true);
const [updatedData,setUpdatedData]=useState([]);
  console.log(job);

  //* For update
  // const handleCheckboxClick = () => {
  // try {
  // setIsLoading(true);
  //   await axios.put(`/api/jobs/${job._id}`, {
  // status: !isRejected,
  //   });
  // setIsRejected(!isRejected);
  //   toast.success("Job Updated Successfully");
  // } catch (error) {
  //   console.log(error);
  // } finally {
  // setIsLoading(false);

  const handleCheckboxClick = (e) => {
    setIsRejected(e.target.value);
    // setCheckbox(true);
    console.log(checkbox);
    // setUpdatedData([...])
  };

  async function updateFunc(id) {
    const response = await updateJob(id);
    console.log(response);
    // setJobs(jobs);
  }
  return (
    <div className="newjob">
      <table className="table">
        <thead>
          <tr>
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
                  onClick={() => updateFunc(job._id)}
                  type="checkbox"
                  checked={isRejected}
                  readOnly
                  tabIndex={-1}
                  // disabled={isLoading}
                />
              </div>
            </th>
            <th scope="col">
              {isRejected || !checkbox ? "Rejected" : "Accepted for next step"}
            </th>
            <th>
              <button
                onClick={() => {
                  deleteFunc(job._id);
                }}
              >
                {" "}
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
