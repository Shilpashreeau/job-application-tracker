// import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { updateJob } from "../utilities/all-jobs-api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const NewJob = ({ job, deleteFunc,updateFunc}) => {
  const [isRejected, setIsRejected] = useState(job.jobStatus);
  const [isLoading, setIsLoading] = useState(false);
  const [checkbox,setCheckbox]=useState(true);
const [updatedData,setUpdatedData]=useState([]);
  console.log(job);
const navigate=useNavigate();
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
    updateFunc(job._id);
    navigate(0);
    // setUpdatedData([...])
  };

  
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
                  checked={job.jobStatus}
                  readOnly
                  tabIndex={-1}
                  // disabled={isLoading}
                />
              </div>
            </th>
            <th scope="col">
              {/* {isRejected || !checkbox ? "Rejected" : "Accepted for next step"} */}
              {job.jobStatus ? "Accepted for next step":"Rejected" }
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
