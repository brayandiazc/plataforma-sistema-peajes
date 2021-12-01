import userEvent from "@testing-library/user-event";
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div class="container">
        <footer class="row row-cols-5 py-5 my-5 border-top">
          <div class="col">
            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            </a>
            <p class="text-muted">© 2021</p>
          </div>

          <div class="col">

          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Features</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Pricing</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">FAQs</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Features</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Pricing</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">FAQs</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Features</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">Pricing</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">FAQs</a></li>
              <li class="nav-item mb-2"><a href={userEvent} class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;