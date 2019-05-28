import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Welcome from './components/Welcome.js'

function App() {
  return (
    <Router>
    <>
    <div className="App">
        <Route path='/welcome' exact component={Welcome} />

      </div>
    </>
    </Router>
  );
}

export default App;
