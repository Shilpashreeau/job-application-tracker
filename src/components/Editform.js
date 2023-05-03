import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";



const Editform = () => {
  // const navigate = useNavigate();
  const [company, setCompany] = useState({
    companyName: '',
    status:''
  })


  useEffect(()=>{
  (
    async ()=>{
      try {
        const {data} = await axios.get("/api/jobs/myjob");
        setCompany(data);
        console.log(data)
        }catch (error) {
          console.log(error)  
        }
    }
  )()
  },[])

  return (
    <div>
      <h1>
        {/* <Link to='/'>Back</Link> */}
      </h1>
      <h1>Edit Page</h1>
      <form >
        <label htmlFor='title'>
          companyName
          <input
            type='text'
            placeholder='required job'
            name='companyName'
            required
            value={company.companyName}
          />
        </label>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default Editform;