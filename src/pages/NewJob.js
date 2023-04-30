import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

import moment from 'moment';
import { Link } from "react-router-dom";

const TaskItem = ({ task, deleteTask }) => {
  const [iscompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxClick = async() => {
  try {
  setIsLoading(true);
  await axios.put(`/api/task/${task._id}`,{
    completed: !iscompleted,
  })
  setIsCompleted(!iscompleted);
  toast.success("Task Upadated Successfully");  
  } catch (error) {
    console.log(error)
  }
  finally{
    setIsLoading(false)
  }
  };

  return (
    <tr className={classes.task_item}>
      <td className={classes.task_name}>
        <div
          className={classes.checkbox}
          role='checkbox'
          aria-checked
          onChange={handleCheckboxClick}
          disabled = {isLoading}
          >
          <input
            type='checkbox'
            checked={iscompleted}
            readOnly
            tabIndex={-1}
            disabled={isLoading}
          />
        </div>
        <p>{task.title}</p>
        <Link to="/edittask">Edit</Link>
      </td>
      <td>{iscompleted ? "complete" : "Incompleted"}</td>
      <td>{moment(task.createdAt).format('MMM Do YY')}</td>
      <td>
        <button
          type='button'
          className={classes.deleteBtn}
          onClick={() => deleteTask(task._id)}
          /*We've to call this delete function in Tasklist because we want to updated state also while deleting */
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;