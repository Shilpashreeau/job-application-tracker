
import React, { useState } from "react";
import NewJob from "./NewJob";
function AllJobsPage({ user, setUser }) {

    const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
   setTodos([...todos, newTodo]);
  };

  return (
    <>
    <div>
      <NewJob onSub={addTodo} user={user} setUser={setUser} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  
    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Company Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Job Source</th>
                                <th scope="col">Applied On</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        {/* <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.company}</td>
                                                <td>{element.position}</td>
                                                <td>{element.source}</td>
                                                <td>{element.date}</td>
                                                <td>{element.status}</td>
                                                
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody> */}
                    </table>

                    </>
  );
}

export default AllJobsPage;
