import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/private" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
