import React from "react";
import cardImg from "../../img/braden-collum-AFlG5jpMvYg-unsplash.jpg";

const Home = () => {
  return (
    <>
      {/* Top bar */}
      <div className="container-fluid bg-dark py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <h3 className="text-white m-0">Start Bootstrap</h3>
            </div>
            <div className="col d-flex justify-content-end">
              <nav className="navbar navbar-expand-md navbar-dark bg-dark p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="container bg-light p-4 mt-4 rounded-4">
        <h1 className="pt-5 fw-light" style={{ fontSize: "4rem" }}>
          A Warm Welcome!
        </h1>
        <p className="fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint dicta explicabo, nobis
          distinctio iure quod nam molestias ea, asperiores quibusdam reiciendis molestiae eaque ipsum
          dignissimos inventore vero, ullam sit.
        </p>
        <button className="btn btn-primary mb-4">Call to action!</button>
      </div>

      {/* Cards */}
      <div className="container mt-3">
        <div className="row g-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100">
                <img src={cardImg} className="card-img-top" alt="Lombard Street, San Francisco" />
                <div className="card-body text-center">
                  <h5 className="card-title">Class title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vitae tenetur non deserunt.
                  </p>
                </div>
                <div className="card-footer bg-transparent border-top">
                  <button className="btn btn-primary w-100">Find Out More!</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container-fluid bg-dark mt-3">
        <p className="text-center text-white p-3">Copyright Your Website 2018</p>
      </div>
    </>
  );
};

export default Home;