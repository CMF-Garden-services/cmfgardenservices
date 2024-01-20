import { useState } from "react"
import Navbar from './components/02_navbar/Navbar';
import NavbarBg from './components/02_navbar/NavbarBg';
import Home from './components/03_sections/01_home/Home';
import About from './components/03_sections/02_about/About'
import Locations from './components/03_sections/03_locations/Locations';
import Services from './components/03_sections/04_services/Services';
import Quote from './components/03_sections/05_quote/Quote';
import Footer from './components/03_sections/05_footer/Footer'

const App = () => {
  const[solidNavbar, setSolidNavbar] = useState(false)
  
  return (
    
    <div className='app'>
          <Navbar />
          <NavbarBg solidNavbar={solidNavbar} />
          <Home setSolidNavbar={setSolidNavbar} />
          <About />
          <Locations />
          <Services />
          <Quote />
          <Footer />
    </div>
  );
}

export default App;
