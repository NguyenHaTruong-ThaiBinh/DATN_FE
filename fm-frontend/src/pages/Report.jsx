import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';
import {
  fetchDataById,
  getListInvoiceByDay,
  getRefundByIdStadium,
  getTotalPriceInvoiceByDay,
  getTotalServiceMontly,
  updateRefund,
} from '../API/Api';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';

function Report() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Report'));
  }, [dispatch]);
  const { selectedStadium } = useOutletContext();

  const [idStadium, setIdStadium] = useState('');
  const [listRevenue, setListRevenue] = useState([]);
  const [listServiceMonthly, setListServiceMonthly] = useState([]);
  const [listFacilityMonthly, setListFacilityMonthly] = useState([]);
  const [listSellOffMonthly, setListSellOffMonthly] = useState([]);
  const [listRepairMonthly, setListRepairMonthly] = useState([]);
  const [listInvoice, setListInvoice] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [day, setDay] = useState('');
  const [listRefund, setListRefund] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
    setDay(formattedDate);
  }, []);
  //lấy id Stadium
  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium?.idStadium);
    }
  }, [selectedStadium]);
  //lấy doanh thu theo từng tháng
  useEffect(() => {
    if (idStadium) {
      fetchDataById('invoice', idStadium)
        .then((respone) => {
          setListRevenue(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium]);
  //lấy danh sách refund
  useEffect(() => {
    if (idStadium) {
      getRefundByIdStadium('booking', idStadium)
        .then((respone) => {
          setListRefund(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, refresh]);
  //lấy tiền nhập dịch vụ theo tháng
  useEffect(() => {
    if (idStadium) {
      getTotalServiceMontly('billservice', idStadium)
        .then((respone) => {
          setListServiceMonthly(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium]);
  //lấy tiền nhập cơ sở vật chất theo tháng
  useEffect(() => {
    if (idStadium) {
      getTotalServiceMontly('billfacility', idStadium)
        .then((respone) => {
          setListFacilityMonthly(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium]);
  //lấy tiền thanh lý cơ sở vật chất theo tháng
  useEffect(() => {
    if (idStadium) {
      getTotalServiceMontly('selloff', idStadium)
        .then((respone) => {
          setListSellOffMonthly(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium]);
  //lấy danh sách hóa đơn theo ngày
  useEffect(() => {
    if (idStadium || day) {
      getListInvoiceByDay('invoice', idStadium, day)
        .then((respone) => {
          setListInvoice(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, day]);
  //lấy tổng tiền các hóa đơn theo ngày
  useEffect(() => {
    if (idStadium && day) {
      getTotalPriceInvoiceByDay('invoice', idStadium, day)
        .then((response) => {
          if (response.data?.result) {
            setTotalPrice(response.data.result);
          } else {
            setTotalPrice(null); // Không có kết quả => trả về rỗng
          }
        })
        .catch((err) => {
          console.error(err);
          setTotalPrice(null); // Lỗi cũng trả về rỗng
        });
    } else {
      setTotalPrice(null); // Nếu ngày bị xóa hoặc không chọn sân
    }
  }, [idStadium, day]);
  //lấy chi phí sửa chữa hàng tháng
  useEffect(() => {
    if (idStadium) {
      getTotalServiceMontly('reportrepair', idStadium)
        .then((respone) => {
          setListRepairMonthly(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium]);
  //handle
  const handleUpdateRefund = async (idBooking) => {
    try {
      await updateRefund('booking', idBooking);
      setRefresh((prev) => !prev);
      toast.success('Successfull!');
    } catch (error) {
      console.error('Lỗi cập nhật:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <>
      
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title">Monthly Revenue</h4>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive">
                <table class="table  mb-0 table-centered text-center">
                  <thead class="table-light">
                    <tr>
                      <th>Month</th>
                      <th>Total Booking</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listRevenue.map((revenue, index) => (
                      <tr key={index}>
                        <td>{revenue.month}</td>
                        <td>{revenue.total}</td>
                        <td>
                          {' '}
                          {Number(revenue.revenue).toLocaleString()}
                          &nbsp;VND
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title">Monthly Service</h4>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive">
                <table class="table table-bordered mb-0 table-centered text-center">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listServiceMonthly.map((service, index) => (
                      <tr key={index}>
                        <td>{service.month}</td>
                        <td>
                          {' '}
                          {Number(service.total).toLocaleString()}
                          &nbsp;VND
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
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title">Monthly Facility</h4>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive">
                <table class="table table-striped mb-0 text-center">
                  <thead class="table-light">
                    <tr>
                      <th>Month</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listFacilityMonthly.map((facility, index) => (
                      <tr key={index}>
                        <td>{facility.month}</td>
                        <td>
                          {' '}
                          {Number(facility.total).toLocaleString()}
                          &nbsp;VND
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title">Sell-Off Monthly</h4>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive">
                <table class="table mb-0 text-center">
                  <thead class="table-light">
                    <tr>
                      <th>Month</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listSellOffMonthly.map((selloff, index) => (
                      <tr key={index}>
                        <td>{selloff.month}</td>
                        <td>
                          {' '}
                          {Number(selloff.total).toLocaleString()}
                          &nbsp;VND
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
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title">Repair Monthly</h4>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive-sm">
                <table class="table mb-0 text-center">
                  <thead class="table-light">
                    <tr>
                      <th scope="col">Month</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listRepairMonthly.map((repair, index) => (
                      <tr key={index}>
                        <td>{repair.month}</td>
                        <td>
                          {' '}
                          {Number(repair.total).toLocaleString()}
                          &nbsp;VND
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title">Refund</h4>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive-sm">
                <table class="table mb-0 text-center">
                  <caption>List of users</caption>
                  <thead class="table-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Mobile.No</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listRefund.map((refund, index) => (
                      <tr key={index}>
                        <td>{refund.name}</td>
                        <td>{refund.phoneNumber}</td>
                        <td>
                          {Number(refund.totalPrice).toLocaleString()}
                          &nbsp;VND
                        </td>
                        <td>
                          <i
                            className="las la-trash text-secondary fs-18"
                            onClick={() => handleUpdateRefund(refund.idBooking)}
                          ></i>
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
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title mb-0">Invoice Daily</h4>
                </div>
                <div class="col-auto">
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive-sm">
                <table class="table mb-0 text-center">
                  <thead class="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">ID Booking</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listInvoice.map((invoice, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{invoice.idBooking}</td>
                        <td>{invoice.name}</td>
                        <td>
                          {' '}
                          {Number(invoice.totalPrice).toLocaleString()}
                          &nbsp;VND
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>
                        {totalPrice
                          ? totalPrice.revenue.toLocaleString() + ' VNĐ'
                          : ''}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6"></div>
      </div>
    </>
  );
}

export default Report;
