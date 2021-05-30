import { getMonth, sortByLastName } from '../utils/utils';
import BirthdaysListItem from './BirthdaysListItem';

const BirthdaysList = ({ ...props }) => {
  const { employeesList, month } = props;

  const listBirthdays = sortByLastName(employeesList.filter((employee) => getMonth(employee.dob) === month));

  const employeesBirthdayList = listBirthdays.map((employee) => (
    <BirthdaysListItem key={employee.id} employee={employee} />
  ));

  if (listBirthdays.length === 0) {
    return null;
  }

  return (
    <ul className='birthdays-list'>
      <h3 className='birthdays-list__title'>{month}</h3>
      {employeesBirthdayList}
    </ul>
  );
};

export default BirthdaysList;
