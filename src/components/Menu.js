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

  actualizarClase(event) {
    console.log(event.target.text);
    this.props.obtenerTituloActual(event.target.text);
  }

  render() {
    //console.log(this.props)
    return (
      <div className="container-menu">
        <h4 className="ml-3">Contenido</h4>
        <div className="list-group">
          {this.props.titulos.map((titulo, indice) => (
            <Link
              onClick={this.actualizarClase}
              key={indice}
              className="list-group-item list-group-item-action"
              to={this.agregarGuionesATitulos(titulo)}
            >
              {titulo}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.titulos;
};

const mapDispatchToProps = {
  traerTitulos,
  obtenerTituloActual
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
