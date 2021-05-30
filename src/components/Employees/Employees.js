import LettersAlphabet from '../../containers/LettersAlphabet';
import './Employees.css';

const Employees = () => {
  return (
    <section className='employees column'>
      <h2 className='title section__title'>Employees</h2>
      <div className='letters'>
        <LettersAlphabet />
      </div>
    </section>
  );
};

export default Employees;
