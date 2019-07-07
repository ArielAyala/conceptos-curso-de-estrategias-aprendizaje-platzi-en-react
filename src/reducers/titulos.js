import { TRAER_TITULOS } from "../types/titulos";

const INITIAL_STATE = {
  titulos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TITULOS:
      return { ...state, titulos: action.payload };
    default:
      return state;
  }
};
