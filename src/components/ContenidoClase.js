import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Clases
import Clase1 from "./clases/Clase1";
import Clase2 from "./clases/Clase2";

class ContenidoClase extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Clase1 />
        <Clase2 />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ContenidoClase);
