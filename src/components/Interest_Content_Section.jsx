import "./Interest_Content_Section.css";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Interest_Content_Section({ sectionTitle, dataSection }) {
  const [current, setCurrent] = useState(0);
  const [colPrimerAdorno, setColPrimerAdorno] = useState(0);
  const [colSegundoAdorno, setColSegundoAdorno] = useState(0);
  const [colTercerAdorno, setColTercerAdorno] = useState(0);
  const length = dataSection.length;

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

      {dataSection.map((data, index) => {
        return (
          <>
            {index === current && (
              <ul key={index} className="col-container-ic">                               
                <li onMouseOver={() => estiloAdorno("#fff", 1)} onMouseOut={() => estiloAdorno("#5A5C5D", 1)} style={{ listStyleType: "none", height: `${data.title1 ? "22rem" : "18rem"}` }} className="col-ic item">
                  {sectionTitle === "Latest Video" ? <div className="play"></div> : <></>}
                  {sectionTitle === "Latest Video" && data.time1 ? <time className="video-time">{data.time1}</time> : <></>}
                  <img className="thumb" alt={data.title1} src={data.src1} />
                  <FaChevronCircleLeft className="left-arrow-ic" onClick={prevNews} style={{display: `${index === 0 ? "none" : "block"}`}} />
                  <div className="contenedor-adorno" style={{ top: `${data.title1 ? "72%" : "88%"}` }}>
                    <div className="adorno izquiera" style={{ backgroundColor: colPrimerAdorno, boxShadow: `${colPrimerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                    <div className="adorno derecha" style={{ backgroundColor: colPrimerAdorno, boxShadow: `${colPrimerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                  </div>
                  <a
                    style={{ textDecoration: "none" }}
                    href={data.href1}
                    className="entity-link title-link show-details"
                    tabIndex="-1"
                  >
                    <h3 className="title-ic">
                      <span>{data.title1}</span>
                    </h3>
                  </a>
                  <div className="muesca-ic">
                    <div className="muesca-diagonal-derecha-ic"></div>
                    <div className="muesca-diagonal-izquierda-ic"></div>
                  </div>
                </li>                
                <li onMouseOver={() => estiloAdorno("#fff", 2)} onMouseOut={() => estiloAdorno("#5A5C5D", 2)} style={{ listStyleType: "none", height: `${data.title2 ? "22rem" : "18rem"}` }} className="col-ic item">
                  {sectionTitle === "Latest Video" ? <div className="play"></div> : <></>}
                  {sectionTitle === "Latest Video" && data.time2 ? <time className="video-time">{data.time2}</time> : <></>}
                  <img className="thumb" alt={data.title2} src={data.src2} />
                  <div className="contenedor-adorno" style={{ top: `${data.title2 ? "72%" : "88%"}` }}>
                    <div className="adorno izquiera" style={{ backgroundColor: colSegundoAdorno, boxShadow: `1px 1px 2px 2px ${colSegundoAdorno}`, boxShadow: `${colSegundoAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                    <div className="adorno derecha" style={{ backgroundColor: colSegundoAdorno, boxShadow: `1px 1px 2px 2px ${colSegundoAdorno}`, boxShadow: `${colSegundoAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                  </div>
                  <a
                    style={{ textDecoration: "none" }}
                    href={data.href2}
                    className="entity-link title-link youtube-url show-details"
                    tabIndex="-1"
                  >
                    <h3 className="title-ic no_focus">
                      <span>{data.title2}</span>
                    </h3>
                  </a>
                  <div className="muesca-ic">
                    <div className="muesca-diagonal-derecha-ic"></div>
                    <div className="muesca-diagonal-izquierda-ic"></div>
                  </div>
                </li>
                <li onMouseOver={() => estiloAdorno("#fff", 3)} onMouseOut={() => estiloAdorno("#5A5C5D", 3)} style={{ listStyleType: "none", visibility: `${data.src3 ? "visible" : "hidden"}`, height: `${data.title3 ? "22rem" : "18rem"}` }} className="col-ic item">
                  {sectionTitle === "Latest Video" ? <div className="play"></div> : <></>}
                  {sectionTitle === "Latest Video" && data.time3 ? <time className="video-time">{data.time3}</time> : <></>}
                  <img className="thumb" alt={data.title3} src={data.src3} />
                  <FaChevronCircleRight className="right-arrow-ic" onClick={nextNews} style={{display: `${index === length - 1 ? "none" : "block"}`}} />
                  <div className="contenedor-adorno" style={{ top: `${data.title3 ? "72%" : "88%"}` }}>
                    <div className="adorno izquiera" style={{ backgroundColor: colTercerAdorno, boxShadow: `1px 1px 2px 2px ${colTercerAdorno}`, boxShadow: `${colTercerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                    <div className="adorno derecha" style={{ backgroundColor: colTercerAdorno, boxShadow: `1px 1px 2px 2px ${colTercerAdorno}`, boxShadow: `${colTercerAdorno === "#fff" ? "rgba(255, 255, 255, 0.40) 0px 0px 3px 2.5px" : "none"}` }}></div>
                  </div> 
                  <a
                    style={{ textDecoration: "none" }}
                    href={data.href3}
                    className="entity-link title-link youtube-url show-details"
                    tabIndex="-1"
                  >
                    <h3 className="title-ic no_focus">
                      <span>{data.title3}</span>
                    </h3>
                  </a>
                  <div className="muesca-ic">
                    <div className="muesca-diagonal-derecha-ic"></div>
                    <div className="muesca-diagonal-izquierda-ic"></div>
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