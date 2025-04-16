import axios from 'axios';

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
};

//postPay
export const postPayFromData = (endpoint, formData) => {
  return axios.post(`${API_BASE_URL}/${endpoint}/vnpay-return`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

//put
export const updateFormData = (endpoint, id, formData) => {
  return axios.put(`${API_BASE_URL}/${endpoint}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//getById
export const fetchDataById = (endpoint, id) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${id}`);
};

//getByIdTypeAndIdStadium

//putEnableField
export const updateEnableField = (endpoint, id) => {
  return axios.put(`${API_BASE_URL}/${endpoint}/${id}/enable`);
};

//getFieldByIdTypeAndIdStadium
export const fetchDataByIdTypeAndIdStadium = (endpoint, idType, idStadium) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idType}/${idStadium}`);
};

//getFieldByIdType11AndIdStadium
export const fetchDataByIdType11AndIdStadium = (
  endpoint,
  idType,
  idStadium
) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idType}/${idStadium}/Type11`);
};

//updateRoleUser
export const updateRoleUser = (endpoint, id) => {
  return axios.put(`${API_BASE_URL}/${endpoint}/${id}/role`);
};

//getTimeByIdFieldAndDay
export const fetchDataByIdFieldAndDay = (endpoint, idField, day) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idField}/${day}`);
};
