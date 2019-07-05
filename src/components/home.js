import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header-home">
          <br />
          <br />
          <div>
            <h3>Conceptos del curso de</h3>
          </div>
          <br />
          <div>
            <h1>
              <b>Estrategias para aprendizaje en linea efectivamente</b>
            </h1>
          </div>
        </div>
        <br />

        <div className="container-datos-home">
          <div className="card datos-home shadow p-3 mb-5 bg-white rounded">
            <div className="card-header">
              <h4>Datos generales</h4>
            </div>
            <div className="card-body">
              {/* <blockquote className="blockquote mb-0">
                <p>Autor: Ariel Ayala</p>
                <p>Autor: Ariel Ayala</p>
              </blockquote> */}
              <p>
                Autor:{" "}
                <a href="https://github.com/ArielAyala" target="_blank">
                  Ariel Ayala
                </a>
              </p>
              <p>
                Conceptos de curso de{" "}
                <a href="https://platzi.com/cursos/aprender/" target="_blank">
                  Curso de Estrategias para Aprender en Línea Efectivamente
                </a>{" "}
                <img
                  src="https://static.platzi.com/media/achievements/badge-estrategias-aprender-enlinea-df2bec85-990c-4afb-964c-8fb2dfbd1c2e.png"
                  height="40px"
                />
              </p>
              <p>
                Teacher: Anahí Salgado{" "}
                <a href="https://twitter.com/anncode" target="_blank">
                  @anncode
                </a>
              </p>
              <p>
                Ingresa a{" "}
                <a href="https://platzi.com/" target="_blank">
                  Platzi.com
                </a>{" "}
                <img
                  src="https://static.platzi.com/static/css/logo.a76b2a87162b3b46529c30d1cb91ccc6.png"
                  height="50px"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="container-datos-home">
          <br />
          <br />
          <Link
            to="/Contenido"
            className="btn text-white btn-lg active mt-5 bg-info"
          >
            Ir al material
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
