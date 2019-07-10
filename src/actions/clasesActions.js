import { OBTENER_CLASE } from "../types/clases";

export const obtenerTituloActual = (titulo) => dispatch => {
  dispatch({
    type: OBTENER_CLASE,
    payload: titulo
  });
};
