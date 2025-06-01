import { useState, useEffect } from 'react';
import { addService } from '../API/Api';
import { toast } from 'react-toastify';

function FormService({ selectedStadium, setIsRefresh }) {
  const [serviceName, setServiceName] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [idStadium, setIdStadium] = useState('');
  const [nameStadium, setNameStadium] = useState('');

  useEffect(() => {
    if (selectedStadium) {
      setNameStadium(selectedStadium.name);
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

  const handleSubmit = async () => {
    if (!serviceName || !costPrice || !retailPrice || !quantity || !unit) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('idStadium', idStadium);
    formData.append('name', serviceName);
    formData.append('costPrice', costPrice);
    formData.append('retailPrice', retailPrice);
    formData.append('quantity', quantity);
    formData.append('unit', unit);
    if (image) {
      formData.append('img', image);
    }
    try {
      await addService('services', formData);
      toast.success('Successfull!');
      document.querySelector('#addService [data-bs-dismiss="modal"]')?.click();
      handleReset();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    setServiceName('');
    setCostPrice('');
    setRetailPrice('');
    setQuantity('');
    setPreviewImage(null);
    setImage(null);
    setNameStadium(selectedStadium);
  };

  useEffect(() => {
    const modal = document.getElementById('addService');
    modal.addEventListener('hidden.bs.modal', handleReset);
    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, []);
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
            <div>
              <div className="form-group mb-2">
                <div className="d-flex align-items-center">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="rounded border"
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        marginRight: '10px',
                      }}
                    />
                  ) : (
                    <i className="fas fa-image text-muted thumb-xl rounded me-2 border-dashed"></i>
                  )}
                  <div className="flex-grow-1 text-truncate">
                    <label className="btn btn-primary text-light">
                      Add Image
                      <input type="file" hidden onChange={handleImageChange} />
                    </label>
                  </div>
                </div>
              </div>
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
                <label htmlFor="stadiumName">Stadium Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-futbol"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="stadiumName"
                    placeholder="Enter stadium name"
                    value={nameStadium}
                    onChange={(e) => setNameStadium(e.target.value)}
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
              <div className="mb-2">
                <label htmlFor="unit">Unit</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-cube"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="unit"
                    placeholder="Enter unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={handleSubmit}
              >
                Add Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormService;
