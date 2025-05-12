import React from 'react';
import AddStadium from '../component/AddStadium';
import { useNavigate } from 'react-router-dom';

function Home({ selectedStadium, setSelectedStadium, setIsRefresh }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="badge text-secondary border-0 bg-transparent"
        data-bs-toggle="modal"
        data-bs-target="#addstadium"
      >
        <i className="iconoir-plus-circle fs-2"></i>
      </button>
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
                          src="assets/images/extra/card/img-2.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-1.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-3.jpg"
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
                      Captions{' '}
                    </span>
                    <h1 class="my-4 font-weight-bold">
                      Manage Your Work With{' '}
                      <span class="text-primary">Approx</span>.
                    </h1>
                    <p class="fs-14 text-muted">
                      Approx is a Bootstrap 5 admin dashboard, It is fully
                      responsive and included awesome features to help build web
                      applications fast and easy.
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

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-5 text-center">
                  <div
                    id="carouselExampleFade"
                    class="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="assets/images/extra/card/img-6.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-1.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-3.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleFade"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleFade"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1 align-self-center">
                  <div class="p-3">
                    <span class="bg-pink-subtle p-1 rounded text-pink fw-medium">
                      Crossfade
                    </span>
                    <h1 class="my-4 font-weight-bold">
                      Manage Your Work With{' '}
                      <span class="text-primary">Approx</span>.
                    </h1>
                    <p class="fs-14 text-muted">
                      Approx is a Bootstrap 5 admin dashboard, It is fully
                      responsive and included awesome features to help build web
                      applications fast and easy.
                    </p>
                    <button type="button" class="btn btn-primary">
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
                      Dark variant{' '}
                    </span>
                    <h1 class="my-4 font-weight-bold">
                      Manage Your Work With{' '}
                      <span class="text-primary">Approx</span>.
                    </h1>
                    <p class="fs-14 text-muted">
                      Approx is a Bootstrap 5 admin dashboard, It is fully
                      responsive and included awesome features to help build web
                      applications fast and easy.
                    </p>
                    <button type="button" class="btn btn-primary">
                      Get Started
                    </button>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1 text-center">
                  <div
                    id="carouselExampleDark"
                    class="carousel carousel-dark slide"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div
                        class="carousel-item active"
                        data-bs-interval="10000"
                      >
                        <img
                          src="assets/images/extra/card/img-5.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item" data-bs-interval="2000">
                        <img
                          src="assets/images/extra/card/img-4.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            second slide.
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img
                          src="assets/images/extra/card/img-6.jpg"
                          class="d-block w-100"
                          alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleDark"
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
                      data-bs-target="#carouselExampleDark"
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
