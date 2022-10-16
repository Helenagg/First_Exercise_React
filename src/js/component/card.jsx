import React from "react";
import ReactDom from "react-dom";
import propTypes from "prop-types";

const Card = (props) => {
    <>
        <div className="card" style="width: 18rem;">
            <img src={props.image} class="card-img-top" alt={props.textImage}/>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href="#" classNameass="btn btn-primary">{props.cardButton}</a>
            </div>
        </div>
    </>
}

export default Card;