import React from "react";
import PropTypes from "prop-types";
function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid mx-5">
          <a className="navbar-brand" href="./">
            TextAnalyzer{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="./">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="./">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

Navbar.propTypes = {
  Logo: PropTypes.string.isRequired,
  AboutText: PropTypes.string,
};

Navbar.defaultPropTypes = {
  Logo: "enter logo here",
  AboutText: "enter text here",
};
