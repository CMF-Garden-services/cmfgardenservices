import Navbar from './components/02_navbar/Navbar';
import NavbarBg from './components/02_navbar/NavbarBg';
import Home from './components/03_sections/01_home/Home';
import About from './components/03_sections/02_about/About'
import Locations from './components/03_sections/03_locations/Locations';

function App() {
  return (
    <div className='app'>
          <Navbar />
          <NavbarBg />
          <Home />
          <About />
          {/* <Locations /> */}
    </div>
  );
}

export default App;
