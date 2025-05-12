import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { postFormData } from '../API/Api';

function ModalAddBillService({ servicesData, setIsRefresh }) {
  const [idService, setIdService] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (servicesData) {
      setIdService(servicesData.id);
    }
  }, [servicesData]);

  const handleSave = async () => {
    if (!quantity || !price || !idService) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('idService', idService);
    formData.append('quantity', quantity);
    formData.append('costPrice', price);
    try {
      await postFormData('billservice', formData);
      toast.success('Post successfull!');
      document.querySelector('#addservice [data-bs-dismiss="modal"]')?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      console.error('Error: ', error); // Log chi tiết để dev xem
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Thông báo lỗi từ server
      } else {
        toast.error('An unexpected error occurred!'); // Lỗi không rõ
      }
    }
  };
  return (
    <div
      className="modal fade"
      id="addservice"
      tabIndex="-1"
      aria-labelledby="addserviceLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ maxWidth: '40%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addserviceLabel">
              Add Bill Service
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div class="card">
              <div class="card-body pt-0">
                <form>
                  <div class="mb-3 row">
                    <label
                      for="horizontalInput1"
                      class="col-sm-2 col-form-label"
                    >
                      ID
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="horizontalInput1"
                        placeholder="Enter Email"
                        value={idService}
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      for="horizontalInput2"
                      class="col-sm-2 col-form-label"
                    >
                      Quantity
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        class="form-control"
                        id="horizontalInput2"
                        placeholder="Enter Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      for="horizontalInput2"
                      class="col-sm-2 col-form-label"
                    >
                      Price
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        class="form-control"
                        id="horizontalInput2"
                        placeholder="Enter Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddBillService;
