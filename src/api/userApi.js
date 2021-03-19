import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL ;
export function getUsers(fields,browse) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ SearchText: fields.SearchText, findURL: fields.FindURL, searchEngineTypes: browse  })
  };
  debugger
  const url = baseUrl + 'api/SearchEngine'
  return fetch(url, requestOptions)
    .then(handleResponse)
    .catch(handleError)
  
}
