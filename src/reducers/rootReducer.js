import { LOAD_EMPLOYEES, SET_ACTIVE_EMPLOYEES } from '../constants/actionTypes';

const initialState = {
  employees: [],
  activeEmployees: [],
};

const reducer = (state, action) => {
  if (action.type === LOAD_EMPLOYEES) {
    return {
      ...state,
      employees: action.payload,
    };
  }

  if (action.type === SET_ACTIVE_EMPLOYEES) {
    return {
      ...state,
      activeEmployees: action.payload,
    };
  }

  return state;
};

export { initialState, reducer };
