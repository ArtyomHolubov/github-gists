import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import createStore from './redux/createStore';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import GistList from './components/GistList';
import { useRouteMatch, Route } from 'react-router-dom';
import { fetchGists } from './redux/slices/gistsSlice';
import Routes from './Routes'

const store = createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <GistList /> */}
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
