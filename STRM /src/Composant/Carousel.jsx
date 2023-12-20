import React, { useEffect, useState } from "react";
import tmdbService from "./tmdb";
import "../Styles/style-carousel.css";
import "../Styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faChessRook } from "@fortawesome/free-solid-svg-icons";
import { faChildren } from "@fortawesome/free-solid-svg-icons";

function Carousel() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdbService.get("/movie/popular");
        setMovies(response.results);

        // Récupérez la liste des genres
        const genresResponse = await tmdbService.get("/genre/movie/list");
        setGenres(genresResponse.genres);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchMovies();
  }, []);

  // Fonction pour convertir la durée du film de minutes en heures et minutes
  const formatRuntime = (runtime) => {
    if (typeof runtime === "number" && !isNaN(runtime)) {
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;
      return `${hours}h${minutes}m`;
    } else {
      return "Durée inconnue";
    }
  };

  // Fonction pour obtenir les noms réels des catégories
  const getCategoryNames = (genreIds) => {
    const categoryNames = genreIds.map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.name : null;
    });

    return categoryNames.filter((name) => name !== null);
  };

  return (
    <div className="container-fluide">
      <section className="section__un">
        <div
          id="header__carousel"
          className="carousel slide top__header"
          data-bs-ride="carousel"
        >
          <header>
            <img src="Logo.png" alt="Logo Strm" className="logo" />
            <nav>
              <ul className="side-menu">
                <li>
                  <a href="categorie.html" aria-label="Parcourir">
                    <FontAwesomeIcon icon={faPlaneUp} />
                  </a>
                </li>
                <li>
                  <a href="section-films.html" aria-label="Film">
                    <FontAwesomeIcon icon={faClapperboard} />
                  </a>
                </li>
                <li>
                  <a href="section-acteurs.html" aria-label="Acteur">
                    <FontAwesomeIcon icon={faChessRook} />
                  </a>
                </li>
                <li>
                  <a href="#." aria-label="L'équipe">
                    <FontAwesomeIcon icon={faChildren} />À propos
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="container-fluide">
            <div className="carousel-inner">
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    className="d-block w-100"
                    alt={movie.title}
                  />
                  <div className="carousel-caption d-block caption__bloc">
                    <h1>{movie.title}</h1>

                    <div className="specs my-1 mx-0">
                      <span className="movie__duration">
                        <FontAwesomeIcon icon={faClock} />
                        {formatRuntime(movie.runtime)}&emsp;|
                      </span>
                      <span className="movie__exit">{movie.release_date}</span>
                    </div>

                    <p className="synopsys">{movie.overview}</p>

                    <div>
                      {getCategoryNames(movie.genre_ids).map((category, i) => (
                        <a
                          key={i}
                          href="#."
                          className="mt-1 btn btn-outline-light btn-sm color__btn"
                          role="button"
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
