import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container-fluid mainNavbar">
      <div className="row">
        <div className="col-md-4 text-start">
          <div className="left_sec">
            <ul className="list">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-youtube"></i>
              <i class="bi bi-twitter"></i>
            </ul>
          </div>
        </div>
        <div className="col-md-4 text-center logo">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            width={"184"}
            height={"80"}
          />
        </div>
        <div className="col-md-4">
          <div className="right_sec">
            <p>Search</p>
            <p>Login</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 ">
          <ul className="list-group list-group-horizontal sub_navbar ">
            <li className="list-group-item">
              <a href="#">NEWS+FEATURES</a>
            </li>
            <li className="list-group-item">
              <a href="#">VIDEO</a>
            </li>
            <li className="list-group-item">
              <a href="#">FILMS</a>
            </li>
            <li className="list-group-item">
              <a href="#">SERIES</a>
            </li>
            <li className="list-group-item">
              <a href="#">INTERACTIVE</a>
            </li>
            <li className="list-group-item">
              <a href="#">COMUNITY</a>
            </li>
            <li className="list-group-item">
              <a href="#">DATABANK</a>
            </li>
            <li className="list-group-item">
              <a href="#">DISNEY+</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mainNavFooter text-center">
          <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
        </div>
      </div>
    </div>
  );
}
