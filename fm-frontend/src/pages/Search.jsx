import { fetchData, getAllStadiumEnable, updateSatusStadium } from '../API/Api';
import { useState, useEffect } from 'react';
import ModalStadium from '../modal/ModalStadium';
import { toast } from 'react-toastify';
import { useOutletContext } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';

function Search() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Search'));
  }, [dispatch]);
  const role = Cookies.get('role');
  const isAdmin = role === 'ADMIN';
  const [district, setDistrict] = useState('');
  const [listDistrict, setListDistrict] = useState([]);
  const [stadiumData, setStadiumData] = useState('');
  const [listStadium, setListStadium] = useState([]);
  const [Refresh, setRefresh] = useState(false);
  const { setIsRefresh } = useOutletContext();

  //lấy danh sách quận
  useEffect(() => {
    fetchData('district')
      .then((respone) => {
        setListDistrict(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //lấy danh sách sân
  useEffect(() => {
    getAllStadiumEnable('stadium')
      .then((respone) => {
        setListStadium(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [Refresh]);

  //update status
  const handleUpdateStatus = async (idStadium) => {
    try {
      await updateSatusStadium('stadium', idStadium);
      toast.success('Update Successfull');
      setRefresh((prev) => !prev);
      setIsRefresh((prev) => !prev);
    } catch (error) {
      console.error('Lỗi cập nhật:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-4">
          <select
            className="form-select"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">-- Select District --</option>
            {listDistrict.map((d) => (
              <option key={d.idDistrict} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table mb-0">
            <thead class="table-light">
              <tr>
                <th class="border-top-0">Name</th>
                <th class="border-top-0">Address</th>
                <th class="border-top-0">Status</th>
                <th class="border-top-0">Action</th>
              </tr>
            </thead>
            <tbody>
              {listStadium
                .filter(
                  (stadium) => !district || stadium.nameDistrict === district
                )
                .map((stadium, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={stadium.img}
                          height="40"
                          className="me-2 align-self-center rounded"
                          alt="avatar"
                        />
                        <div className="flex-grow-1 text-truncate align-self-center">
                          <h6 className="m-0">{stadium.name}</h6>
                          <p className="fs-12 text-muted mb-0"></p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="fs-12 text-primary">
                        {stadium.address} - {stadium.nameDistrict}
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                        {stadium.status}
                      </span>
                    </td>
                    <td>
                      {isAdmin && (
                        <a href="#">
                          <i
                            className="las la-edit text-secondary fs-18"
                            onClick={() =>
                              handleUpdateStatus(stadium.idStadium)
                            }
                          ></i>
                        </a>
                      )}
                      <a href="#">
                        <i
                          className="las la-eye text-secondary fs-18"
                          data-bs-toggle="modal"
                          data-bs-target="#modalstadium"
                          onClick={() => {
                            setStadiumData(stadium);
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
      <ModalStadium stadiumData={stadiumData} />
    </>
  );
}

export default Search;
