import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Separador from "./componentes/Separador.js";
import Navbar from "./componentes/Navbar.js";
import Carousel from "./componentes/Carousel.js";
import InterestContent from "./components/Interest_Content";
import Cataloge from "./components/cataloge.js";
import Footer from "./components/Footer.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <Separador/>
      <InterestContent />
      <Cataloge />
      <Footer />
    </div>
  );
}

export default App;
