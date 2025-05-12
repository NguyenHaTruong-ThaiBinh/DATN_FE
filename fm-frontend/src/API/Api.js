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

//updateEnableMatching
export const updateEnableByUser = (endpoint, id, formData) => {
  return axios.put(`${API_BASE_URL}/${endpoint}/${id}/enable/user`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//getById
export const fetchDataById = (endpoint, id) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${id}`);
};

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

//getPriceTotalServiceMonthly
export const getTotalServiceMontly = (endpoint, idStadium) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idStadium}/monthly`);
};
//getListInvoiceByDay
export const getListInvoiceByDay = (endpoint, idStadium, day) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idStadium}/${day}/daily`);
};
//getTotalPriceInvoceByDay
export const getTotalPriceInvoiceByDay = (endpoint, idStadium, day) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idStadium}/${day}`);
};

//getFieldByIdStadiumAndIdTypeAndEnable
export const fetchDataByIdStadiumAndIdTypeAndEnable = (
  endpoint,
  idStadium,
  idType
) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idStadium}/${idType}/enable`);
};

//deleteServiceOrderByIdSerViceOrder
export const deleteServiceOrderByIdServiceOrder = (
  endpoint,
  idServiceOrder
) => {
  return axios.delete(`${API_BASE_URL}/${endpoint}/${idServiceOrder}`);
};

//getServiceByIdService
export const getServiceByIdService = (endpoint, idService) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idService}/Service`);
};

//updateServiceOrderByIdServiceOrder
export const updateServiceOrderByIdServiceOrder = (
  endpoint,
  idServiceOrder,
  formData
) => {
  return axios.put(`${API_BASE_URL}/${endpoint}/${idServiceOrder}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
//getBookingByIdField
export const getBookingByIdField = (endpoint, idField) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idField}/Field`);
};

//get
export const getDataByIdStadium = (endpoint, idStadium, prefix) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idStadium}/${prefix}`);
};

//update Message
export const updateMessageRead = (endpoint, idMessage) => {
  return axios.put(`${API_BASE_URL}/${endpoint}/${idMessage}`);
};

//getMatchByIdStadium
export const getMatchByIdStadium = (endpoint, idStadium) => {
  return axios.get(`${API_BASE_URL}/${endpoint}/${idStadium}/match`);
};

//cancelMatchByUser
export const cancelMatch = (endpoint, idMatch, formData) => {
  return axios.put(
    `${API_BASE_URL}/${endpoint}/${idMatch}/cancelMatching`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

//changePassword
export const changePassword = (endpoint, idUser, formData) => {
  return axios.put(
    `${API_BASE_URL}/${endpoint}/${idUser}/changePassword`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};
