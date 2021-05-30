import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadEmployees } from '../../actions/employess';
import { getEmployees } from '../../selectors/employees';
import { filterByLetter, sortByLastName } from '../../utils/utils';
import { englishAlphabet } from '../../constants/alphabets';
import './LettersAlphabet.css';

import LetterAlphabet from './LetterAlphabet';
import Employee from '../Employee';

const LettersAlphabet = () => {
  const employees = useSelector(getEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEmployees());
  }, []);

  return englishAlphabet.map((letter) => {
    let employeesArray = [];
    const sortedList = sortByLastName(filterByLetter(employees, letter));

    if (sortedList.length !== 0) {
      employeesArray = sortedList.map((employee) => <Employee key={employee.id} employee={employee} />);
    }

    return (
      <LetterAlphabet className='letter' key={letter} title={letter}>
        {employeesArray.length !== 0 ? employeesArray : '- - - -'}
      </LetterAlphabet>
    );
  });
};

export default LettersAlphabet;
