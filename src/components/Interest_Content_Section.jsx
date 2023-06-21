import "./Interest_Content_Section.css";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Interest_Content_Section({ sectionTitle, data }) {
  const [current, setCurrent] = useState(0);
  const [colPrimerAdorno, setColPrimerAdorno] = useState(0);
  const [colSegundoAdorno, setColSegundoAdorno] = useState(0);
  const [colTercerAdorno, setColTercerAdorno] = useState(0);
  const length = data.length;

  const nextNews = () => {
    setCurrent(current === length - 1 ? current : current + 1);
  };

  const prevNews = () => {
    setCurrent(current === 0 ? current : current - 1);
  };

  const estiloAdorno = (color, adorno) => {
    if (adorno === 1) {
      setColPrimerAdorno(color);
    } else if (adorno === 2) {
      setColSegundoAdorno(color);
    } else {
      setColTercerAdorno(color);
    }
  }

  return (
    <div className="section">
      <div className="header">
        <h2 className="section-title">{sectionTitle}</h2>
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
                <li onMouseOver={() => estiloAdorno("#fff", 1)} onMouseOut={() => estiloAdorno("#5A5C5D", 1)} style={{ listStyleType: "none", height: `${news.title1 ? "22rem" : "18rem"}` }} className="col item">
                  {sectionTitle === "Latest Video" ? <div className="play"></div> : <></>}
                  {sectionTitle === "Latest Video" && news.time1 ? <time className="video-time">{news.time1}</time> : <></>}
                  <img className="thumb" alt={news.title1} src={news.src1} />
                  <FaChevronCircleLeft className="left-arrow" onClick={prevNews} style={{display: `${index === 0 ? "none" : "block"}`}} />
                  <div className="contenedor-adorno" style={{ top: `${news.title1 ? "72%" : "88%"}` }}>
                    <div className="adorno izquiera" style={{ backgroundColor: colPrimerAdorno, boxShadow: `${colPrimerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                    <div className="adorno derecha" style={{ backgroundColor: colPrimerAdorno, boxShadow: `${colPrimerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                  </div>
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
                <li onMouseOver={() => estiloAdorno("#fff", 2)} onMouseOut={() => estiloAdorno("#5A5C5D", 2)} style={{ listStyleType: "none", height: `${news.title2 ? "22rem" : "18rem"}` }} className="col item">
                  {sectionTitle === "Latest Video" ? <div className="play"></div> : <></>}
                  {sectionTitle === "Latest Video" && news.time2 ? <time className="video-time">{news.time2}</time> : <></>}
                  <img className="thumb" alt={news.title2} src={news.src2} />
                  <div className="contenedor-adorno" style={{ top: `${news.title2 ? "72%" : "88%"}` }}>
                    <div className="adorno izquiera" style={{ backgroundColor: colSegundoAdorno, boxShadow: `1px 1px 2px 2px ${colSegundoAdorno}`, boxShadow: `${colSegundoAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                    <div className="adorno derecha" style={{ backgroundColor: colSegundoAdorno, boxShadow: `1px 1px 2px 2px ${colSegundoAdorno}`, boxShadow: `${colSegundoAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                  </div>
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
                <li onMouseOver={() => estiloAdorno("#fff", 3)} onMouseOut={() => estiloAdorno("#5A5C5D", 3)} style={{ listStyleType: "none", visibility: `${news.src3 ? "visible" : "hidden"}`, height: `${news.title3 ? "22rem" : "18rem"}` }} className="col item">
                  {sectionTitle === "Latest Video" ? <div className="play"></div> : <></>}
                  {sectionTitle === "Latest Video" && news.time3 ? <time className="video-time">{news.time3}</time> : <></>}
                  <img className="thumb" alt={news.title3} src={news.src3} />
                  <FaChevronCircleRight className="right-arrow" onClick={nextNews} style={{display: `${index === length - 1 ? "none" : "block"}`}} />
                  {news.title3 ? 
                    <div className="contenedor-adorno" style={{ top: `${news.title3 ? "72%" : "88%"}` }}>
                      <div className="adorno izquiera" style={{ backgroundColor: colTercerAdorno, boxShadow: `1px 1px 2px 2px ${colTercerAdorno}`, boxShadow: `${colTercerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                      <div className="adorno derecha" style={{ backgroundColor: colTercerAdorno, boxShadow: `1px 1px 2px 2px ${colTercerAdorno}`, boxShadow: `${colTercerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                    </div> 
                    : <></>}
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
              </ul>
            )}
          </>
        );
      })}
    </div>
  );
}