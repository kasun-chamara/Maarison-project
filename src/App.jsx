import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServiceCount from './components/ServiceCount/ServiceCount';
import About from './components/About/About';
import Service from './components/Srvc/Service';
import ProductSlider from './components/Product/ProductSlider';
import Footer from './components/Footer/Footer';
import ProgramSection from './components/ProgramSection/ProgramSection';
import MeetMaarisonAcharya from './components/MeetMaarisonAcharya/MeetMaarisonAcharya';
import Summery from './components/Summery/Summery';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ServicesPage from './components/ServicesPage/ServicesPage'; // Import ServicesPage
import Overview from './components/Overview/Overview';
import YouTubeSection from './components/YouTubeSection/YouTubeSection';
import FallingIcons from './components/FallingIcons/FallingIcons';

const App = () => {
  return (
    <Router>
      <Header />
     <FallingIcons />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Summery />
            <About />
            {/* <YouTubeSection /> */}
            <Overview />
            <Service />
            <ProductSlider />
            <ProgramSection />
            <MeetMaarisonAcharya />
            <Footer />
            <WhatsAppButton />
           
          </>
        } />
        <Route path="/products" element={
          <>
            <ProductsPage />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <ServicesPage />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
