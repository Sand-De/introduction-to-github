import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "../Styles/section-slider.css";

const Slider = ({ genreId }) => {
  const [movies, setMovies] = useState([]);
  const [genreName, setGenreName] = useState("");
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Récupérez la liste des genres
        const genresResponse = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=ab84482547885d747fc8285e261dc0ea");
        const genresData = await genresResponse.json();
        const genres = genresData.genres;

        // Trouvez le genre spécifique en fonction de l'ID fourni
        const selectedGenre = genres.find((genre) => genre.id === genreId);

        if (selectedGenre) {
          // Utilisez l'ID du genre spécifique pour récupérer les films
          const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ab84482547885d747fc8285e261dc0ea&with_genres=${genreId}`);
          const moviesData = await moviesResponse.json();

          setMovies(moviesData.results);
          setGenreName(selectedGenre.name);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchMovies();
  }, [genreId]);

  const handleSkip = () => {
    const ratio = Math.floor(window.innerWidth / 270);
    setTransformValue((prevValue) => prevValue - 300);
  };

  return (
    <section id="section">
      <div className="container__movies">
        <h2 className="title__categories">{genreName}</h2>
        <div className="wrapper">
          <div
            className="list__movies"
            style={{ transform: `translateX(${transformValue}px)` }}
          >
            {movies.map((movie, index) => (
              <div className="item__movie" key={index}>
                <Link to={`/Film/${movie.id}`}> {/* Utilisez Link autour du titre */}
                  <img
                    className="img__movie"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </Link>
                <span className="title__movie">
                  <Link to={`/Film/${movie.id}`}>{movie.title}</Link>
                </span>
                <p className="descript__movie">{movie.tagline}</p>
                <a
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  className="mx-0 mt-1 btn btn-outline-light btn-sm watch__btn"
                  role="button"
                >
                  Voir
                </a>
              </div>
            ))}
          </div>
          <i className="fa-solid fa-left-right skip" onClick={handleSkip}></i>
        </div>
      </div>
    </section>
  );
};

export default Slider;
