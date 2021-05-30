import EmployeesService from '../services/employees-service';
import { LOAD_EMPLOYEES, ACTIVE_EMPLOYEE, NOT_ACTIVE_EMPLOYEE } from '../constants/actionTypes';
import { saveActiveEmployees, getSavedEmployees } from '../utils/utils';

const loadEmployees = () => {
  return function (dispatch) {
    EmployeesService.getAll().then((data) => {
      dispatch({ type: LOAD_EMPLOYEES, payload: data });
    });
  };
};

const activeEmployee = (employee) => {
  return function (dispatch) {
    dispatch({ type: ACTIVE_EMPLOYEE, payload: employee });
  };
};

const notActiveEmployee = (employee) => {
  return { type: NOT_ACTIVE_EMPLOYEE, payload: employee };
};

export { loadEmployees, activeEmployee, notActiveEmployee };
