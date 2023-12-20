import React from "react";
import Footer from "../Composant/Footer.jsx";
import Carousel from "../Composant/Carousel.jsx";
import Slider from "../Composant/Slider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Categorie = () => {
  return (
    <div>
      <Carousel />
      <Slider genreId={28} />
      <Slider genreId={12} />
      <Slider genreId={16} />
      <Slider genreId={35} />
      <Slider genreId={80} />
      <Slider genreId={99} />
      <Slider genreId={18} />
      <Slider genreId={10751} />
      <Slider genreId={14} />
      <Slider genreId={36} />
      <Slider genreId={27} />
      <Slider genreId={10402} />
      <Slider genreId={9648} />
      <Slider genreId={10749} />
      <Slider genreId={878} />
      <Slider genreId={10770} />
      <Slider genreId={53} />
      <Slider genreId={10752} />
      <Slider genreId={37} />
      <Footer />
    </div>
  );
};

export default Categorie;
