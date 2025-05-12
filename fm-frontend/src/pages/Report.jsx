import React, { useState, useEffect } from 'react';
import {
  fetchDataById,
  getListInvoiceByDay,
  getTotalPriceInvoiceByDay,
  getTotalServiceMontly,
} from '../API/Api';

function Report({ selectedStadium, setSelectedStadium, setIsRefresh }) {
  const [idStadium, setIdStadium] = useState('');
  const [listRevenue, setListRevenue] = useState([]);
  const [listServiceMonthly, setListServiceMonthly] = useState([]);
  const [listFacilityMonthly, setListFacilityMonthly] = useState([]);
  const [listSellOffMonthly, setListSellOffMonthly] = useState([]);
  const [listRepairMonthly, setListRepairMonthly] = useState([]);
  const [listInvoice, setListInvoice] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [day, setDay] = useState('');

  //lấy id Stadium
  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
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
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="row">
            <div class="col-md-6">
              <div class="card  bg-welcome-img overflow-hidden">
                <div class="card-body">
                  <div class="">
                    <h3 class="text-white fw-semibold fs-20 lh-base">
                      Upgrade you plan for
                      <br />
                      Great experience
                    </h3>
                    <a href="#" class="btn btn-sm btn-danger">
                      Upgarde Now
                    </a>
                    <img
                      src="assets/images/extra/fund.png"
                      alt=""
                      class=" mb-n4 float-end"
                      height="107"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-globe-img">
                <div class="card-body">
                  <div>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="fs-16 fw-semibold">Balance</span>
                      <form class="">
                        <select
                          id="dynamic-select"
                          name="example-select"
                          data-placeholder="Select an option"
                          data-dynamic-select
                        >
                          <option
                            value="1"
                            data-img="assets/images/logos/m-card.png"
                          >
                            xx25
                          </option>
                          <option
                            value="2"
                            data-img="assets/images/logos/ame-bank.png"
                          >
                            xx56
                          </option>
                        </select>
                      </form>
                    </div>

                    <h4 class="my-2 fs-24 fw-semibold">
                      122.5692.00 <small class="font-14">BTC</small>
                    </h4>
                    <p class="mb-3 text-muted fw-semibold">
                      <span class="text-success">
                        <i class="fas fa-arrow-up me-1"></i>11.1%
                      </span>{' '}
                      Outstanding balance boost
                    </p>
                    <button type="submit" class="btn btn-soft-primary">
                      Transfer
                    </button>
                    <button type="button" class="btn btn-soft-danger">
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6">
              <div class="card bg-corner-img">
                <div class="card-body">
                  <div class="row d-flex justify-content-center">
                    <div class="col-9">
                      <p class="text-muted text-uppercase mb-0 fw-normal fs-13">
                        Total Revenue
                      </p>
                      <h4 class="mt-1 mb-0 fw-medium">$8365.00</h4>
                    </div>
                    <div class="col-3 align-self-center">
                      <div class="d-flex justify-content-center align-items-center thumb-md border-dashed border-primary rounded mx-auto">
                        <i class="iconoir-dollar-circle fs-22 align-self-center mb-0 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="card bg-corner-img">
                <div class="card-body">
                  <div class="row d-flex justify-content-center">
                    <div class="col-9">
                      <p class="text-muted text-uppercase mb-0 fw-normal fs-13">
                        New Order
                      </p>
                      <h4 class="mt-1 mb-0 fw-medium">722</h4>
                    </div>
                    <div class="col-3 align-self-center">
                      <div class="d-flex justify-content-center align-items-center thumb-md border-dashed border-info rounded mx-auto">
                        <i class="iconoir-cart fs-22 align-self-center mb-0 text-info"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="card bg-corner-img">
                <div class="card-body">
                  <div class="row d-flex justify-content-center">
                    <div class="col-9">
                      <p class="text-muted text-uppercase mb-0 fw-normal fs-13">
                        Sessions
                      </p>
                      <h4 class="mt-1 mb-0 fw-medium">181</h4>
                    </div>
                    <div class="col-3 align-self-center">
                      <div class="d-flex justify-content-center align-items-center thumb-md border-dashed border-warning rounded mx-auto">
                        <i class="iconoir-percentage-circle fs-22 align-self-center mb-0 text-warning"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="card bg-corner-img">
                <div class="card-body">
                  <div class="row d-flex justify-content-center">
                    <div class="col-9">
                      <p class="text-muted text-uppercase mb-0 fw-normal fs-13">
                        Avg. Order value
                      </p>
                      <h4 class="mt-1 mb-0 fw-medium">$1025.50</h4>
                    </div>
                    <div class="col-3 align-self-center">
                      <div class="d-flex justify-content-center align-items-center thumb-md border-dashed border-danger rounded mx-auto">
                        <i class="iconoir-hexagon-dice fs-22 align-self-center mb-0 text-danger"></i>
                      </div>
                    </div>
                  </div>
                </div>
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
                <table class="table mb-0">
                  <caption>List of users</caption>
                  <thead class="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
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
