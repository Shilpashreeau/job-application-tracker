import sendRequest from './send-request';

  const BASE_URL = '/api/newjob';

  // Retrieve a form for the logged in user
  export function getForm() {
    return sendRequest(`${BASE_URL}/form`);
  }

  // Add a job to the form
  export function addJobToForm(formId) {
    // Just send formId for best security 
    return sendRequest(`${BASE_URL}/form/jobs/${formId}`, 'POST');
  }

  // Update the item's qty in the cart
  // Will add the item to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  // export function setItemQtyInCart(itemId, newQty) {
  //   return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
  // }

  // Updates the order's (cart's) isPaid property to true
  export function checkout() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/form/checkout`, 'POST');
  }

  // Return jobs added for the logged in user
  export function getAddedJob() {
    return sendRequest(`${BASE_URL}/history`);
  }