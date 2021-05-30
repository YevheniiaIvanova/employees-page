import { useDispatch, useSelector } from 'react-redux';
import { activeEmployee, notActiveEmployee } from '../../actions/employess';
import { getActiveEmployees } from '../../selectors/employees';
import './Employee.css';

const Employee = ({ ...props }) => {
  const dispatch = useDispatch();
  const activeEmployees = useSelector(getActiveEmployees);

  const { employee } = props;
  const { firstName, lastName } = employee;
  const fullName = `${lastName} ${firstName}`;
  const isActiveEmployee = activeEmployees.includes(employee);

  const onChangeStatusEmployee = (e) => {
    if (isActiveEmployee) {
      dispatch(notActiveEmployee(employee));
    } else {
      dispatch(activeEmployee(employee));
    }
  };

  return (
    <div className='employee'>
      <h3 className={`title employee__title ${isActiveEmployee ? 'employee__title--active' : ''}`}>{fullName}</h3>
      <form action=''>
        <label className='employee__status-label'>
          <input
            className='employee__status-button'
            type='radio'
            name='status-employee'
            value='false'
            checked={isActiveEmployee ? false : true}
            onChange={onChangeStatusEmployee}
          />
          <span>not active</span>
        </label>
        <label className='employee__status-label'>
          <input
            className='employee__status-button'
            type='radio'
            name='status-employee'
            value='true'
            checked={isActiveEmployee ? true : false}
            onChange={onChangeStatusEmployee}
          />
          <span>active</span>
        </label>
      </form>
    </div>
  );
};

export default Employee;
