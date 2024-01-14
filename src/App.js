import Navbar from './components/02_navbar/Navbar';
import NavbarBg from './components/02_navbar/NavbarBg';
import Home from './components/03_sections/01_home/Home';
import About from './components/03_sections/02_about/About'
import Locations from './components/03_sections/03_locations/Locations';
import Services from './components/03_sections/04_services/Services';
import Footer from './components/03_sections/05_footer/Footer'

function App() {
  return (
    <div className='app'>
          <Navbar />
          <NavbarBg />
          <Home />
          <About />
          <Locations />
          <Services />
          <Footer />
    </div>
  );
}

export default App;
