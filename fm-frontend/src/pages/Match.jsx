import React, { useEffect, useState } from 'react';
import { fetchData, getMatchByIdStadium } from '../API/Api';
import ModalDetailMatch from '../modal/ModalDetailMatch';
import CancelMatch from '../modal/ModalCancelMatch';

function Match({ selectedStadium, setSelectedStadium, setIsRefresh }) {
  const [listMatch, setListMatch] = useState([]);
  const [idStadium, setIdStadium] = useState('');
  const [listTime, setListTime] = useState([]);
  const [matchData, setMatchData] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [isFresh, setIsFresh] = useState(false);

  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

  //lấy match theo id Stadium
  useEffect(() => {
    if (idStadium) {
      getMatchByIdStadium('matching', idStadium)
        .then((respone) => {
          setListMatch(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, isFresh]);

  //lấy time ra
  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //lọc
  const filteredMatch = listMatch.filter((match) => {
    const matchTime = selectedTime ? match.time === selectedTime : true;
    const matchDate = selectedDay ? match.day === selectedDay : true;
    return matchDate && matchTime;
  });
  return (
    <>
      <div class="row justify-content-center mb-3">
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
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
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
              id="time-select"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Time</option>
              {listTime.map((item, index) => (
                <option key={index} value={item.time}>
                  {item.time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <span></span>
      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table table-dark mb-0 text-center">
            <thead>
              <tr>
                <th class="rounded-bottom-0">#</th>
                <th>Field</th>
                <th>Time</th>
                <th>Day</th>
                <th class="rounded-bottom-0">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMatch.map((match, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {match.nameField} - {match.nameStadium}
                  </td>
                  <td>{match.time}</td>
                  <td>{match.day}</td>
                  <td>
                    <a href="#">
                      <i
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#detailmatch"
                        onClick={() => {
                          setMatchData(match);
                        }}
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="las la-trash-alt text-secondary fs-18"
                        data-bs-toggle="modal"
                        data-bs-target="#cancelmatch"
                        onClick={() => {
                          setMatchData(match);
                        }}
                      ></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalDetailMatch matchData={matchData} />
      <CancelMatch matchData={matchData} setIsFresh={setIsFresh} />
    </>
  );
}

export default Match;
