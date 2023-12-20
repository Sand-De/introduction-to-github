import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Composant/Footer.jsx";
import FicheFilms from "../Composant/FicheFilms.jsx";
import Carousel from "../Composant/Carousel.jsx";
import Slider from "../Composant/Slider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Films = () => {
  const { id } = useParams();

  return (
    <div>
      <Carousel />
      <FicheFilms movieId={id} />
      <Slider genreId={28} />
      <Slider genreId={12} />
      <Slider genreId={16} />
      <Footer />
    </div>
  );
};

export default Films;