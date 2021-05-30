import Employees from '../../Employees';
import EmployeesBirthday from '../../EmployeesBirthday';

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
