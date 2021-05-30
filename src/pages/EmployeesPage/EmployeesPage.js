import Employees from '../../components/Employees';
import EmployeesBirthday from '../../containers/EmployeesBirthday';
import './EmployeesPage.css';

const EmployeesPage = () => {
  return (
    <div className='employees-page'>
      <h1 className='employees-page__title title'>Employees Page</h1>
      <div className='container'>
        <Employees />
        <EmployeesBirthday />
      </div>
    </div>
  );
};

export default EmployeesPage;
