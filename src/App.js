import React from 'react';

import './App.css';
import Teacher from './components/Teacher';
import Info from './components/Info';
import Course from './components/Course';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Caldwell CPR</h1>
        <Teacher />
        <Info />
        <Course />
      </header>
    </div>
  );
}

export default App;
