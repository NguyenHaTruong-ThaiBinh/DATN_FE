import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { postFormData } from '../API/Api';
import { useNavigate } from 'react-router-dom';

function RecoverPW() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSave = async () => {
    if (!email) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('email', email);
    try {
      await postFormData('email', formData);
      toast.success('New password send via Email!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error: ', error); // Log chi tiết để dev xem
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Thông báo lỗi từ server
      } else {
        toast.error('An unexpected error occurred!'); // Lỗi không rõ
      }
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div class="container-xxl">
        <div class="row vh-100 d-flex justify-content-center">
          <div class="col-12 align-self-center">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-4 mx-auto">
                  <div class="card">
                    <div class="card-body p-0 bg-black auth-header-box rounded-top">
                      <div class="text-center p-3">
                        <a href="index.html" class="logo logo-admin">
                          <img
                            src="assets/images/logo1.png"
                            height="50"
                            alt="logo"
                            class="auth-logo"
                          />
                        </a>
                        <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">
                          Forget Password
                        </h4>
                        <p class="text-muted fw-medium mb-0">
                          Enter your Email and instructions will be sent to you!
                        </p>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <form
                        class="my-4"
                        action="https://mannatthemes.com/approx/default/index.html"
                      >
                        <div class="form-group mb-2">
                          <label class="form-label" for="username">
                            Email
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="userEmail"
                            name="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email Address"
                          />
                        </div>

                        <div class="form-group mb-0 row">
                          <div class="col-12">
                            <div class="d-grid mt-3">
                              <button
                                class="btn btn-primary"
                                type="button"
                                onClick={handleSave}
                              >
                                Reset <i class="fas fa-sign-in-alt ms-1"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="text-center mb-2">
                        <p className="text-muted">
                          Remember It?{' '}
                          <span
                            onClick={() => navigate('/login')}
                            className="text-primary ms-2"
                            style={{ cursor: 'pointer' }}
                          >
                            Sign in here
                          </span>
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

export default RecoverPW;
