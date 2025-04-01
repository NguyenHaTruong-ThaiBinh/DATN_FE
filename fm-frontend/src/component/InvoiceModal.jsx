function InvoiceModal() {
  return (
    <>
      <div
        class="modal fade"
        id="invoice"
        tabIndex="-1"
        aria-labelledby="invoiceLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="invoiceLabel">
                Invoice
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body bg-black rounded-top">
                      <div class="row">
                        <div class="col-4 align-self-center">
                          <img
                            src="assets/images/logo1.png"
                            alt="logo-small"
                            class="logo-sm me-1"
                            height="70"
                          />
                        </div>
                        <div class="col-8 text-end align-self-center">
                          <h5 class="mb-1 fw-semibold text-white">
                            <span class="text-muted">Invoice:</span>{' '}
                            #BBN2351D458
                          </h5>
                          <h5 class="mb-0 fw-semibold text-white">
                            <span class="text-muted">Issue Date:</span>{' '}
                            20/07/2024
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row row-cols-3 d-flex justify-content-md-between">
                        <div class="col-md-3 d-print-flex align-self-center">
                          <div class="">
                            <span class="badge rounded text-dark bg-light">
                              Invoice to
                            </span>
                            <h5 class="my-1 fw-semibold fs-18">Ha Truong</h5>
                            <p class="text-muted ">0393878300</p>
                          </div>
                        </div>
                        <div class="col-md-3 d-print-flex align-self-center">
                          <div class="">
                            <address class="fs-13">
                              <strong class="fs-14">Address</strong>
                              <br />
                              795 Folsom Ave
                              <br />
                              San Francisco, CA 94107
                              <br />
                              <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="table-responsive project-invoice">
                            <table class="table table-bordered mb-0">
                              <thead class="table-light">
                                <tr>
                                  <th>Name</th>
                                  <th>Day</th>
                                  <th>Hours</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Subtotal</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Field 1</td>
                                  <td>25/09/2003</td>
                                  <td>7:00&nbsp;PM </td>
                                  <td></td>
                                  <td></td>
                                  <yd>300.000&nbsp;VND</yd>
                                </tr>
                                <tr>
                                  <td>Water</td>
                                  <td></td>
                                  <td></td>
                                  <td>2</td>
                                  <td>20.000&nbsp;VND</td>
                                  <td>40.000&nbsp;VND</td>
                                </tr>
                                <tr>
                                  <td>Pit</td>
                                  <td></td>
                                  <td></td>
                                  <td>5</td>
                                  <td>10.000&nbsp;VND</td>
                                  <td>50.000&nbsp;VND</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td colspan="1" class="border-0"></td>
                                  <td
                                    colspan="2"
                                    class="border-0 fs-14 text-dark"
                                  >
                                    <b>Sub Total</b>
                                  </td>
                                  <td class="border-0 fs-14 text-dark">
                                    <b>390.000 VND</b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="text-end mt-3">
                        <button class="btn btn-success">Print</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceModal;
