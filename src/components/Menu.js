import React, { Component } from "react";
import { connect } from "react-redux";
import * as menuActions from "../actions/menuActions";
import { Link } from "react-router-dom";

class Menu extends Component {
  componentDidMount() {
    if (!this.props.titulos.length) {
      this.props.traerTitulos();
    }
  }

  render() {
    return (
      <div className="container-menu">
        <h4 className="ml-3">Contenido</h4>
        <div className="list-group">
          {/* {this.props.titulos.map((titulo) => (
                <Link
                  className="list-group-item list-group-item-action"
                  to="/prueba"
                >
                  titulo
                </Link>
              ))} */}
          {this.props.titulos.forEach(titulo => (
            <Link
              className="list-group-item list-group-item-action"
              to="/prueba"
            >
              titulo
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

export default connect(
  mapStateToProps,
  menuActions
)(Menu);
