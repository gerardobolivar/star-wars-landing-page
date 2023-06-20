import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Cataloge from "./components/cataloge.js";
import Footer from "./components/Footer.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Cataloge/>
      <Footer/>
    </div>
  );
}

export default App;
