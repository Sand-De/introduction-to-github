import React from "react";
import Footer from "../Composant/Footer.jsx";
import Carousel from "../Composant/Carousel.jsx";
import Slider from "../Composant/Slider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Accueil = () => {
  return (
    <div>
      <Carousel />
      <Slider genreId={12} />
      <Slider genreId={28} />
      <Slider genreId={16} />
      <Slider genreId={27} />
      <Slider genreId={80} />
      <Slider genreId={35} />
      <Footer />
    </div>
  );
};

export default Accueil;
