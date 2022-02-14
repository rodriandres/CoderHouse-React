const React = require('react');
import './App.css';
import Main from './components/Main';

/* state */
const{
  initialStateApp,
  reducerHome,
  AppContext,
} = require('../src/store/reducer');

const useGetValueProvider = (reducer, initialState) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch};
  return value;
}

function App() {

  const valueHome = useGetValueProvider(reducerHome, initialStateApp);

  return (
    <div className="App">
      <AppContext.Provider value={valueHome}>
        <Main/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
