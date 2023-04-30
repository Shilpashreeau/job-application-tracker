import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

// import moment from 'moment';
import { Link } from "react-router-dom";

const NewJob = ({ job, deleteJob }) => {
  const [isRejected, setIsRejected] = useState(job.status);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxClick = async() => {
  try {
  setIsLoading(true);
  await axios.put(`/api/job/${job._id}`,{
    status: !isRejected,
  })
  setIsRejected(!isRejected);
  toast.success("Job Updated Successfully");  
  } catch (error) {
    console.log(error)
  }
  finally{
    setIsLoading(false)
  }
  };

  return (
    <tr>
      <td >
        <div
          
          role='checkbox'
          aria-checked
          onChange={handleCheckboxClick}
          disabled = {isLoading}
          >
          <input
            type='checkbox'
            checked={isRejected}
            readOnly
            tabIndex={-1}
            disabled={isLoading}
          />
        </div>
        <p>{job.companyName}</p>
        <Link to="/editJob">Edit</Link>
      </td>
      <td>{isRejected ? "rejected" : "Accepted for next step"}</td>
      <td>{job.appliedOn}</td>
      <td>
        <button
          type='button'
          
          onClick={() => deleteJob(job._id)}
          /*We've to call this delete function in Tasklist because we want to updated state also while deleting */
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default NewJob;