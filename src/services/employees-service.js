import Axios from 'axios';

class EmployeesService {
  constructor() {
    this.URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';
  }

  getAll = async () => {
    const result = await Axios.get(this.URL);
    if (result.status < 200 && result.status > 299) {
      throw new Error(`Could not get  ${this.URL}, status: ${result.status}`);
    }
    return await result.data;
  };
}

export default new EmployeesService();
