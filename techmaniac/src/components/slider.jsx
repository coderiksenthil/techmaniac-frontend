import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingSection = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-dark text-white">
        <div className="container-fluid position-relative text-center py-5">
          {/* Background Image */}
          <img
            src="https://source.unsplash.com/1600x900/?gaming,console"
            alt="Steam Deck"
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50"
          />
          {/* Overlay content */}
          <div className="position-relative">
            <h1 className="display-4 fw-bold mb-3">The Steam Deck</h1>
            <p className="lead mb-4">A PC on the go? - Explore the future of portable gaming</p>
            <a
              href="#"
              className="btn btn-teal btn-lg fw-semibold px-4 py-2 text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <i className="bi bi-laptop fs-1 text-teal"></i>
                  <h5 className="card-title mt-3">Powerful Hardware</h5>
                  <p className="card-text">
                    Enjoy AAA titles with a custom AMD APU designed for the Steam Deck.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <i className="bi bi-wifi fs-1 text-teal"></i>
                  <h5 className="card-title mt-3">Seamless Connectivity</h5>
                  <p className="card-text">
                    Dock it to your TV, or use peripherals for an immersive experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <i className="bi bi-controller fs-1 text-teal"></i>
                  <h5 className="card-title mt-3">Portable Gaming</h5>
                  <p className="card-text">
                    Play your Steam library anywhere with portable convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://source.unsplash.com/800x600/?gaming,setup"
                alt="Gaming Setup"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Why Choose the Steam Deck?</h2>
              <p className="lead">
                The Steam Deck is more than just a handheld console—it’s a complete gaming system that brings you the flexibility of a PC combined with the portability of a console.
              </p>
              <p>
                Whether you’re lounging on the couch, traveling, or docked at home, the Steam Deck lets you take your entire Steam library with you. Its powerful hardware means you can play even the most demanding titles without compromise.
              </p>
              <a href="#" className="btn btn-outline-teal btn-lg mt-3">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Ready to Experience the Future of Portable Gaming?</h2>
          <p className="lead mb-4">Pre-order your Steam Deck now and get exclusive early access!</p>
          <a href="#" className="btn btn-light btn-lg px-5 py-2">
            Pre-order Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">© 2024 Steam Deck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingSection;
