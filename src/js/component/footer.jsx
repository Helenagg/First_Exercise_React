import React from "react";
import ReactDom from "react-dom";
import propTypes from "prop-types";

const Footer = (props) => {
    return (
        <div className="container text-center bg-secondary">
            <p className="text-white">{props.footer}<a href="#" className="text-white">{props.footerLink}</a>{props.footer2}</p>
        </div>
    );
}

export default Footer;