import { LOAD_EMPLOYEES, ACTIVE_EMPLOYEE, NOT_ACTIVE_EMPLOYEE } from '../constants/actionTypes';

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

  if (action.type === ACTIVE_EMPLOYEE) {
    return {
      ...state,
      activeEmployees: [...state.activeEmployees, action.payload],
    };
  }

  if (action.type === NOT_ACTIVE_EMPLOYEE) {
    return {
      ...state,
      activeEmployees: state.activeEmployees.filter((employee) => employee !== action.payload),
    };
  }

  return state;
};

export { initialState, reducer };
