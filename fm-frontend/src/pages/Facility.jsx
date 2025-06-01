import { useState, useEffect } from 'react';
import FacilityItem from '../component/FacilityItem';
import FacilityModal from '../component/FacilityModal';
import CompleteModal from '../component/CompleteModal';
import SellOffModal from '../component/SellOffModal';
import AddReport from '../component/AddReport';
import 'react-toastify/dist/ReactToastify.css';
import { fetchDataById } from '../API/Api';
import ModalEditFacility from '../modal/ModalEditFacility';
import ModalRemoveFacility from '../modal/ModalRemoveFacility';
import ModalDetailReport from '../modal/ModalDetailReport';
import ModalDetailRepair from '../modal/ModalDetailRepair';
import ModalDetailSellOff from '../modal/ModalDetailSellOff';
import ModalDetailFacility from '../modal/ModalDetailFacility';
import ModalAddBillFacility from '../modal/ModalAddBillFacility';
import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';

function Facility() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Facility'));
  }, [dispatch]);
  const { selectedStadium } = useOutletContext();
  const [idStadium, setIdStadium] = useState('');
  const [listFacility, setListFacility] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [facilityData, setFacilityData] = useState('');
  const [listReportDamaged, setListReportDamaged] = useState([]);
  const [selectedReport, setSelectedReport] = useState('');
  const [listReportRepair, setListReportRepair] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState('');
  const [listSellOff, setListSellOff] = useState([]);
  // Hàm toggle menu
  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

  //lấy danh sách report damaged
  useEffect(() => {
    if (idStadium) {
      fetchDataById('reportfacility', idStadium)
        .then((respone) => {
          setListReportDamaged(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, isRefresh]);

  //lấy danh sách sell off theo idStadium
  useEffect(() => {
    if (idStadium) {
      fetchDataById('selloff', idStadium)
        .then((respone) => {
          setListSellOff(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, isRefresh]);

  //lấy facility theo idStadium
  useEffect(() => {
    if (idStadium) {
      fetchDataById('facility', idStadium)
        .then((respone) => {
          setListFacility(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, isRefresh]);

  //lấy reportRepair theo idStadium
  useEffect(() => {
    if (idStadium) {
      fetchDataById('reportrepair', idStadium)
        .then((respone) => {
          setListReportRepair(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, isRefresh]);
  //lọc theo idFacility
  const filteredRepair = listReportRepair.filter((report) => {
    const matchReport = selectedFacility
      ? report.idFacility === Number(selectedFacility)
      : true;
    return matchReport;
  });

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="facility-header">
              <div className="row align-items-center">
                <div className="col"></div>
                <div className="col-auto">
                  <button
                    className="btn bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                    data-bs-toggle="modal"
                    data-bs-target="#facilitymodal"
                    style={{
                      width: '40px',
                      height: '40px',
                      padding: '0',
                    }} // Điều chỉnh kích thước nút
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="row d-flex flex-nowrap overflow-auto">
              {selectedStadium ? (
                listFacility.map((f, index) => (
                  <FacilityItem
                    key={index}
                    facility={f}
                    setFacilityData={setFacilityData}
                  />
                ))
              ) : (
                <p className="no-data-message">No data available</p> // Hiển thị nếu không chọn sân
              )}
            </div>
            <div class="row justify-content-center">
              <div class="card">
                <div class="card-body pt-0">
                  <ul class="nav nav-pills nav-justified" role="tablist">
                    <li class="nav-item waves-effect waves-light">
                      <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#home-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Report
                      </a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                      <a
                        class="nav-link"
                        data-bs-toggle="tab"
                        href="#profile-1"
                        role="tab"
                        aria-selected="false"
                      >
                        Repair
                      </a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                      <a
                        class="nav-link"
                        data-bs-toggle="tab"
                        href="#profile-2"
                        role="tab"
                        aria-selected="false"
                      >
                        Sell-off
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    {/* report */}
                    <div
                      class="tab-pane p-3 active"
                      id="home-1"
                      role="tabpanel"
                    >
                      <div className="row align-items-center">
                        <div className="row align-items-center mb-3">
                          <div className="col"></div>
                          <div className="col-auto">
                            <button
                              className="btn bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                              data-bs-toggle="modal"
                              data-bs-target="#addreport"
                              style={{
                                width: '40px',
                                height: '40px',
                                padding: '0',
                              }} // Điều chỉnh kích thước nút
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                        <table class="table table-bordered mb-0 table-centered text-center">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Position</th>
                              <th>Quantity</th>
                              <th>Status</th>
                              <th class="text-end">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listReportDamaged.map((report, index) => (
                              <tr key={index}>
                                <td>{report.nameFacility}</td>
                                <td>{report.day}</td>
                                <td>{report.nameField}</td>
                                <td>{report.quantity}</td>
                                <td>
                                  <span class="badge bg-danger">
                                    {report.nameStatus}
                                  </span>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="dropdown-toggle arrow-none"
                                      id="dLabel11"
                                      data-bs-toggle="dropdown"
                                      href="#"
                                      role="button"
                                      aria-haspopup="false"
                                      aria-expanded="false"
                                    >
                                      <i className="las la-ellipsis-v fs-20 text-muted"></i>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="dLabel11"
                                    >
                                      <button
                                        className="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#compeletemodal"
                                        onClick={() =>
                                          setSelectedReport(report)
                                        }
                                      >
                                        <i className="fas fa-tools fa-fw me-2 text-success"></i>
                                        Repair
                                      </button>
                                      <button
                                        className="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#selloffmodal"
                                        onClick={() =>
                                          setSelectedReport(report)
                                        }
                                      >
                                        <i className="fas fa-dollar-sign fa-fw me-2 text-warning"></i>
                                        Sell-off
                                      </button>
                                      <button
                                        className="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#detailreport" // <- bạn nên tạo modal này
                                        onClick={() =>
                                          setSelectedReport(report)
                                        }
                                      >
                                        <i className="fas fa-file-alt fa-fw me-2 text-info"></i>
                                        Detail
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* repair */}
                    <div class="tab-pane p-3" id="profile-1" role="tabpanel">
                      <div className="col-sm-2 ms-auto mb-4">
                        <select
                          className="form-select form-select-sm"
                          value={selectedFacility}
                          onChange={(e) => setSelectedFacility(e.target.value)}
                        >
                          <option value="">...</option>
                          {listFacility.map((item, index) => (
                            <option key={index} value={item.idFacility}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <table class="table table-bordered mb-0 table-centered text-center">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Position</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th class="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredRepair.map((report, index) => (
                            <tr key={index}>
                              <td>{report.nameFacility}</td>
                              <td>{report.day}</td>
                              <td>{report.nameField}</td>
                              <td>{report.quantity}</td>
                              <td>
                                {Number(report.price).toLocaleString()}
                                &nbsp;VND
                              </td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-success btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#detailrepair"
                                  onClick={() => setSelectedReport(report)}
                                >
                                  Detail
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* sell-off */}
                    <div class="tab-pane p-3" id="profile-2" role="tabpanel">
                      <table class="table table-bordered mb-0 table-centered text-center">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th class="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listSellOff.map((selloff, index) => (
                            <tr key={index}>
                              <td>{selloff.nameFacility}</td>
                              <td>{selloff.day}</td>
                              <td>{selloff.nameField}</td>
                              <td>{selloff.quantity}</td>
                              <td>
                                <span class="badge bg-warning">Sell Off</span>
                              </td>
                              <td class="text-end">
                                {' '}
                                <button
                                  type="button"
                                  class="btn btn-success btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#detailselloff"
                                  onClick={() => setSelectedReport(selloff)}
                                >
                                  Detail
                                </button>
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
      </div>
      <ModalRemoveFacility
        facilityData={facilityData}
        setIsRefresh={setIsRefresh}
      />
      <ModalAddBillFacility
        facilityData={facilityData}
        setIsRefresh={setIsRefresh}
      />
      <FacilityModal
        selectedStadium={selectedStadium}
        setIsRefresh={setIsRefresh}
      />
      <ModalEditFacility
        facilityData={facilityData}
        setIsRefresh={setIsRefresh}
      />
      <CompleteModal
        selectedReport={selectedReport}
        setIsRefresh={setIsRefresh}
      />
      <SellOffModal
        selectedReport={selectedReport}
        setIsRefresh={setIsRefresh}
      />
      <AddReport
        selectedStadium={selectedStadium}
        setIsRefresh={setIsRefresh}
        isRefresh={isRefresh}
      />
      <ModalDetailFacility facilityData={facilityData} isRefresh={isRefresh} />
      <ModalDetailReport selectedReport={selectedReport} />
      <ModalDetailRepair selectedReport={selectedReport} />
      <ModalDetailSellOff selectedReport={selectedReport} />
    </>
  );
}

export default Facility;
