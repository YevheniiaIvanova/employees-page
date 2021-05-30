import EmployeesService from '../services/employees-service';
import { LOAD_EMPLOYEES, SET_ACTIVE_EMPLOYEES } from '../constants/actionTypes';
import { saveActiveEmployees, getSavedEmployees } from '../utils/utils';

const loadEmployees = () => {
  return function (dispatch) {
    EmployeesService.getAll().then((data) => {
      dispatch({ type: LOAD_EMPLOYEES, payload: data });
    });
  };
};

const addToActiveEmployees = (employee) => {
  return function (dispatch, getState) {
    const store = getState();
    const activeEmployees = [...store.activeEmployees, employee];
    saveActiveEmployees(activeEmployees);
    dispatch({ type: SET_ACTIVE_EMPLOYEES, payload: activeEmployees });
  };
};

const removeFromActiveEmployees = (employee) => {
  return function (dispatch, getState) {
    const store = getState();
    const activeEmployees = store.activeEmployees;
    const filtredEmployees = activeEmployees.filter((item) => item.id !== employee.id);
    saveActiveEmployees(filtredEmployees);
    dispatch({ type: SET_ACTIVE_EMPLOYEES, payload: filtredEmployees });
  };
};

const loadActiveEmployees = () => {
  const activeEmployees = getSavedEmployees();
  return { type: SET_ACTIVE_EMPLOYEES, payload: activeEmployees };
};

export { loadEmployees, addToActiveEmployees, removeFromActiveEmployees, loadActiveEmployees };
