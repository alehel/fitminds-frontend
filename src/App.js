import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Athletes from './cmp/athletes/Athletes';
import Athlete from './cmp/athletes/Athlete';
import LandingPage from './cmp/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={LandingPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
