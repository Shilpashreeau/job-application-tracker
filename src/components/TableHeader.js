function TableHeader({user,setUser}){

return(

    <>
    <table class="table">
      <thead>
        <tr className="table-dark">
          <th >Company Name</th>
          <th >Position</th>
          <th >Job Source</th>
          <th >Applied On</th>
          <th >Status</th>
          <th ></th>
        </tr>
      </thead>
      </table>
    
    </>
)


}

export default TableHeader;