import { useState, useEffect } from 'react';
import FormService from '../component/FormService';
import ServiceItem from '../component/ServiceItem';
import {
  fetchData,
  fetchDataById,
  fetchDataByIdStadiumAndIdTypeAndEnable,
  fetchServiceOrderAdmin,
  fetchServiceOrderUser,
} from '../API/Api';
import ModalRemoveServices from '../modal/ModalRemoveServices';
import ModalUpdateServices from '../modal/ModalUpdateServices';
import 'react-toastify/dist/ReactToastify.css';
import ModalDeleteServiceOrder from '../modal/ModalDeleteServiceOrder';
import ModalEditServiceOrder from '../modal/ModalEditServiceOrder';
import ModalDetailService from '../modal/ModalDetailService';
import ModalAddBillService from '../modal/ModalAddBillService';
import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';
import Cookies from 'js-cookie';

function Service() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Service'));
  }, [dispatch]);
  const { selectedStadium } = useOutletContext();
  const [idStadium, setIdStadium] = useState('');
  const [listServices, setListServices] = useState([]);
  const [listTime, setListTime] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [listServiceOrder, setListServiceOrder] = useState([]);
  const [servicesData, setServicesData] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [listType, setListType] = useState([]);
  const [listField, setListField] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [listServiceOrder2, setListServiceOrder2] = useState([]);
  const [selectedServiceOrder, setSelectedServiceOrder] = useState(null);
  const role = Cookies.get('role');
  const isAdmin = role === 'ADMIN';
  const idUser = Cookies.get('idUser');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
    setSelectedDate(formattedDate);
  }, []);

  // lấy timetime
  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // Hàm toggle menu

  useEffect(() => {
    if (selectedStadium && selectedStadium.idStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);
  //lấy field ra theo idStadium và idType
  useEffect(() => {
    if (idStadium && selectedType) {
      fetchDataByIdStadiumAndIdTypeAndEnable('field', idStadium, selectedType)
        .then((respone) => {
          setListField(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, selectedType]);
  //lấy Type ra
  useEffect(() => {
    fetchData('type')
      .then((respone) => {
        setListType(respone.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //lấy service theo idStadium
  useEffect(() => {
    if (idStadium) {
      fetchDataById('services', idStadium).then((respone) => {
        setListServices(respone.data.result);
      });
    }
  }, [idStadium, isRefresh]);

  //lấy serviceOrder theo idStadium và idType 7v7
  useEffect(() => {
    const fetchServiceOrder = async () => {
      if (idStadium) {
        try {
          const response = isAdmin
            ? await fetchServiceOrderAdmin('serviceOrder', 1, idStadium)
            : await fetchServiceOrderUser('serviceOrder', 1, idStadium, idUser);
          setListServiceOrder(response.data.result);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchServiceOrder();
  }, [idStadium, isRefresh, idUser, isAdmin]);

  //lấy serviceOder theo idStadium và idType 11v11
  useEffect(() => {
    const fetchServiceOrder2 = async () => {
      if (idStadium) {
        try {
          const respone = isAdmin
            ? await fetchServiceOrderAdmin('serviceOrder', 2, idStadium)
            : await fetchServiceOrderUser('serviceOrder', 2, idStadium, idUser);
          setListServiceOrder2(respone.data.result);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchServiceOrder2();
  }, [idStadium, isRefresh, idUser, isAdmin]);
  //lọc serviceOrder của sân 7 theo các điều kiện
  const filteredServiceOder = listServiceOrder.filter((serviceOrder) => {
    const matchTime = selectedTime ? serviceOrder.time === selectedTime : true;
    const matchDate = selectedDate ? serviceOrder.day === selectedDate : true;
    const matchField = selectedField
      ? serviceOrder.nameField === selectedField
      : true;
    return matchDate && matchTime && matchField;
  });

  //lọc serviceOrder của sân 11 theo các điều kiện
  const filteredServiceOder2 = listServiceOrder2.filter((serviceOrder) => {
    const matchTime = selectedTime ? serviceOrder.time === selectedTime : true;
    const matchDate = selectedDate ? serviceOrder.day === selectedDate : true;
    const matchField = selectedField
      ? serviceOrder.nameField === selectedField
      : true;
    return matchDate && matchTime && matchField;
  });
  return (
    <>
      <div className="service-header">
        {isAdmin && (
          <div className="row align-items-center">
            <div className="col">
              <h4 className="card-title"></h4>
            </div>
            <div className="col-auto">
              <button
                className="btn bg-primary text-white"
                data-bs-toggle="modal"
                data-bs-target="#addService"
              >
                <i className="fas fa-plus me-1"></i> Add Service
              </button>
            </div>
          </div>
        )}
      </div>
      <div class="row d-flex flex-nowrap overflow-auto">
        {selectedStadium ? (
          listServices.map((s, index) => (
            <ServiceItem
              key={index}
              service={s}
              setServicesData={setServicesData}
            />
          ))
        ) : (
          <p className="no-data-message">No data available</p> // Hiển thị nếu không chọn sân
        )}
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="clearfix">
            <div class="btn-group float-end ms-2">
              <input
                className="form-control form-control-sm"
                type="date"
                id="date-input"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <select
                className="form-select form-select-sm"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Time</option>
                {listTime.map((item, index) => (
                  <option key={item.idTime} value={item.time}>
                    {item.time}
                  </option>
                ))}
              </select>
              <select
                className="form-select form-select-sm"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <option value="">Field</option>
                {listField.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                className="form-select form-select-sm"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Type</option>
                {listType.map((item, index) => (
                  <option key={index} value={item.idType}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <ul class="nav nav-tabs my-4" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link fw-semibold active py-2"
                  data-bs-toggle="tab"
                  href="#documents"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fa-solid fa-futbol me-1"></i> 7vs7{' '}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fw-semibold py-2"
                  data-bs-toggle="tab"
                  href="#images"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-futbol me-11"></i> 11vs11{' '}
                </a>
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-body pt-0">
              <div class="tab-content">
                <div class="tab-pane active" id="documents" role="tabpanel">
                  <div class="table-responsive browser_users">
                    <table class="table mb-0">
                      <thead class="table-light text-center">
                        <tr>
                          <th class="border-top-0 ">Field</th>
                          <th class="border-top-0 ">Service</th>
                          <th class="border-top-0 ">Quantity</th>
                          <th class="border-top-0 ">Time</th>
                          <th class="border-top-0 ">Day</th>
                          <th class="border-top-0 ">Total Price</th>
                          <th class="border-top-0 ">Action</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        {filteredServiceOder.map((serviceOrder, index) => (
                          <tr key={index}>
                            <td>{serviceOrder.nameField}</td>
                            <td>{serviceOrder.nameService}</td>
                            <td>{serviceOrder.quantity}</td>
                            <td>{serviceOrder.time}</td>
                            <td>{serviceOrder.day}</td>
                            <td>
                              {Number(serviceOrder.totalPrice).toLocaleString()}
                              &nbsp;VND
                            </td>
                            <td>
                              <a href="#">
                                <i class="las la-download text-secondary fs-18"></i>
                              </a>
                              <a href="#">
                                <i
                                  class="las la-pen text-secondary fs-18"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editserviceorder"
                                  onClick={() => {
                                    setSelectedServiceOrder(serviceOrder);
                                    setIsRefresh((prev) => !prev);
                                  }}
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  class="las la-trash-alt text-secondary fs-18"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteservice"
                                  onClick={() => {
                                    setSelectedServiceOrder(serviceOrder);
                                  }}
                                ></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="tab-pane" id="images" role="tabpanel">
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <thead class="table-light text-center">
                        <tr>
                          <th class="border-top-0">Field</th>
                          <th class="border-top-0 ">Service</th>
                          <th class="border-top-0 ">Quantity</th>
                          <th class="border-top-0 ">Time</th>
                          <th class="border-top-0 ">Day</th>
                          <th class="border-top-0 ">Total Price</th>
                          <th class="border-top-0 ">Action</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        {filteredServiceOder2.map((serviceOrder, index) => (
                          <tr key={index}>
                            <td>{serviceOrder.nameField}</td>
                            <td>{serviceOrder.nameService}</td>
                            <td>{serviceOrder.quantity}</td>
                            <td>{serviceOrder.time}</td>
                            <td>{serviceOrder.day}</td>
                            <td>
                              {Number(serviceOrder.totalPrice).toLocaleString()}
                              &nbsp;VND
                            </td>
                            <td>
                              <a href="#">
                                <i class="las la-download text-secondary fs-18"></i>
                              </a>
                              <a href="#">
                                <i
                                  class="las la-pen text-secondary fs-18"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editserviceorder"
                                  onClick={() => {
                                    setSelectedServiceOrder(serviceOrder);
                                    setIsRefresh((prev) => !prev);
                                  }}
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  class="las la-trash-alt text-secondary fs-18"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteservice"
                                  onClick={() => {
                                    setSelectedServiceOrder(serviceOrder);
                                  }}
                                ></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormService
        selectedStadium={selectedStadium}
        setIsRefresh={setIsRefresh}
      />
      <ModalRemoveServices
        servicesData={servicesData}
        setIsRefresh={setIsRefresh}
      />
      <ModalUpdateServices
        servicesData={servicesData}
        setIsRefresh={setIsRefresh}
      />
      <ModalDeleteServiceOrder
        selectedServiceOrder={selectedServiceOrder}
        setIsRefresh={setIsRefresh}
      />
      <ModalEditServiceOrder
        selectedServiceOrder={selectedServiceOrder}
        setIsRefresh={setIsRefresh}
      />
      <ModalDetailService servicesData={servicesData} />
      <ModalAddBillService
        servicesData={servicesData}
        setIsRefresh={setIsRefresh}
      />
    </>
  );
}

export default Service;
