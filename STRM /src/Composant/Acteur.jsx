import React from "react";
import "../app.css";
import "../Styles/page-acteur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Acteur = () => {
  return (
    <section id="actor__sheet">
      <div className="container">
        <div className="row align-items-center mx-0">
          <div className="col-md-8 order-2 order-md-1">
            <h2 className="name">Jason</h2>
            <h2 className="title__custom">statam</h2>
            <p className="descript__actor">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              totam dolorem quasi! Quis fugiat totam id fuga non distinctio
              incidunt amet nesciunt itaque, tempor repellat eos natus quo
              mollitia laborum, amet nesciunt itaque, tempor repellat eos natus
              quo mollitia laborum.
            </p>
            <div className="group__actors d-flex justify-content-end px-0">
              <div className="bloc">
                <a href="#.">
                  <img
                    src="./jasonStatham.png"
                    alt="Acteur 01"
                    className="img-fluid p-2 my-5 movie"
                  />
                </a>
              </div>
              <div className="bloc">
                <a href="#.">
                  <img
                    src="./jasonStatham.png"
                    alt="Acteur 02"
                    className="img-fluid p-2 my-5 movie"
                  />
                </a>
              </div>
              <div className="bloc">
                <a href="#.">
                  <img
                    src="./jasonStatham.png"
                    alt="Acteur 03"
                    className="img-fluid p-2 my-5 movie"
                  />
                </a>
              </div>
              <div className="bloc">
                <a href="#.">
                  <img
                    src="./jasonStatham.png"
                    alt="Acteur 03"
                    className="img-fluid p-2 my-5 movie"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 align-items-center order-1 order-md-2">
            <div className="img__container">
              <img
                src="./jasonStatham.png"
                alt="#."
                className="img__actor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acteur;
