function Handle() {
  return (
    <>
      <table class="table table-bordered mb-0 table-centered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Field</th>
            <th>Type</th>
            <th>Time</th>
            <th>Day</th>
            <th>Status</th>
            <th class="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nguyen Ha Truong</td>
            <td>0393878300</td>
            <td>Filed 1 - YenHoa</td>
            <td>7</td>
            <td>7.00 PM</td>
            <td>25/09/2025</td>
            <td>
              <span class="badge bg-success">processing</span>
            </td>
            <td class="text-end">
              <div class="dropdown d-inline-block">
                <a
                  class="dropdown-toggle arrow-none"
                  id="dLabel11"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i class="las la-ellipsis-v fs-20 text-muted"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dLabel11"
                >
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-info-circle me-2"></i> Detail
                  </a>
                  <a class="dropdown-item text-danger" href="#">
                    <i class="fas fa-times-circle me-2"></i> Cancel
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Handle;
