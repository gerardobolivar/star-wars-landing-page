import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container-fluid mainNavbar">
      <div className="row">
        <div className="col-md-4 text-start">
          <div className="left_sec">
            <ul className="list">
              <a href="https://www.facebook.com">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com">
                <i class="bi bi-youtube"></i>
              </a>
              <a href="https://www.twitter.com">
                <i class="bi bi-twitter"></i>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-md-4 text-center logo">
          <div type="button">
            <a href="/">
              <img
                alt="Star Wars"
                src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                width={"184"}
                height={"80"}
              ></img>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="right_sec">
            <div className="search_group">
              <i className="bi bi-search" style={{ fontSize: "0.8em" }}></i>
              <a href="/" style={{ paddingLeft: "0.25em" }}>
                Search
              </a>
            </div>
            <div className="login_group">
              <i className="bi bi-person"></i>
              <Link to="/login" style={{ paddingLeft: "0.25em"}}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 ">
          <ul className="list-group list-group-horizontal sub_navbar ">
            <li className="list-group-item">
              <a href="/">NEWS+FEATURES</a>
            </li>
            <li className="list-group-item">
              <a href="/">VIDEO</a>
            </li>
            <li className="list-group-item">
              <a href="/">FILMS</a>
            </li>
            <li className="list-group-item">
              <a href="/">SERIES</a>
            </li>
            <li className="list-group-item">
              <a href="/">INTERACTIVE</a>
            </li>
            <li className="list-group-item">
              <a href="/">COMUNITY</a>
            </li>
            <li className="list-group-item">
              <a href="/">DATABANK</a>
            </li>
            <li className="list-group-item">
              <a href="/">DISNEY+</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-12 mainNavFooter text-center"
          style={{
            height: "7vh",
          }}
        >
          <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
        </div>
      </div>
    </div>
  );
}
