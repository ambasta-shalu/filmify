import React from "react";
import dogPic from "../assests/Dog.jpg";

function ErrorCapture() {
  return (
    <div className="error-c container">
      <div className="error-c-content">
        <h1 className="error-c-heading">Landed Nowhere?</h1>
        <p className="error-c-text">
          <strong>Films Not Found</strong>
        </p>
        <p className="error-c-text">This is not where I want to be 😑.</p>
        <div>
          <a className="error-c-btn" href="#">
            <span className="error-c-btn-text nowrap">Get me outta here</span>
          </a>
        </div>
      </div>
      <img className="error-c-img" src={dogPic} alt="Error Dog Pic" />
    </div>
  );
}

export default ErrorCapture;
