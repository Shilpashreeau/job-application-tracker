import React, { useState } from "react";
import * as newjobapi from '../utilities/new-job-api';

function NewJob({onSub, user, setUser }) {
   
  const [todo, setTodo] = useState("");
  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.onSub(todo);
//     setTodo("");
//   };

//   const handleInputChange = (event) => {
//     setTodo(event.target.value);
//   };

 
  return (
    <>
    
     <h1>New Job Page</h1>;
    {/* <form onSubmit={handleSubmit}>
      <label>
        Add a new todo:
        {/* <input type="text" value={todo} onChange={handleInputChange} /> 
      </label>
      <button type="submit">Add</button>
    </form> */}
    </>
  );
}

export default NewJob;


  

  

 

  // Update the item's qty in the cart
  // Will add the item to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
//   export function setItemQtyInCart(itemId, newQty) {
//     return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
//   }

  // Updates the order's (cart's) isPaid property to true
//   export function checkout() {
//     // Changing data on the server, so make it a POST request
//     return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
//   }

 