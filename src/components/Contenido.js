import React, { Component } from "react";

class Contenido extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="header-contenido container-fluid header border">
          <h2 className="text-right">
            Estrategias para aprendizaje en linea efectivamente
          </h2>
        </div>

        <div className="container contenido border">
          <h3 className="titulo-centrado">Titulo de item</h3>
          <div className="container-menu">
            <div id="list-example" className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                Item 1
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                Item 2
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Item 3
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Item 4
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contenido;
