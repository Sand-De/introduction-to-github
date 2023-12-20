import React from "react";
import Footer from "../Composant/Footer.jsx";
import Carousel from "../Composant/Carousel.jsx";
import Slider from "../Composant/Slider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Équipe = () => {
    return (
      <div>
        <Carousel />
        <Slider />
        <Footer />
      </div>
    );
  };
  
  export default Équipe;
  