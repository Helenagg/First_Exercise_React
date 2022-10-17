import React from "react";
import ReactDom from "react-dom";
import propTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="container d-flex">
            <div className="card text-center"  style={{width: 250}}>
                <img src={props.image} className="card-img-top" alt="Image Card"/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    <a href="#" className="btn btn-primary">{props.cardButton}</a>
                </div>
            </div>
        </div> 
    );    
}

export default Card;