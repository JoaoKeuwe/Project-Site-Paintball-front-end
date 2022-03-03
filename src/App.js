import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
 import Form from './components/Form';
import Login from './components/Login';
import Table from './components/Table';
import Home from './components/Home';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ Home } />
      <Route path="/form" component={ Form } />
      <Route path="/table" component={ Table } />
      </Switch>
    </BrowserRouter>
  );
}
}

export default App;
