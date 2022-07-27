import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import AboutChef from './components/AboutChef';
import Promo from './components/Promo';
import Awards from './components/Awards';
import Menu from './components/Menu'
import Footer from './components/Footer';
import FindUs from "./components/FindUs";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar/>
        <Hero/>
        <About/>
        <Menu/>
        <AboutChef/>
        <Promo/>
        <Awards/>
        <Gallery/>
        <FindUs/>
        <Footer/>
    </>
  );
}

export default App;
