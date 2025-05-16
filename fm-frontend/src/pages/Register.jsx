import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postFormData } from '../API/Api';

import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Regex kiểm tra định dạng email cơ bản
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSave = async () => {
    if (!name || !password || !confirm || !phoneNumber || !email) {
      toast.error('Please enter complete information!');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Email is not valid!');
      return;
    }

    if (password !== confirm) {
      toast.error('Confirm password does not match!');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);
    try {
      await postFormData('users', formData);
      toast.success('Successfull!');
      setName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      setConfirm('');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="container-xxl">
        <div className="row vh-100 d-flex justify-content-center">
          <div className="col-12 align-self-center">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 mx-auto">
                  <div className="card">
                    <div className="card-body p-0 bg-black auth-header-box rounded-top">
                      <div className="text-center p-3">
                        <a href="index.html" className="logo logo-admin">
                          <img
                            src="assets/images/logo1.png"
                            height="50"
                            alt="logo"
                            className="auth-logo"
                          />
                        </a>
                        <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">
                          Create an account
                        </h4>
                        <p className="text-muted fw-medium mb-0">
                          Enter your detail to Create your account today.
                        </p>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <form
                        className="my-4"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="form-group mb-2">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter username"
                          />
                        </div>

                        <div className="form-group mb-2">
                          <label className="form-label" htmlFor="useremail">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="useremail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                          />
                        </div>

                        <div className="form-group mb-2">
                          <label className="form-label" htmlFor="userpassword">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="userpassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                          />
                        </div>

                        <div className="form-group mb-2">
                          <label
                            className="form-label"
                            htmlFor="Confirmpassword"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="Confirmpassword"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            placeholder="Enter confirm password"
                          />
                        </div>

                        <div className="form-group mb-2">
                          <label className="form-label" htmlFor="mobileNo">
                            Mobile Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="mobileNo"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter Mobile Number"
                          />
                        </div>

                        <div className="form-group mb-0 row">
                          <div className="col-12">
                            <div className="d-grid mt-3">
                              <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleSave}
                              >
                                Register{' '}
                                <i className="fas fa-sign-in-alt ms-1"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="text-center">
                        <p className="text-muted">
                          Already have an account?{' '}
                          <button
                            onClick={() => navigate('/')}
                            className="btn btn-link text-primary ms-2"
                            style={{ textDecoration: 'none' }}
                          >
                            Log in
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
