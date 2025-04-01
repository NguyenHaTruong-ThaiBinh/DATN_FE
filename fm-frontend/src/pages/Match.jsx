function Match() {
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
            <select className="form-select form-select-sm" id="time-select">
              <option defaultValue>Time</option>
              <option value="1">7:00 AM</option>
              <option value="2">10:00 AM</option>
              <option value="3">1:00 PM</option>
              <option value="4">4:00 PM</option>
              <option value="5">7:00 PM</option>
              <option value="6">10:00 PM</option>
            </select>
          </div>
        </div>
      </div>
      <span></span>
      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table table-dark mb-0">
            <thead>
              <tr>
                <th class="rounded-bottom-0">#</th>
                <th>Field</th>
                <th>Time</th>
                <th>Day</th>
                <th>Team Name</th>
                <th>Phone Number</th>
                <th class="rounded-bottom-0">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Filed 1 - YenHoa</td>
                <td>7:00 PM</td>
                <td>25/09/2025</td>
                <td>Dong Ha FC</td>
                <td>0393878300</td>
                <td>
                  <a href="#">
                    <i className="fas fa-align-justify"></i>
                  </a>
                  <a href="#">
                    <i className="las la-trash-alt text-secondary fs-18"></i>
                  </a> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Match;
