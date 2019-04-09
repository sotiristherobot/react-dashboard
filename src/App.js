import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './components/main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false
    };
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
