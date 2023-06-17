import React from "react";
import "./Carrucel_Cataloge.css";

const CardCarousel = () => {
  return (
    <ul className="col-container">
      <li style={{ listStyleNone: "none" }} className="col item">
        <img
          className="thumb"
          alt="Ahsoka Premiere Date Revealed"
          src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-date-featured_49f1d5aa.jpeg?region=0%2C0%2C1600%2C900"
        />
        <a
          style={{ textDecoration: "none" }}
          href="https://www.starwars.com/news/ahsoka-premiere-date"
          className="entity-link title-link show-details"
          tabIndex="-1"
        >
          <h3 className="title">
            <span>Ahsoka Premiere Date Revealed</span>
          </h3>
        </a>
        <div className="muesca">
          <div className="muesca-diagonal-derecha"></div>
          <div className="muesca-diagonal-izquierda"></div>
        </div>
      </li>
      <li className="col item">
        <img
          className="thumb"
          alt='"Begin" | Ahsoka'
          src="https://img.youtube.com/vi/J7-zia4oHuk/maxresdefault.jpg"
        />
        <a
          style={{ textDecoration: "none" }}
          href="https://www.youtube.com/watch?v=J7-zia4oHuk"
          className="entity-link title-link youtube-url show-details"
          tabIndex="-1"
        >
          <h3 className="title no_focus">
            <span>"Begin" | Ahsoka</span>
          </h3>
        </a>
        <div className="muesca">
          <div className="muesca-diagonal-derecha"></div>
          <div className="muesca-diagonal-izquierda"></div>
        </div>
      </li>
      <li className="col item">
        <img
          className="thumb"
          alt="Teaser Trailer | Ahsoka"
          src="https://img.youtube.com/vi/HnzNZ0Mdx4I/maxresdefault.jpg"
        />
        <a
          style={{ textDecoration: "none" }}
          href="https://youtu.be/HnzNZ0Mdx4I"
          className="entity-link title-link youtube-url show-details"
          tabIndex="-1"
        >
          <h3 className="title no_focus">
            <span>Teaser Trailer | Ahsoka</span>
          </h3>
        </a>
        <div className="muesca">
          <div className="muesca-diagonal-derecha"></div>
          <div className="muesca-diagonal-izquierda"></div>
        </div>
      </li>
    </ul>
  );
};

export default CardCarousel;
