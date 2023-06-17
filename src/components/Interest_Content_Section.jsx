import './Interest_Content_Section.css';
import Section_Carrucel from './Section_Carrucel';

export default function Interest_Content_Section() {
  return (
    <div className="section">
      <div className="header">
        <h2>Latest News + Features</h2>
        <h2>VIEW ALL</h2>
      </div>
      <div className="divider">
        <div className="mancha"></div>
      </div>
      <Section_Carrucel/>
    </div>
  );
}