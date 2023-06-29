import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import "./Carrucel_Cataloge.css";
import { useState } from "react";

export default function Carrucel_Cataloge({ data }) {
  const [showButton, setShowButton] = useState(true);
  const [position, setPosition] = useState(0);

  const grupos = [];
  for (let i = 0; i < data.length; i += 3) {
    grupos.push(data.slice(i, i + 3));
  }

  const handleButtonNext = () => {
    setShowButton(false);
    setPosition(position + 1);
  };

  const handleButtonPrev = () => {
    setShowButton(true);
    setPosition(position - 1);
  };

  return (
    <div className="Container-cataloge">
      <ul
        className={"col-container-cataloge"} 
      >
        {grupos[position]?.map((elemento, index) => (
          <li id={index} style={{ listStyleType: "none" }} className="col item">
            <img className="thumb" alt={elemento.span} src={elemento.src} />
            <a
              style={{ textDecoration: "none" }}
              href={elemento.href}
              className="entity-link title-link show-details"
              tabIndex="-1"
            >
              <h3 className="title">
                <span>{elemento.span}</span>
              </h3>
            </a>
            <div className="muesca-cataloge">
              <div className="muesca-diagonal-derecha-cataloge"></div>
              <div className="muesca-diagonal-izquierda-cataloge"></div>
            </div>
          </li>
        ))}
      </ul>
      {showButton ? (
        <FaChevronCircleRight
          className="Btn-Next"
          onClick={handleButtonNext}
        />
      ) : (
        <FaChevronCircleLeft
          className="Btn-Prev"
          onClick={handleButtonPrev}
        />
      )}
    </div>
  );
}

