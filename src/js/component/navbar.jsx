import React from "react";
import ReactDom from "react-dom";
import propTypes from "prop-types";

const Navbar = (props) => {
    return (
        <nav class="navbar bg-dark">
        <div class="container">
          <a class="navbar-brand link-light">{props.title}</a>
          <ul className="nav justify-content-end">
                  <li className="nav-item">
                      <a className="nav-link active link-light" aria-current="page" href="#">{props.link1}</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link link-light" href="#">{props.link2}</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link link-light" href="#">{props.link3}</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link link-light" href="#">{props.link4}</a>
                  </li>
                  </ul>
        </div>
      </nav>
    );
}

export default Navbar;
