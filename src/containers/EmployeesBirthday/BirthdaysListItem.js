const BirthdaysListItem = ({ ...props }) => {
  const { employee } = props;
  const { lastName, firstName, convertedDate } = employee;
  const fullName = `${lastName} ${firstName}`;

  return (
    <li className='birthdays-list__item'>
      {fullName} - {convertedDate}
    </li>
  );
};

export default BirthdaysListItem;
