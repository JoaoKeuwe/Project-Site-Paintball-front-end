import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './components/Login';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/form" component={ Form } />
            <Route path="/table" component={ Table } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
