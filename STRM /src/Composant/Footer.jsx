import React from "react";
import "../Styles/Footer.css";
import "../app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row py-4">
          {/* Strm */}
          <div className="col-md-4">
            <h6 className="text-uppercase mb-3 title__footer">
              <i className="fa-solid fa-play me-3"></i>Strm
            </h6>
            <p className="slogan__strm mb-5">
              <span className="bold">Explorez, vibrez,</span> et{" "}
              <span className="bold">vivez</span> le streaming autrement.
            </p>
          </div>

          {/* Liens Rapides */}
          <div className="col-md-4">
            <h6 className="title__footer text-uppercase mb-3">Liens rapides</h6>
            <p className="link__footer">
            <Link href="/categorie">Catégories</Link>
            </p>
            <p className="link__footer">
            <Link href="/acteur">Acteurs</Link>
            </p>
            <p className="link__footer">
            <Link href="film">Films</Link>
            </p>
            <p className="link__footer">
            <Link href="à propos">À Propos</Link>
            </p>
          </div>

          {/* Médias Sociaux */}
          <div className="col-md-4">
            <h6 className="text-uppercase title__footer">Suivez-nous!</h6>
            <ul className="networks circle">
              <li>
                <a href="#." className="icoFacebook" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#." className="icoLinkedin" aria-label="Linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#." className="icoCourriel" aria-label="Courriel">
                  <i className="fa-regular fa-paper-plane"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="text-center text-dark bottom__footer pb-3">
        <span className="bold">
          Copyright © 2023 • Tous droits réservés par <a href="#."> STRM</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
