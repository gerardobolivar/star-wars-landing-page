import React from "react";
import imgLogo from "../img/ahsoka-logo-desktop_d671a444.png";
import CarrucelCataloge from "./Carrucel_Cataloge";
import "./css_cataloge.css";
import DatosCards from "./DatosCards";

export default function Cataloge() {
  return (
    <div className="container-cataloge">
      <div className="container-image">
        <div className="mask">
          <div>
            <img className="img-logo" src={imgLogo} alt="Mi Imagen" />
          </div>
          <div className="container-text">
            <h4 className="">Ahsoka Tano investigates an emerging threat</h4>
            <h4>to the galaxy. Original series streaming August</h4>
            <h4>23, only on Disney+.</h4>
          </div>
          <div>
            <button type="button" className="btn btn-lg">
              EXPLORE
            </button>
          </div>
        </div>
        <span className="gradient-overlay  content-center content-under"></span>
      </div>
      <CarrucelCataloge data = {DatosCards.news}/>
    </div>
    
  );
}
