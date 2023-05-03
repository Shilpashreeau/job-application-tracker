import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
export function deleteJob(id){
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')}

  export function updateJob(id){
    return sendRequest(`${BASE_URL}/${id}`, 'PUT')}