import React, { useEffect, useState } from 'react';

function ModalDetailMatch({ matchData }) {
  const [userA, setUserA] = useState('');
  const [userB, setUserB] = useState('');
  const [phoneNumberA, setPhoneNumberA] = useState('');
  const [phoneNumberB, setPhoneNumberB] = useState('');
  const [nameField, setNameField] = useState('');
  const [nameType, setNameType] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [nameStadium, setNameStadium] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (matchData) {
      setUserA(matchData.nameUserA);
      setUserB(matchData.nameUserB);
      setPhoneNumberA(matchData.phoneNumberA);
      setPhoneNumberB(matchData.phoneNumberB);
      setNameField(matchData.nameField);
      setNameField(matchData.nameType);
      setNameType(matchData.nameType);
      setDay(matchData.day);
      setTime(matchData.time);
      setNotes(matchData.notes);
      setNameStadium(matchData.nameStadium);
      setAddress(matchData.address);
      setPrice(matchData.price);
    }
  }, [matchData]);
  return (
    <div
      className="modal fade"
      id="detailmatch"
      tabIndex="-1"
      aria-labelledby="detailmatchLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" style={{ maxWidth: '70%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="detailmatchLabel">
              Detail Match
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Đóng"
            ></button>
          </div>
          <div className="modal-body">
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
                  <div class="col-8 text-end align-self-center"></div>
                </div>
              </div>
              <div class="card-body ">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        User A
                      </label>
                      <div class="col-sm-10">
                        <input class="form-control" type="text" value={userA} />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        User B
                      </label>
                      <div class="col-sm-10">
                        <input class="form-control" type="text" value={userB} />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="example-tel-input"
                        class="col-sm-2 col-form-label text-end"
                      >
                        Stadium
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          value={nameStadium}
                          id="example-tel-input"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Type
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          value={nameType}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Day
                      </label>
                      <div class="col-sm-10">
                        <input class="form-control" type="text" value={day} />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Note
                      </label>
                      <div class="col-sm-10">
                        <input class="form-control" type="text" value={notes} />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Mobile No
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="number"
                          value={phoneNumberA}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Mobile No
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="number"
                          value={phoneNumberB}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Address
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          value={address}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Field
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          value={nameField}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label text-end">
                        Time
                      </label>
                      <div class="col-sm-10">
                        <input class="form-control" type="text" value={time} />
                      </div>
                    </div>
                    <div class="mb-3 row has-error">
                      <label
                        for="inputHorizontalDnger"
                        class="col-sm-2 col-form-label text-end"
                      >
                        Price
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control is-invalid"
                          id="inputHorizontalDnger"
                          value={Number(price).toLocaleString('vi-VN') + ' VNĐ'}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>{' '}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetailMatch;
