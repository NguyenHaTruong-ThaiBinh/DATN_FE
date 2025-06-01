import axios from 'axios';
import axiosClient from './axiosClient';
const API_BASE_URL = 'http://localhost:8080/manager';

//get
export const fetchData = (endpoint) => {
  return axiosClient.get(`${endpoint}`);
};

//post
export const postFormData = (endpoint, formData) => {
  return axiosClient.post(`${endpoint}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//post
export const recvPwd = (endpoint, formData) => {
  return axios.post(`${API_BASE_URL}/${endpoint}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//savePrice
export const postPrice = (endpoint, formData) => {
  return axiosClient.post(`${endpoint}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//post
export const addService = (endpoint, formData) => {
  return axiosClient.post(`${endpoint}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//postPay
export const postPayFromData = (endpoint, formData) => {
  return axiosClient.post(`${endpoint}/vnpay-return`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

//Login
export const postLogin = (endpoint, formData) => {
  return axios.post(`${API_BASE_URL}/${endpoint}/login`, formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

//Logout
export const postLogout = (endpoint, formData) => {
  return axios.post(`${API_BASE_URL}/${endpoint}/logout`, formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

//put
export const updateFormData = (endpoint, id, formData) => {
  return axiosClient.put(`${endpoint}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updatePrice = (endpoint, id, formData) => {
  return axiosClient.put(`${endpoint}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//updateService
export const updateService = (endpoint, id, formData) => {
  return axiosClient.put(`${endpoint}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//updateEnableMatching
export const updateEnableByUser = (endpoint, id, formData) => {
  return axiosClient.put(`${endpoint}/${id}/enable/user`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const fetchDataById = (endpoint, id) => {
  return axiosClient.get(`${endpoint}/${id}`);
};

//putEnableField
export const updateEnableField = (endpoint, id) => {
  return axiosClient.put(`${endpoint}/${id}/enable`);
};

//putEnableField
export const updateEnableService = (endpoint, id) => {
  return axiosClient.put(`${endpoint}/${id}/enable`);
};

//getFieldByIdTypeAndIdStadium
export const fetchDataByIdTypeAndIdStadium = (endpoint, idType, idStadium) => {
  return axiosClient.get(`${endpoint}/${idType}/${idStadium}`);
};

//getFieldByIdType11AndIdStadium
export const fetchDataByIdType11AndIdStadium = (
  endpoint,
  idType,
  idStadium
) => {
  return axiosClient.get(`${endpoint}/${idType}/${idStadium}/Type11`);
};

//updateRoleUser
export const updateRoleUser = (endpoint, id) => {
  return axiosClient.put(`${endpoint}/${id}/role`);
};

//getTimeByIdFieldAndDay
export const fetchDataByIdFieldAndDay = (endpoint, idField, day) => {
  return axiosClient.get(`${endpoint}/${idField}/${day}`);
};

//getPriceTotalServiceMonthly
export const getTotalServiceMontly = (endpoint, idStadium) => {
  return axiosClient.get(`${endpoint}/${idStadium}/monthly`);
};
//getListInvoiceByDay
export const getListInvoiceByDay = (endpoint, idStadium, day) => {
  return axiosClient.get(`${endpoint}/${idStadium}/${day}/daily`);
};
//getTotalPriceInvoceByDay
export const getTotalPriceInvoiceByDay = (endpoint, idStadium, day) => {
  return axiosClient.get(`${endpoint}/${idStadium}/${day}`);
};

//getFieldByIdStadiumAndIdTypeAndEnable
export const fetchDataByIdStadiumAndIdTypeAndEnable = (
  endpoint,
  idStadium,
  idType
) => {
  return axiosClient.get(`${endpoint}/${idStadium}/${idType}/enable`);
};

//deleteServiceOrderByIdSerViceOrder
export const deleteServiceOrderByIdServiceOrder = (
  endpoint,
  idServiceOrder
) => {
  return axiosClient.delete(`${endpoint}/${idServiceOrder}`);
};

//getServiceByIdService
export const getServiceByIdService = (endpoint, idService) => {
  return axiosClient.get(`${endpoint}/${idService}/Service`);
};

//updateServiceOrderByIdServiceOrder
export const updateServiceOrderByIdServiceOrder = (
  endpoint,
  idServiceOrder,
  formData
) => {
  return axiosClient.put(`${endpoint}/${idServiceOrder}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//updateServiceOrderByIdServiceOrder
export const updateServiceOrderByIdServiceOrderByAdmin = (
  endpoint,
  idServiceOrder,
  formData
) => {
  return axiosClient.put(`${endpoint}/${idServiceOrder}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
//getBookingByIdField
export const getBookingByIdField = (endpoint, idField) => {
  return axiosClient.get(`${endpoint}/${idField}/Field`);
};

//get
export const getDataByIdStadium = (endpoint, idStadium, prefix) => {
  return axiosClient.get(`${endpoint}/${idStadium}/${prefix}`);
};

//update Message
export const updateMessageRead = (endpoint, idMessage) => {
  return axiosClient.put(`${endpoint}/${idMessage}`);
};

//getMatchByIdStadium
export const getMatchByIdStadium = (endpoint, idStadium) => {
  return axiosClient.get(`${endpoint}/${idStadium}/match`);
};

//getMatchByIdStadium
export const getMatchByIdStadiumAndIdUser = (endpoint, idStadium, idUser) => {
  return axiosClient.get(`${endpoint}/${idStadium}/${idUser}/match`);
};

//cancelMatchByUser
export const cancelMatch = (endpoint, idMatch, formData) => {
  return axiosClient.put(`${endpoint}/${idMatch}/cancelMatching`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//changePassword
export const changePassword = (endpoint, idUser, formData) => {
  return axiosClient.put(`${endpoint}/${idUser}/changePassword`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//getFieldEmpty
export const getFieldEmpty = (endpoint, idStadium, idTime, day) => {
  return axiosClient.get(`${endpoint}/${idStadium}/${idTime}/${day}`);
};

//getAllStadiumEnabel
export const getAllStadiumEnable = (endpoint) => {
  return axiosClient.get(`${endpoint}/allStadium`);
};

//updateStatusStadium
export const updateSatusStadium = (endpoint, idStadium) => {
  return axiosClient.put(`${endpoint}/${idStadium}/Status`);
};

//getBookingByIdStadium(ADMIN)
export const fetchBookingById = (endpoint, id) => {
  return axiosClient.get(`${endpoint}/${id}`);
};

//getBookingByIdStadium(User)
export const fetchDataByUser = (endpoint, idStadium, idUser) => {
  return axiosClient.get(`${endpoint}/${idStadium}/${idUser}`);
};

//getAllServiceOrderByAdmin
export const fetchServiceOrderAdmin = (endpoint, idType, idStadium) => {
  return axiosClient.get(`${endpoint}/${idType}/${idStadium}`);
};

//getServiceOrderByUser
export const fetchServiceOrderUser = (endpoint, idType, idStadium, idUser) => {
  return axiosClient.get(`${endpoint}/${idType}/${idStadium}/${idUser}`);
};

//getUserByAdmin
export const fetchDataUserByAdmin = (endpoint) => {
  return axiosClient.get(`${endpoint}`);
};

//putRemoveUser
export const removeUser = (endpoint, id) => {
  return axiosClient.put(`${endpoint}/${id}/enable`);
};

//getMatchByIdStadium
export const getRefundByIdStadium = (endpoint, idStadium) => {
  return axiosClient.get(`${endpoint}/${idStadium}/refund`);
};

//updateRoleUser
export const updateRefund = (endpoint, idBooking) => {
  return axiosClient.put(`${endpoint}/${idBooking}/refund`);
};