import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { postLogin } from '../API/Api';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const handleLogin = async () => {
    if (!name || !pwd) {
      toast.error('Please fill in all information!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', pwd);

    try {
      const response = await postLogin('authentication', formData);
      if (response.data.code === 200) {
        Cookies.set('idUser', response.data.result.idUser);
        Cookies.set('role', response.data.result.role);
        Cookies.set('token', response.data.result.token);
        Cookies.set('changePwd', response.data.result.changePwd);
      }
      toast.success('Login successful!');
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } catch (error) {
      console.error('Error: ', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An unexpected error occurred!');
      }
    }
  };

  useEffect(() => {
    console.log('Token', Cookies.get('token'));
  });

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
                          Let's Get Started HaTruong
                        </h4>
                        <p class="text-muted fw-medium mb-0">
                          Sign in to continue to HaTruong.
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
                            Username
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            name="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter username"
                          />
                        </div>
                        <div class="form-group">
                          <label class="form-label" for="userpassword">
                            Password
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="userpassword"
                            placeholder="Enter password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                          />
                        </div>

                        <div class="form-group row mt-3">
                          <div class="col-sm-6">
                            <div class="form-check form-switch form-switch-success"></div>
                          </div>
                          <div className="col-sm-6 text-end">
                            <span
                              onClick={() => navigate('/recover_pw')}
                              className="text-muted font-13"
                              style={{ cursor: 'pointer' }}
                            >
                              <i className="dripicons-lock"></i> Forgot
                              password?
                            </span>
                          </div>
                        </div>

                        <div class="form-group mb-0 row">
                          <div class="col-12">
                            <div class="d-grid mt-3">
                              <button
                                class="btn btn-primary"
                                type="button"
                                onClick={handleLogin}
                              >
                                Log In <i class="fas fa-sign-in-alt ms-1"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="text-center  mb-2">
                        <p className="text-muted">
                          Don't have an account?{' '}
                          <span
                            onClick={() => navigate('/register')}
                            className="text-primary ms-2"
                            style={{ cursor: 'pointer' }}
                          >
                            Free Resister
                          </span>
                        </p>
                        <h6 class="px-3 d-inline-block">Contact With</h6>
                      </div>
                      <div class="d-flex justify-content-center">
                        <a
                          href="https://www.facebook.com/profile.php?id=61555506160235"
                          class="d-flex justify-content-center align-items-center thumb-md bg-blue-subtle text-blue rounded-circle me-2"
                        >
                          <i class="fab fa-facebook align-self-center"></i>
                        </a>
                        <a
                          href="https://zalo.me/0393878300"
                          class="d-flex justify-content-center align-items-center thumb-md bg-primary-subtle text-primary rounded-circle me-2"
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
                            alt="Zalo"
                            width="20"
                            height="20"
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/nguyen_ha_truong/"
                          class="d-flex justify-content-center align-items-center thumb-md bg-gradient-danger text-white rounded-circle"
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                            alt="Instagram"
                            width="20"
                            height="20"
                          />
                        </a>
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

export default Login;
