const filterByLetter = (list = [], letterAlphabet = 'A') => {
  return list.filter((item) => item.lastName[0] === letterAlphabet);
};

const sortByLastName = (list) => {
  return list.sort((a, b) => a.lastName.localeCompare(b.lastName));
};

const dateConversion = (date) => {
  const convertedDate = new Date(date);
  const day = convertedDate.getDate();
  const month = convertedDate.toLocaleString('en-us', { month: 'long' });
  const year = convertedDate.getFullYear();

  return `${day} ${month}, ${year} year`;
};

const getMonth = (date) => {
  const convertedDate = new Date(date);
  return convertedDate.toLocaleString('en-us', { month: 'long' });
};

const sortMonths = (list) => {
  const currentDate = new Date();
  const currentMonths = getMonth(currentDate);
  const index = list.indexOf(currentMonths);

  if (index === 0) {
    return list;
  }

  if (index === list.length - 1) {
    return [list[index], ...list.slice(0, list.length - 1)];
  }

  if (index > 0 && index !== list.length - 1) {
    return [...list.slice(index, list.length), ...list.slice(0, index)];
  }
};

const saveActiveEmployees = (employees) => {
  localStorage.setItem('activeEmployees', JSON.stringify(employees));
};

const getSavedEmployees = () => {
  const employees = localStorage.getItem('activeEmployees');
  if (employees) {
    return JSON.parse(employees);
  } else {
    return [];
  }
};

export { filterByLetter, sortByLastName, dateConversion, saveActiveEmployees, getSavedEmployees, getMonth, sortMonths };
