import './App.css';
import Navbar from './components/02_navbar/Navbar';
import NavbarBg from './components/02_navbar/NavbarBg';
import Home from "./components/03_sections/01_home/Home"
import About from './components/03_sections/02_about/About';
import Services from './components/03_sections/03_services/Services';

function App() {
  return (
    <div>
          <Navbar />
          <NavbarBg />
          {/* <Home /> */}
          {/* <About /> */}
    </div>
  );
}

export default App;
