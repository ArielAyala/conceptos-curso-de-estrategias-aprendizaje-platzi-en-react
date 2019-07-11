import React, { Component } from "react";
import { connect } from "react-redux";
import * as menuActions from "../actions/menuActions";
import * as clasesActions from "../actions/clasesActions";
import { Link } from "react-router-dom";

const { traerTitulos } = menuActions;
const { obtenerTituloActual } = clasesActions;

class Menu extends Component {
  componentDidMount() {
    if (!this.props.titulos.length) {
      this.props.traerTitulos();
    }
  }

  agregarGuionesATitulos(tituloConEspacios) {
    return tituloConEspacios.replace(/\s+/g, "-");
  }

  actualizarClase = event => {
    //event.preventDefault(); // Let's stop this event.
    //event.stopPropagation(); // Really this time.
    const textoMenu = event.target.text;
    this.props.obtenerTituloActual(textoMenu);
  };

  render() {
    return (
      <div className="container-menu">
        <h4 className="ml-3">Contenido</h4>
        <div className="list-group container-opciones">
          {this.props.titulos.titulos.map((titulo, indice) => (
            <Link
              onClick={this.actualizarClase}
              key={indice}
              className="list-group-item list-group-item-action"
              //to={this.agregarGuionesATitulos(titulo)}
              to="#"
            >
              {titulo}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { titulos: state.titulos, claseActual: state.clases };
};

const mapDispatchToProps = {
  obtenerTituloActual,
  traerTitulos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
