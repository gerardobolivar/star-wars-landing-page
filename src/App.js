import './App.css';
import Navbar from './componentes/Navbar';
import Carousel from './componentes/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
