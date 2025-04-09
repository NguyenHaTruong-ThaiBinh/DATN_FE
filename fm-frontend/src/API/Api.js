import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/manager';


//get
export const fetchData = (endpoint) => {
  return axios.get(`${API_BASE_URL}/${endpoint}`);
};

//post
export const postFormData = (endpoint, formData) => {
  return axios.post(`${API_BASE_URL}/${endpoint}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
//put
export const updateFormData = (endpoint, id, formData) => {
  return axios.put(`${API_BASE_URL}/${endpoint}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const fetchDataById = (endpoint, id) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${id}`);
};