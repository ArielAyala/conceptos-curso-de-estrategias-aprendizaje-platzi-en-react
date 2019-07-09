import { OBTENER_CLASE } from "../types/clases";

const INITIAL_STATE = {
  clase_actual: "¿Qué es el aprendizaje?"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OBTENER_CLASE:
      return { ...state, clase_actual: action.payload };
    default:
      return state;
  }
};
