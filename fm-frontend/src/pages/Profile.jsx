import { useState, useEffect } from 'react';
import { changePassword, fetchDataById, updateFormData } from '../API/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Profile'));
  }, [dispatch]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const [newPwd, setNewPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const [password, setPassword] = useState('');
  const idUser = Cookies.get('idUser');
  //lấy thông tin User theo idUser
  useEffect(() => {
    if (idUser) {
      fetchDataById('users', idUser)
        .then((respone) => {
          setUser(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idUser, refresh]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhoneNumber(user.phoneNumber);
      setEmail(user.email);
    }
  }, [user]);
  //update infor user
  const handleUpdate = async () => {
    if (!name || !phoneNumber || !email) {
      toast.warning('Please enter complete information!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);

    try {
      await updateFormData('users', idUser, formData);
      toast.success('Update successful!');
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error('Error:', error); // Log lỗi chi tiết cho dev

      const message = error?.response?.data?.message || 'Error';

      toast.error(message);
    }
  };
  //handle change pwd
  const handleChange = async () => {
    if (!password || !newPwd || !confirm) {
      toast.error('Please enter complete information!');
      return;
    }
    if (newPwd !== confirm) {
      toast.error('Confirm password does not match!');
      return;
    }
    const formData = new FormData();
    formData.append('pwd', password);
    formData.append('newPwd', newPwd);
    try {
      await changePassword('users', idUser, formData);
      toast.success('Successfull!');
      setPassword('');
      setNewPwd('');
      setConfirm('');
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body p-4 rounded text-center img-bg"></div>
            <div className="position-relative">
              <div className="shape overflow-hidden text-card-bg">
                <svg
                  viewBox="0 0 2880 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="card-body mt-n6">
              <div className="row align-items-center">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <img
                        src="assets/images/users/avatar-1.jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </div>
                    <div className="flex-grow-1 text-truncate ms-3 align-self-end">
                      <h5 className="m-0 fs-3 fw-bold">{user.name}</h5>
                      <p className="text-muted mb-0">@{user.nameRole}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="mt-3">
                    <div className="text-muted mb-2 d-flex align-items-center">
                      <i className="iconoir-mail-out fs-20 me-1"></i>
                      <span className="text-body fw-semibold">Email :</span>
                      <div className="text-primary text-decoration-underline">
                        {user.email}
                      </div>
                    </div>
                    <div className="text-body mb-3 d-flex align-items-center">
                      <i className="iconoir-phone fs-20 me-1 text-muted"></i>
                      <span className="text-body fw-semibold">
                        Phone :
                      </span>{' '}
                      {user.phoneNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="card-title">Personal Information</h4>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="form-group mb-3 row">
                <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                  Name
                </label>
                <div className="col-lg-9 col-xl-8">
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                  Contact Phone
                </label>
                <div className="col-lg-9 col-xl-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="las la-phone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                  Email Address
                </label>
                <div className="col-lg-9 col-xl-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="las la-at"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-9 col-xl-8 offset-lg-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUpdate}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Change Password</h4>
            </div>
            <div className="card-body pt-0">
              <div className="form-group mb-3 row">
                <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                  Current Password
                </label>
                <div className="col-lg-9 col-xl-8">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                  New Password
                </label>
                <div className="col-lg-9 col-xl-8">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="New Password"
                    value={newPwd}
                    onChange={(e) => setNewPwd(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                  Confirm Password
                </label>
                <div className="col-lg-9 col-xl-8">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Re-Password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-9 col-xl-8 offset-lg-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleChange}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
