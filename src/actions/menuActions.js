import { TRAER_TITULOS } from "../types/titulos";
import titulos from "../data/titulos.json";

export const traerTitulos = () => dispatch => {
  dispatch({
    type: TRAER_TITULOS,
    payload: titulos
  });
};
