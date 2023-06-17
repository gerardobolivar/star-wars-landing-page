import './Section_Carrucel.css';

export default function Section_Carrucel() {
  return (
    <div className="section-carrucel">
      <ul className="col-container">
        <li style={{ listStyleType: "none" }} className="col item">
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
      </ul>
    </div>
  );
}
