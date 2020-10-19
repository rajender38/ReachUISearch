import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL ;
export function getUsers(fields,browse,isStaticWebPages) {
  debugger
  const url = baseUrl + 'api/SearchEngine?searchText=' + fields.SearchText + '&findURL=' + fields.FindURL + '&searchEngineTypes='+browse+'&staticPages='+isStaticWebPages.checked;
  return fetch(url).then(handleResponse).catch(handleError);
  
}
