import AddStadium from '../component/AddStadium';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

function Home() {
  const role = Cookies.get('role');
  const isAdmin = role === 'ADMIN';
  const changePwd = Cookies.get('changePwd');
  const isChange = changePwd === 'TRUE';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Home'));
  }, [dispatch]);
  const { setIsRefresh } = useOutletContext();
  const navigate = useNavigate();
  return (
    <>
      {isChange && toast.warning('User must change password!')}
      {isAdmin && (
        <button
          className="badge text-secondary border-0 bg-transparent"
          data-bs-toggle="modal"
          data-bs-target="#addstadium"
        >
          <i className="iconoir-plus-circle fs-2"></i>
        </button>
      )}
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-5 offset-lg-1 align-self-center">
                  <div class="p-3">
                    <span class="bg-pink-subtle p-1 rounded text-pink fw-medium">
                      Quality
                    </span>
                    <h1 class="my-4 font-weight-bold">
                      <span class="text-primary">
                        Home of your football dreams.
                      </span>
                    </h1>
                    <p class="fs-14 text-muted">
                      Football is more than just a game — it’s a passion that
                      connects people across the world. From the roar of the
                      crowd to the thrill of a last-minute goal, football brings
                      excitement, unity, and unforgettable memories. Whether
                      playing on the field or cheering from the sidelines, the
                      love for the game lives in every heart that beats for
                      football.
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => navigate('/stadium5')}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1 text-center">
                  <div
                    id="carouselExampleSlidesOnly"
                    class="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="assets/images/extra/card/img-2.png"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-1.png"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-3.png"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-5 text-center">
                  <div
                    id="carouselExample"
                    class="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="assets/images/extra/card/img-4.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-5.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-6.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-7.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1 align-self-center">
                  <div class="p-3">
                    <span class="bg-pink-subtle p-1 rounded text-pink fw-medium">
                      Contact
                    </span>
                    <h1 class="my-4 font-weight-bold">
                      <span class="text-primary">
                        Find rivals easily – Play right away.
                      </span>
                    </h1>
                    <p class="fs-14 text-muted">
                      Our “Find Opponent” feature helps players quickly connect
                      with others looking for a match. Whether you're missing
                      players or searching for a rival team, this function
                      allows you to set up games effortlessly. With just a few
                      clicks, you can match with available teams, confirm the
                      time, and head straight to the field. No more waiting or
                      searching – let the game begin!
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => navigate('/matching')}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-5 offset-lg-1 align-self-center">
                  <div class="p-3">
                    <span class="bg-pink-subtle p-1 rounded text-pink fw-medium">
                      Service{' '}
                    </span>
                    <h1 class="my-4 font-weight-bold">
                      <span class="text-primary">
                        More than a pitch — it’s a full-service football hub.
                      </span>
                    </h1>
                    <p class="fs-14 text-muted">
                      Our football field offers a full range of professional
                      services — from flexible booking and sports equipment
                      rental to high-quality lighting systems for both day and
                      night play. With premium turf, clean changing rooms,
                      comfortable rest areas, and a friendly support team, we
                      are committed to providing you with a complete, safe, and
                      convenient football experience.
                    </p>
                    <button type="button" class="btn btn-primary">
                      Get Started
                    </button>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1 text-center">
                  <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="assets/images/extra/card/service1.png"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/service2.png"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/service3.png"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddStadium setIsRefresh={setIsRefresh} />
    </>
  );
}

export default Home;
