import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import FormCard from './pages/FormCard';
import Table from './pages/Table';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/form" component={ FormCard } />
            <Route path="/table" component={ Table } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
