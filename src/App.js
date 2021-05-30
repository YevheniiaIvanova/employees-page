import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { initialState, reducer } from './reducers/rootReducer';
import EmployeesPage from './pages/EmployeesPage';
import './App.css';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <EmployeesPage />
      </div>
    </Provider>
  );
};

export default App;
