import axiosService from './../commons/Service/axiosService';
import { API_URL } from './../constants';
import qs from 'query-string';

//
const url = 'tasks';

// http://localhost:3000/tasks   METHOD: GET
export const getList = (params = {}) => {
   let queryParams = '';
   if(Object.keys(params).length > 0)
      queryParams = `?${qs.stringify(params)}`;
   return axiosService.get(`${API_URL}/${url}${queryParams}`);
}

// http://localhost:3000/tasks   METHOD: POST
export const addTask = data => {
   return axiosService.post(`${API_URL}/${url}`, data);
}
