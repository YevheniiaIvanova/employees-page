import { useSelector } from 'react-redux';
import { getActiveEmployees } from '../../selectors/employees';
import { dateConversion, sortMonths } from '../../utils/utils';
import BirthdaysList from './BirthdaysList';
import { months } from '../../constants/months.js';
import './EmployeesBirthday.css';

const EmployeesBirthday = () => {
  const activeEmployees = useSelector(getActiveEmployees);
  const convertedEmployeesBirthday = activeEmployees.map((employee) => ({
    ...employee,
    convertedDate: dateConversion(employee.dob),
  }));

  const sortedMonths = sortMonths(months);

  const monthsList = sortedMonths.map((month) => {
    return <BirthdaysList key={month} month={month} employeesList={convertedEmployeesBirthday} />;
  });

  return (
    <section className='employees-birthday column'>
      <h2 className='title section__title'>Employees Birthday</h2>
      {activeEmployees.length === 0 ? 'Employees List is empty' : monthsList}
    </section>
  );
};

export default EmployeesBirthday;
