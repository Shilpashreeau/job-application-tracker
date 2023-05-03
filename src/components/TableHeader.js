function TableHeader({user,setUser}){

return(

    <>
    <table class="table">
      <thead class="thead-light">
        <tr className="table-dark">
          <th scope="col">Company Name</th>
          <th scope="col">Position</th>
          <th scope="col">Job Source</th>
          <th scope="col">Applied On</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      </table>
    
    </>
)


}

export default TableHeader;