import { useState } from 'react';

function FormService() {
  const [serviceName, setServiceName] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ serviceName, costPrice, retailPrice, quantity });
  };

  return (
    <div
      className="modal fade"
      id="addService"
      tabIndex="-1"
      aria-labelledby="addServiceLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addServiceLabel">
              Add Service Detail
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="serviceName">Service Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-tag"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="serviceName"
                    placeholder="Enter service name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="costPrice">Cost Price</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-dollar-sign"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="costPrice"
                    placeholder="Enter cost price"
                    value={costPrice}
                    onChange={(e) => setCostPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="retailPrice">Retail Price</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-dollar-sign"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="retailPrice"
                    placeholder="Enter retail price"
                    value={retailPrice}
                    onChange={(e) => setRetailPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="quantity">Quantity</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-boxes"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-100">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormService;
