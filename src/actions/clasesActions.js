import { OBTENER_CLASE } from "../types/clases";

export const obtenerTituloActual = texto => dispatch => {
  dispatch({
    type: OBTENER_CLASE,
    payload: texto
  });
};
