import React from 'react';
function FormRequest() {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModalSuccess"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalSuccess1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header bg-success">
              <h6 class="modal-title m-0 text-white" id="exampleModalSuccess1">
                Request
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="card-body pt-0">
                  <form>
                    <div class="mb-3 row">
                      <label
                        for="horizontalInput1"
                        class="col-sm-2 col-form-label"
                      >
                        Name
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="horizontalInput1"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="horizontalInput2"
                        class="col-sm-2 col-form-label"
                      >
                        Phone Number
                      </label>
                      <div class="col-sm-10">
                        <input
                          type=""
                          class="form-control"
                          id="horizontalInput2"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="horizontalInput2"
                        class="col-sm-2 col-form-label"
                      >
                        Note
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="horizontalInput2"
                          placeholder="Enter Note"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success btn-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormRequest;
