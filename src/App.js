import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import HomePage from './pages/homepage/HomePage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
