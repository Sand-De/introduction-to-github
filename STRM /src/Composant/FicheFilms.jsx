import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbService from "./tmdb";
import "../Styles/page-films.css";

function FicheFilms() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await tmdbService.get(`/movie/${id}`);
        setMovie(movieResponse);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données :",
          error.message
        );
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {/* Section Fiche Film */}
      <section id="movie__sheet">
        <div className="container">
          <div className="row align-items-center mx-0">
            <div className="col-md-8 order-2 order-md-1">
              <h2 className="title__custom">{movie.title}</h2>
              <h4 className="subtitle">{movie.tagline}</h4>
              <p className="descript__movie">{movie.overview}</p>
              {/* Specs Film */}
              <div className="input-group my-4 specs__deux align-self-right">
                <span className="movie__duration">
                  <i className="fa-regular fa-clock"></i>2h30m
                </span>
                <span className="movie__exit">20 septembre 2023</span>
                {/* Étoiles Rating */}
                <div className="start__rating my-0">
                  <input type="radio" id="star5" name="rating" value="5" />
                  <label htmlFor="star5" title="5 star"></label>
                  <input type="radio" id="star4" name="rating" value="4" />
                  <label htmlFor="star4" title="4 star"></label>
                  <input type="radio" id="star3" name="rating" value="3" />
                  <label htmlFor="star3" title="3 star"></label>
                  <input type="radio" id="star2" name="rating" value="2" />
                  <label htmlFor="star2" title="2 star"></label>
                  <input type="radio" id="star1" name="rating" value="1" />
                  <label htmlFor="star1" title="1 star"></label>
                </div>
                {/* Fin Étoiles Rating */}
              </div>
              {/*  Boutons Catégories*/}
              <div className="btn__group">
                <a
                  href="#."
                  className="mt-2 btn btn-outline-light btn-sm color__btn mx-1"
                  role="button"
                >
                  Catégorie01
                </a>
                <a
                  href="#."
                  className="mt-2 btn btn-outline-light btn-sm color__btn"
                  role="button"
                >
                  Catégorie02
                </a>
              </div>
              <div className="group__actors d-flex justify-content-end px-0">
                <div className="bloc">
                  <a href="#.">
                    <img
                      src="https://fakeimg.pl/100x100/575757/909090"
                      alt="Acteur 01"
                      className="img-fluid p-2 my-5 actor"
                    />
                  </a>
                </div>
                <div className="bloc">
                  <a href="#.">
                    <img
                      src="https://fakeimg.pl/100x100/575757/909090"
                      alt="Acteur 01"
                      className="img-fluid p-2 my-5 actor"
                    />
                  </a>
                </div>
                <div className="bloc">
                  <a href="#.">
                    <img
                      src="https://fakeimg.pl/100x100/575757/909090"
                      alt="Acteur 01"
                      className="img-fluid p-2 my-5 actor"
                    />
                  </a>
                </div>
                {/* Add more actor blocks as needed */}
              </div>
            </div>
            <div className="col-md-4 align-items-center order-1 order-md-2">
              <div className="bloc__thumbnail">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="#"
                  className="img-thumbnail fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin Section Fiche Film */}
    </div>
  );
}

export default FicheFilms;
