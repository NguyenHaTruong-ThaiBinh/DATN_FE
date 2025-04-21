import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchData, postFormData } from '../API/Api';

function Form({ stadiumName, setRefresh }) {
  const [status, setStatus] = useState('on');
  const [nameField, setNameField] = useState('');
  const [nameStadium, setNameStadium] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState('-- Select Type --');
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    setNameStadium(stadiumName); // Gán giá trị stadiumName từ props khi Form mount kiểm tra sự thay đổi từ component cha xuống con
  }, [stadiumName]);

  const handleSubmit = async () => {
    if (!nameField || !nameStadium || !type) {
      toast.error('Please enter complete information!');
      return;
    }

    const formData = new FormData();
    formData.append('name', nameField);
    formData.append('nameType', type);
    formData.append('nameStadium', nameStadium);
    if (image) {
      formData.append('img', image); // Đảm bảo gửi file đúng
    }

    try {
      await postFormData('field', formData);
      toast.success('Add Successful!');
      handleReset();
      document.querySelector('#addUser [data-bs-dismiss="modal"]')?.click();
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    fetchData('type')
      .then((respone) => {
        if (respone.data.code === 0) {
          setTypeList(respone.data.result);
        }
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    setStatus('on');
    setNameField('');
    setImage(null);
    setType('-- Select Type --');
    setPreviewImage(null);
    setNameStadium(stadiumName); // Reset lại từ props
  };

  useEffect(() => {
    const modal = document.getElementById('addUser');
    modal.addEventListener('hidden.bs.modal', handleReset);
    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, [stadiumName]);
  return (
    <>
      <div
        className="modal fade"
        id="addUser"
        tabIndex="-1"
        aria-labelledby="addUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUserLabel">
                Add Field
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Image upload */}
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

              {/* Field Name */}
              <div className="mb-2">
                <label htmlFor="FieldName">Field Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-futbol"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Field Name"
                    value={nameField}
                    onChange={(e) => setNameField(e.target.value)}
                  />
                </div>
              </div>

              {/* Stadium Name */}
              <div className="mb-2">
                <label htmlFor="fullName">Stadium Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-futbol"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Stadium Name"
                    value={nameStadium}
                    onChange={(e) => setNameStadium(e.target.value)}
                  />
                </div>
              </div>

              {/* Type */}
              <div className="mb-2">
                <label htmlFor="type">Type</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-th-large"></i>
                  </span>
                  <select
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">-- Select Type --</option>
                    {typeList.map((t) => (
                      <option key={t.idType} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleSubmit}
              >
                Add Field
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
