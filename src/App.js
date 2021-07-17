import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio3";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Particles params={{particles:
      {number: {value:30, density: {enable:true, value_area:900} },
    shape: {type:"circle", stroke: {width:6, color:"#f9ab00"} } },
            color: {
          value: ['#858585']} }}/>
    <Navbar/>
    <Header />
    <AboutMe />
    <Services />
    <Experience />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;