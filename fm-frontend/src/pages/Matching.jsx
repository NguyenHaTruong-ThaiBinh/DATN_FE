import { useState, useEffect } from 'react';
import OpponentModal from '../component/OpponentModal';
import FormRequest from '../component/FormRequest';
import MatchItem from '../component/MatchItem';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData, fetchDataById } from '../API/Api';
import DetailMatching from '../modal/DetailMatching';
import ModalRemoveMatching from '../modal/ModalRemoveMatching';
import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';

function Matching() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Matching'));
  }, [dispatch]);
  const { selectedStadium } = useOutletContext();
  const [isRefresh, setIsRefresh] = useState(false);
  const [listMatching, setListMatching] = useState([]);
  const [matchingData, setMatchingData] = useState('');
  const [idStadium, setIdStadium] = useState('');
  const [listTime, setListTime] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  //set idStadium
  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);
  //lấy danh sách time ra
  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //lấy danh sách matching theo idStadium
  useEffect(() => {
    if (idStadium) {
      fetchDataById('matching', idStadium)
        .then((respone) => {
          setListMatching(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, isRefresh]);

  //lọc danh sách theo thanh tìm kiếm
  const fifteredMatching = listMatching.filter((matching) => {
    const matchTime = selectedTime ? matching.time === selectedTime : true;
    const matchDay = selectedDate ? matching.day === selectedDate : true;
    return matchTime && matchDay;
  });
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="card-title">⚽⚽</h4>
                </div>
                <div className="col-auto">
                  <button
                    className="btn bg-primary text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#opponentModal"
                  >
                    <i className="fas fa-plus me-1"></i> Find Opponent
                  </button>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mb-3">
              {/* Cột chọn Day */}
              <div className="col-md-6 d-flex align-items-center">
                <label
                  htmlFor="date-input"
                  className="col-sm-3 col-form-label text-end pe-2"
                >
                  Date
                </label>
                <div className="col-sm-7">
                  <input
                    className="form-control form-control-sm"
                    type="date"
                    id="date-input"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Cột chọn Time */}
              <div className="col-md-6 d-flex align-items-center">
                <label
                  htmlFor="time-select"
                  className="col-sm-3 col-form-label text-end pe-2"
                >
                  Select Time
                </label>
                <div className="col-sm-7">
                  <select
                    className="form-select form-select-sm"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">...</option>
                    {listTime.map((item, index) => (
                      <option key={index} value={item.time}>
                        {item.time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body pt-0">
                {selectedStadium ? (
                  fifteredMatching.map((m, index) => (
                    <MatchItem
                      key={index}
                      matching={m}
                      setMatchingData={setMatchingData}
                      setIsRefresh={setIsRefresh}
                    />
                  ))
                ) : (
                  <p className="no-data-message">No data available</p> // Hiển thị nếu không chọn sân
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <OpponentModal
        selectedStadium={selectedStadium}
        setIsRefresh={setIsRefresh}
      />
      <DetailMatching matchingData={matchingData} />
      <ModalRemoveMatching
        matchingData={matchingData}
        setIsRefresh={setIsRefresh}
      />
      <FormRequest />
    </>
  );
}

export default Matching;
