import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header'; // Import the Header component
import Hero from './components/Hero/Hero';
import ServiceCount from './components/ServiceCount/ServiceCount'; // Import the ServiceCount component
import About from './components/About/About'; // Import the About component
import Service from './components/Srvc/Service';
import ProductSlider from './components/Product/ProductSlider';
import Footer from './components/Footer/Footer';
import ProgramSection from './components/ProgramSection/ProgramSection';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ServiceCount />
      <About />
       {/* <Service />  */}
     <ProductSlider />
    <ProgramSection />
      {/* <Footer /> */}
    </>
  );
};

export default App;
