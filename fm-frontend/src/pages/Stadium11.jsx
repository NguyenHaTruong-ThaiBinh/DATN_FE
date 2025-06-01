import { useState, useEffect } from 'react';
import { fetchDataByIdStadiumAndIdTypeAndEnable } from '../API/Api';

import Stadium from '../component/Stadium';
import Add11 from '../component/Add11';
import EditStadium from '../component/EditStadium';
import ViewPrice from '../component/ViewPrice';
import EditPriceField from '../component/EditPriceField';
import DeleteStadium from '../component/DeleteStadium';
import 'react-toastify/dist/ReactToastify.css';
import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';
import Cookies from 'js-cookie';

function Stadium11() {
  const dispatch = useDispatch();
  const role = Cookies.get('role');
  const isAdmin = role === 'ADMIN';
  const { selectedStadium } = useOutletContext();
  const [listField, setListField] = useState([]);
  const [stadiumData, setStadiumData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isFresh, setIsFresh] = useState(false);
  useEffect(() => {
    dispatch(updateTitleHeader('11v11'));
  }, [dispatch]);
  useEffect(() => {
    if (selectedStadium) {
      const idStadium = selectedStadium.idStadium;
      fetchDataByIdStadiumAndIdTypeAndEnable('field', idStadium, 2)
        .then((respone) => {
          setListField(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [selectedStadium, refresh]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="card-title">Welcome to HaTruong Stadium</h4>
                </div>
                {isAdmin && (
                  <div className="col-auto">
                    <button
                      className="btn bg-primary text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#add11"
                    >
                      <i className="fas fa-plus me-1"></i> Add Stadium
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              {selectedStadium ? (
                listField.map((f, index) => (
                  <Stadium
                    key={index}
                    selectedStadium={selectedStadium}
                    field={f}
                    from="stadium11"
                    setStadiumData={setStadiumData}
                  />
                ))
              ) : (
                <p className="no-data-message">No data available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Add11
        IdStadium={selectedStadium?.idStadium || ''}
        setRefresh={setRefresh}
      />
      <EditStadium stadiumData={stadiumData} setRefresh={setRefresh} />
      <ViewPrice stadiumData={stadiumData} isFresh={isFresh} />
      <EditPriceField stadiumData={stadiumData} setIsFresh={setIsFresh} />
      <DeleteStadium stadiumData={stadiumData} />
    </>
  );
}

export default Stadium11;
