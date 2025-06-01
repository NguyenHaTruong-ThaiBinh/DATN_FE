import { useState, useEffect } from 'react';
import {
  fetchData,
  fetchDataById,
  postPrice,
  updatePrice,
} from '../API/Api';
import { toast } from 'react-toastify';

function EditPriceField({ stadiumData, setIsFresh }) {
  const [name, setName] = useState('');
  const [idField, setIdField] = useState('');
  const [listTime, setListTime] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [price, setPrice] = useState('');
  const [listPriceField, setListPriceField] = useState([]);
  const [idPrice, setIdPrice] = useState('');
  const [fresh, setFresh] = useState(false);
  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    if (stadiumData) {
      setIdField(stadiumData.idField || '');
      setName(stadiumData.name || '');
      setSelectedTime('');
      setPrice('');
    }
  }, [stadiumData]);
  useEffect(() => {
    if (idField) {
      fetchDataById('price', idField)
        .then((respone) => {
          setListPriceField(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idField, fresh]);

  useEffect(() => {
    if (!selectedTime) {
      setPrice('');
      setIdPrice('');
      return;
    }
    if (selectedTime && listPriceField.length > 0) {
      const selectedPriceItem = listPriceField.find(
        (item) => item.idTime === parseInt(selectedTime)
      );
      if (selectedPriceItem) {
        setPrice(selectedPriceItem.price);
        setIdPrice(selectedPriceItem.idPrice);
      } else {
        setPrice('');
      }
    }
  }, [selectedTime, listPriceField]);
  const handleSavePrice = async () => {
    if (!selectedTime || !price) {
      toast.success('Please enter complete information!');
      return;
    }
    const formData = new FormData();
    formData.append('idField', idField);
    formData.append('idTime', selectedTime);
    formData.append('price', price);
    try {
      await postPrice('price', formData);
      toast.success('Successfull!');
      setIsFresh((prev) => !prev);
      setFresh((prev) => !prev);
      document
        .querySelector('#editpricefield [data-bs-dismiss="modal"]')
        ?.click();
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };
  const handleUpdatePrice = async () => {
    const formData = new FormData();
    formData.append('price', price);
    try {
      await updatePrice('price', idPrice, formData);
      toast.success('Update Success');
      setIsFresh((prev) => !prev);
      setFresh((prev) => !prev);
      document
        .querySelector('#editpricefield [data-bs-dismiss="modal"]')
        ?.click();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Update thất bại!');
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="editpricefield"
        tabIndex="-1"
        aria-labelledby="editpricefieldLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editpricefieldLabel">
                Edit Price
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row mb-3">
                <div className="col">
                  <h5 className="card-title mb-2">{name}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <select
                    className="form-select"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Select Time</option>
                    {listTime.map((item, index) => (
                      <option key={index} value={item.idTime}>
                        {item.time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleUpdatePrice}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleSavePrice}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPriceField;
