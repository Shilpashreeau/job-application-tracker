import sendRequest from './send-request';
const BASE_URL = '/api/orders';
  // Return all paid orders for the logged in user
  export function getOrderHistory() {
    return sendRequest(`${BASE_URL}/history`);
  }
   // Add an item to the cart
   export function addItemToCart(itemId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
  }