import './App.css';
import Navbar from './components/02_navbar/Navbar';
import Home from "./components/03_sections/01_home/Home"
import About from './components/03_sections/02_about/About';
import Services from './components/03_sections/03_services/Services';

function App() {
  return (
    <div className="App">
          {/* <Navbar /> */}
          <Home />
          {/* <About />
          <Services /> */}
    </div>
  );
}

export default App;
