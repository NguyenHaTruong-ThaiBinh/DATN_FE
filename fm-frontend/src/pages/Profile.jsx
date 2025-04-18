import React from "react";
function Profile() {
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body p-4  rounded text-center img-bg"></div>
            <div class="position-relative">
              <div class="shape overflow-hidden text-card-bg">
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
            <div class="card-body mt-n6">
              <div class="row align-items-center">
                <div class="col ">
                  <div class="d-flex align-items-center">
                    <div class="position-relative">
                      <img
                        src="assets/images/users/avatar-5.jpg"
                        alt=""
                        class="rounded-circle img-fluid"
                      />
                      <div class="position-absolute top-50 start-100 translate-middle">
                        <img
                          src="assets/images/flags/baha_flag.jpg"
                          alt=""
                          class="rounded-circle thumb-sm border border-3 border-white"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 text-truncate ms-3 align-self-end">
                      <h5 class="m-0 fs-3 fw-bold">Karen Savage</h5>
                      <p class="text-muted mb-0">@karen</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-12">
                  <div class="mt-3">
                    <div class="text-body mb-2  d-flex align-items-center">
                      <i class="iconoir-language fs-20 me-1 text-muted"></i>
                      <span class="text-body fw-semibold">Language :</span>{' '}
                      English / French / Spanish
                    </div>
                    <div class="text-muted mb-2 d-flex align-items-center">
                      <i class="iconoir-mail-out fs-20 me-1"></i>
                      <span class="text-body fw-semibold">Email :</span>
                      <a
                        href="#"
                        class="text-primary text-decoration-underline"
                      >
                        example@example.com
                      </a>
                    </div>
                    <div class="text-body mb-3 d-flex align-items-center">
                      <i class="iconoir-phone fs-20 me-1 text-muted"></i>
                      <span class="text-body fw-semibold">Phone :</span> +1 123
                      456 789
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary  d-inline-block"
                    >
                      Follow
                    </button>
                    <button type="button" class="btn btn-light  d-inline-block">
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col">
                  <h4 class="card-title">Personal Information</h4>
                </div>
                <div class="col-auto">
                  <a
                    href="#"
                    class="float-end text-muted d-inline-flex text-decoration-underline"
                  >
                    <i class="iconoir-edit-pencil fs-18 me-1"></i>Edit
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <p class="text-muted fw-medium mb-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div class="mb-3">
                <span class="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                  Javascript
                </span>
                <span class="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                  Python
                </span>
                <span class="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                  Angular
                </span>
                <span class="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                  Reactjs
                </span>
                <span class="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                  Flutter
                </span>
              </div>
              <ul class="list-unstyled mb-0">
                <li class="">
                  <i class="las la-birthday-cake me-2 text-secondary fs-22 align-middle"></i>{' '}
                  <b> Birth Date </b> : 06 June 1989
                </li>
                <li class="mt-2">
                  <i class="las la-briefcase me-2 text-secondary fs-22 align-middle"></i>{' '}
                  <b> Position </b> : Full Stack Developer
                </li>
                <li class="mt-2">
                  <i class="las la-university me-2 text-secondary fs-22 align-middle"></i>{' '}
                  <b> Education </b> : Stanford Univercity
                </li>
                <li class="mt-2">
                  <i class="las la-language me-2 text-secondary fs-22 align-middle"></i>{' '}
                  <b> Languages </b> : English, French, Spanish
                </li>
                <li class="mt-2">
                  <i class="las la-phone me-2 text-secondary fs-22 align-middle"></i>{' '}
                  <b> Phone </b> : +91 23456 78910
                </li>
                <li class="mt-2">
                  <i class="las la-envelope text-secondary fs-22 align-middle me-2"></i>{' '}
                  <b> Email </b> : mannat.theme@gmail.com
                </li>
              </ul>
              <div class="row justify-content-center mt-4">
                <div class="col-auto text-end border-end">
                  <span class="thumb-md justify-content-center d-flex align-items-center bg-blue text-white rounded-circle ms-auto mb-1">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                  <p class="mb-0 fw-semibold">Facebook</p>
                  <h4 class="m-0 fw-bold">
                    25k{' '}
                    <span class="text-muted fs-12 fw-normal">Followers</span>
                  </h4>
                </div>
                <div class="col-auto">
                  <span class="thumb-md justify-content-center d-flex align-items-center bg-black text-white rounded-circle mb-1">
                    <i class="fab fa-x-twitter"></i>
                  </span>
                  <p class="mb-0 fw-semibold">Twitter</p>
                  <h4 class="m-0 fw-bold">
                    58k{' '}
                    <span class="text-muted fs-12 fw-normal">Followers</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <ul class="nav nav-tabs mb-3" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link fw-medium active"
                data-bs-toggle="tab"
                href="#post"
                role="tab"
                aria-selected="true"
              >
                Post
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-medium"
                data-bs-toggle="tab"
                href="#gallery"
                role="tab"
                aria-selected="false"
              >
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-medium"
                data-bs-toggle="tab"
                href="#settings"
                role="tab"
                aria-selected="false"
              >
                Settings
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active" id="post" role="tabpanel">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="row d-flex justify-content-center">
                        <div class="col">
                          <p class="text-dark mb-1 fw-semibold">Views</p>
                          <h3 class="my-2 fs-24 fw-bold">24k</h3>
                          <p class="mb-0 text-truncate text-muted">
                            <i class="iconoir-bell text-warning fs-18"></i>
                            <span class="text-dark fw-semibold">1500</span> New
                            subscribers this week
                          </p>
                        </div>
                        <div class="col-auto align-self-center">
                          <div class="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                            <i class="iconoir-eye fs-30 align-self-center text-muted"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="row d-flex justify-content-center">
                        <div class="col">
                          <p class="text-dark mb-1 fw-semibold">Comments</p>
                          <h3 class="my-2 fs-24 fw-bold">15k</h3>
                          <p class="mb-0 text-truncate text-muted">
                            <i class="ti ti-thumb-up text-success fs-18"></i>
                            <span class="text-dark fw-semibold">854</span> New
                            Like this week
                          </p>
                        </div>
                        <div class="col-auto align-self-center">
                          <div class="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                            <i class="iconoir-chat-lines fs-30 align-self-center text-muted"></i>
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
                    <div class="card-header">
                      <div class="row align-items-center">
                        <div class="col">
                          <div class="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-10.jpg"
                              class="thumb-md align-self-center rounded-circle"
                              alt="..."
                            />
                            <div class="flex-grow-1 ms-2">
                              <h5 class="m-0 fs-14">Anderson Vanhron</h5>
                              <p class="text-muted mb-0 fs-12">online</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <div class="d-none d-sm-inline-block align-self-center">
                            <a
                              href="#"
                              class="me-2 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Call"
                              data-bs-custom-class="tooltip-primary"
                            >
                              <i class="iconoir-media-image fs-18"></i>
                            </a>
                            <a
                              href="#"
                              class="me-2 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Attachment"
                              data-bs-custom-class="tooltip-primary"
                            >
                              <i class="iconoir-attachment fs-18"></i>
                            </a>
                            <a
                              href="#"
                              class="me-2 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Delete"
                              data-bs-custom-class="tooltip-primary"
                            >
                              <i class="iconoir-calendar fs-18"></i>
                            </a>

                            <div class="dropdown d-inline-block">
                              <a
                                class="dropdown-toggle arrow-none text-muted"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="true"
                              >
                                <i class="iconoir-more-vert fs-18"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end pb-0">
                                <a class="dropdown-item" href="#">
                                  Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                  Add archive
                                </a>
                                <a class="dropdown-item" href="#">
                                  Delete
                                </a>
                                <a class="dropdown-item text-danger" href="#">
                                  Block
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <form action="#">
                        <div class="">
                          <textarea
                            class="form-control mb-2"
                            id="post-1"
                            rows="5"
                            placeholder="Write here.."
                          ></textarea>
                          <button type="button" class="btn btn-primary">
                            Post
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <img
                        src="assets/images/extra/card/post-1.jpg"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="post-title mt-3">
                        <div class="row">
                          <div class="col">
                            <span class="badge bg-primary-subtle text-primary">
                              Natural
                            </span>
                          </div>
                          <div class="col-auto">
                            <span class="text-muted">
                              <i class="far fa-calendar me-1"></i>02 July 2024
                            </span>
                          </div>
                        </div>

                        <h5 href="#" class="fs-20 fw-bold d-block my-3">
                          There is nothing more beautiful than nature.
                        </h5>
                        <span class="fs-15 bg-light py-2 px-3 rounded">
                          Taking pictures is savouring life intensely.
                        </span>
                        <p class="fs-15 mt-3">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy.
                        </p>
                        <blockquote class="blockquote border-start ps-4">
                          <p class="fs-18">
                            <i>
                              "Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Integer posuere erat a ante."
                            </i>
                          </p>
                          <footer class="blockquote-footer mt-1">
                            Someone famous in{' '}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                        <p class="fs-15">
                          Taking pictures is savouring life intensely, every
                          hundredth of a second – Marc Riboud. Joy in looking
                          and comprehending is nature’s most beautiful gift.
                        </p>
                        <p class="fs-15 mb-0">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy.
                        </p>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <div class="row mb-3">
                        <div class="col">
                          <p class="text-dark fw-semibold mb-0">Artical tags</p>
                        </div>
                      </div>
                      <span class="badge bg-light text-dark px-3 py-2 fw-semibold">
                        Music
                      </span>
                      <span class="badge bg-light text-dark px-3 py-2 fw-semibold">
                        Animals
                      </span>
                      <span class="badge bg-light text-dark px-3 py-2 fw-semibold">
                        Natural
                      </span>
                      <span class="badge bg-light text-dark px-3 py-2 fw-semibold">
                        Food
                      </span>
                      <span class="badge bg-light text-dark px-3 py-2 fw-semibold">
                        Fashion
                      </span>
                      <span class="badge bg-light text-dark px-3 py-2 fw-semibold">
                        Helth
                      </span>
                      <span class="badge bg-light text-dark px-3 py-2 fw-semibold">
                        Charity
                      </span>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body pb-0">
                      <div class="row">
                        <div class="col">
                          <p class="text-dark fw-semibold mb-0">
                            Comments (205)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body border-bottom-dashed">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <div class="row">
                            <div class="col-auto">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt=""
                                class="thumb-md rounded-circle"
                              />
                            </div>
                            <div class="col">
                              <div class="bg-light rounded ms-n2 bg-light-alt p-3">
                                <div class="row">
                                  <div class="col">
                                    <p class="text-dark fw-semibold mb-2">
                                      Martin Luther
                                    </p>
                                  </div>
                                  <div class="col-auto">
                                    <span class="text-muted">
                                      <i class="far fa-clock me-1"></i>30 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                </p>
                                <a href="#" class="text-primary">
                                  <i class="fas fa-reply me-1"></i>Replay
                                </a>
                              </div>
                            </div>
                          </div>
                          <ul class="list-unstyled ms-5">
                            <li>
                              <div class="row mt-3">
                                <div class="col-auto">
                                  <img
                                    src="assets/images/logo-sm.png"
                                    alt=""
                                    class="thumb-md rounded-circle"
                                  />
                                </div>
                                <div class="col">
                                  <div class="bg-light rounded ms-n2 bg-light-alt p-3">
                                    <div class="row">
                                      <div class="col">
                                        <p class="text-dark fw-semibold mb-2">
                                          Metrica Author
                                        </p>
                                      </div>
                                      <div class="col-auto">
                                        <span class="text-muted">
                                          <i class="far fa-clock me-1"></i>37
                                          min ago
                                        </span>
                                      </div>
                                    </div>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking at its
                                      layout.
                                    </p>
                                    <p class="mb-0">Thank you</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class="mt-3">
                          <div class="row">
                            <div class="col-auto">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt=""
                                class="thumb-md rounded-circle"
                              />
                            </div>
                            <div class="col">
                              <div class="bg-light rounded ms-n2 bg-light-alt p-3">
                                <div class="row">
                                  <div class="col">
                                    <p class="text-dark fw-semibold mb-2">
                                      Joseph Rust
                                    </p>
                                  </div>
                                  <div class="col-auto">
                                    <span class="text-muted">
                                      <i class="far fa-clock me-1"></i>40 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                                <p>
                                  Is it a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout?
                                </p>
                                <a href="#" class="text-primary">
                                  <i class="fas fa-reply me-1"></i>Replay
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="mt-3">
                          <div class="row">
                            <div class="col-auto">
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt=""
                                class="thumb-md rounded-circle"
                              />
                            </div>
                            <div class="col">
                              <div class="bg-light rounded ms-n2 bg-light-alt p-3">
                                <div class="row">
                                  <div class="col">
                                    <p class="text-dark fw-semibold mb-2">
                                      Matt Rosales
                                    </p>
                                  </div>
                                  <div class="col-auto">
                                    <span class="text-muted">
                                      <i class="far fa-clock me-1"></i>40 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                                <p>
                                  Is it a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout?
                                </p>
                                <a href="#" class="text-primary">
                                  <i class="fas fa-reply me-1"></i>Replay
                                </a>
                              </div>
                            </div>
                          </div>
                          <ul class="list-unstyled ms-5">
                            <li>
                              <div class="row mt-3">
                                <div class="col-auto">
                                  <img
                                    src="assets/images/logo-sm.png"
                                    alt=""
                                    class="thumb-md rounded-circle"
                                  />
                                </div>
                                <div class="col">
                                  <div class="bg-light rounded ms-n2 bg-light-alt p-3">
                                    <div class="row">
                                      <div class="col">
                                        <p class="text-dark fw-semibold mb-2">
                                          Metrica Author
                                        </p>
                                      </div>
                                      <div class="col-auto">
                                        <span class="text-muted">
                                          <i class="far fa-clock me-1"></i>37
                                          min ago
                                        </span>
                                      </div>
                                    </div>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking at its
                                      layout.
                                    </p>
                                    <p class="mb-0">Thank you</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <p class="text-dark fw-semibold mb-0">
                            Leave a comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <form>
                        <div class="form-group mb-3">
                          <textarea
                            class="form-control"
                            rows="5"
                            id="leave_comment"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div class="row">
                          <div class="col-sm-12 text-end">
                            <button type="submit" class="btn btn-primary px-4">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane p-3" id="gallery" role="tabpanel">
              <div id="grid" class="row g-0">
                <div class="col-md-6 col-lg-4 picture-item">
                  <a href="assets/images/extra/card/img-1.jpg" class="lightbox">
                    <img
                      src="assets/images/extra/card/img-1.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-md-6 col-lg-4 picture-item picture-item--overlay">
                  <a href="assets/images/extra/card/img-2.jpg" class="lightbox">
                    <img
                      src="assets/images/extra/card/img-2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-md-6 col-lg-4 picture-item">
                  <a href="assets/images/extra/card/img-3.jpg" class="lightbox">
                    <img
                      src="assets/images/extra/card/img-3.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-md-6 col-lg-4 picture-item picture-item--h2">
                  <a href="assets/images/extra/card/img-4.jpg" class="lightbox">
                    <img
                      src="assets/images/extra/card/img-4.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-md-6 col-lg-4 picture-item">
                  <a href="assets/images/extra/card/img-5.jpg" class="lightbox">
                    <img
                      src="assets/images/extra/card/img-5.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-md-6 col-lg-4 picture-item picture-item--overlay">
                  <a href="assets/images/extra/card/img-6.jpg" class="lightbox">
                    <img
                      src="assets/images/extra/card/img-6.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="tab-pane p-3" id="settings" role="tabpanel">
              <div class="card">
                <div class="card-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h4 class="card-title">Personal Information</h4>
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      First Name
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <input class="form-control" type="text" value="Rosa" />
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      Last Name
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <input class="form-control" type="text" value="Dodson" />
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      Company Name
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <input
                        class="form-control"
                        type="text"
                        value="MannatThemes"
                      />
                      <span class="form-text text-muted font-12">
                        We'll never share your email with anyone else.
                      </span>
                    </div>
                  </div>

                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      Contact Phone
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="las la-phone"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          value="+123456789"
                          placeholder="Phone"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      Email Address
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="las la-at"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          value="rosa.dodson@demo.com"
                          placeholder="Email"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      Website Link
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="la la-globe"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          value=" https://mannatthemes.com/"
                          placeholder="Email"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      USA
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <select class="form-select">
                        <option>London</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>Thailand</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-lg-9 col-xl-8 offset-lg-3">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                      <button type="button" class="btn btn-danger">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Change Password</h4>
                </div>
                <div class="card-body pt-0">
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      Current Password
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Password"
                      />
                      <a href="#" class="text-primary font-12">
                        Forgot password ?
                      </a>
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      New Password
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <input
                        class="form-control"
                        type="password"
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                      Confirm Password
                    </label>
                    <div class="col-lg-9 col-xl-8">
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Re-Password"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-lg-9 col-xl-8 offset-lg-3">
                      <button type="submit" class="btn btn-primary">
                        Change Password
                      </button>
                      <button type="button" class="btn btn-danger">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Other Settings</h4>
                </div>
                <div class="card-body pt-0">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="Email_Notifications"
                      checked
                    />
                    <label class="form-check-label" for="Email_Notifications">
                      Email Notifications
                    </label>
                    <span class="form-text text-muted fs-12 mt-0">
                      Do you need them?
                    </span>
                  </div>
                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="API_Access"
                    />
                    <label class="form-check-label" for="API_Access">
                      API Access
                    </label>
                    <span class="form-text text-muted font-12 mt-0">
                      Enable/Disable access
                    </span>
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

export default Profile;
