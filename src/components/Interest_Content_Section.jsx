import "./Interest_Content_Section.css";
import { useState } from "react";
import {FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";

export default function Interest_Content_Section({ data }) {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextNews = () => {
    setCurrent(current === length - 1 ? current : current + 1);
  };

  const prevNews = () => {
    setCurrent(current === 0 ? current : current - 1);
  };

  return (
    <div className="section">
      <div className="header">
        <h2 className="section-title">Latest News + Features</h2>
        <a href="#" className="section-view-all">
          <h2>VIEW ALL &gt;</h2>
        </a>
      </div>
      <div className="divider">
        <div className="mancha"></div>
      </div>

      {data.map((news, index) => {
        return (
          <>
            {index === current && (
              <ul key={index} className="col-container">
                <FaChevronCircleLeft className="left-arrow" onClick={prevNews} style={{display: `${index === 0 ? "none" : "block"}`}} />               
                <li style={{ listStyleType: "none" }} className="col item">
                  <img className="thumb" alt={news.title1} src={news.src1} />
                  <a
                    style={{ textDecoration: "none" }}
                    href={news.href1}
                    className="entity-link title-link show-details"
                    tabIndex="-1"
                  >
                    <h3 className="title">
                      <span>{news.title1}</span>
                    </h3>
                  </a>
                  <div className="muesca">
                    <div className="muesca-diagonal-derecha"></div>
                    <div className="muesca-diagonal-izquierda"></div>
                  </div>
                </li>
                <li style={{ listStyleType: "none" }} className="col item">
                  <img className="thumb" alt={news.title2} src={news.src2} />
                  <a
                    style={{ textDecoration: "none" }}
                    href={news.href2}
                    className="entity-link title-link youtube-url show-details"
                    tabIndex="-1"
                  >
                    <h3 className="title no_focus">
                      <span>{news.title2}</span>
                    </h3>
                  </a>
                  <div className="muesca">
                    <div className="muesca-diagonal-derecha"></div>
                    <div className="muesca-diagonal-izquierda"></div>
                  </div>
                </li>
                <li style={{ listStyleType: "none" }} className="col item">
                  <img className="thumb" alt={news.title3} src={news.src3} />
                  <a
                    style={{ textDecoration: "none" }}
                    href={news.href3}
                    className="entity-link title-link youtube-url show-details"
                    tabIndex="-1"
                  >
                    <h3 className="title no_focus">
                      <span>{news.title3}</span>
                    </h3>
                  </a>
                  <div className="muesca">
                    <div className="muesca-diagonal-derecha"></div>
                    <div className="muesca-diagonal-izquierda"></div>
                  </div>
                </li>
                <FaChevronCircleRight className="right-arrow" onClick={nextNews} style={{display: `${index === length - 1 ? "none" : "block"}`}} />
              </ul>
            )}
          </>
        );
      })}
    </div>
  );
}
