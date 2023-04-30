import sendRequest from './send-request';

const BASE_URL = '/api/alljobs';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}