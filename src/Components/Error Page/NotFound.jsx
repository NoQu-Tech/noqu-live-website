import React from "react";
import "./NotFound.css";
import { Helmet } from "react-helmet";
import notfound from '../../assets/404.jpg'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFound" style={{ textAlign: "center", marginTop: "100px" }}>
            <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="description" content="The page you are looking for does not exist." />
                <meta name="robots" content="noindex" />
            </Helmet>

            <img src={notfound} alt="" />
            <a href="/">
            <button>
                Back to Home
            </button>
            </a>
        </div>
    );
};

export default NotFound;