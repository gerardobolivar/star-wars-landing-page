import React from "react";
import "./css_footer.css";

export default function Cataloge() {
  return (
    <div className="container-footer">
      <div className="container-logo">
        <div className="container-text">
          <p className="text-footer">More From Star Wars:</p>
        </div>
        <div className="container-icons">
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
            <div className="separator"></div>
            <div className="social-kids">
              <p>KIDS</p>
            </div>
          </ul>
        </div>
      </div>
      <div className="container-links">
        <h4 className="text-Derechos">
          TM & © Lucasfilm Ltd. All Rights Reserved
        </h4>
        <div className="container-list-links">
          <ul className="list-links">
            <li className="list-item">
              <a href="https://disneytermsofuse.com/">Terms of Use</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Additional Content Information</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Privacy Policy</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Children's Online Privacy Policy</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Your California Privacy Rights</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Star Wars at shopDisney</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Star Wars Helpdesk</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Interest-Based Ads</a>
            </li>
            <div className="separator"></div>
            <li className="list-item">
              <a href="#!">Do Not Sell My Personal Information</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
