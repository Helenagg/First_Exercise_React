import React from "react";
import ReactDom from "react-dom";
import propTypes from "prop-types";

const Jumbotron = (props) => {
    return (
      <div className="p-1 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">{props.titleJumbo}</h1>
          <p className="col-md-8 fs-4">{props.textJumbo}</p>
          <button className="btn btn-primary btn-lg" type="button">{props.button}</button>
        </div>
      </div>
    );
}

export default Jumbotron;
