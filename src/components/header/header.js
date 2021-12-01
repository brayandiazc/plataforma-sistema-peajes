import userEvent from "@testing-library/user-event";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="{userEvent}" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href={userEvent} className="nav-link px-2 text-secondary">Home</a></li>
              <li><a href={userEvent} className="nav-link px-2 text-white">Features</a></li>
              <li><a href={userEvent} className="nav-link px-2 text-white">Pricing</a></li>
              <li><a href={userEvent} className="nav-link px-2 text-white">FAQs</a></li>
              <li><a href={userEvent} className="nav-link px-2 text-white">About</a></li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;