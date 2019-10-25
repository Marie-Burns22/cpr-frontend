import React from 'react';

import './App.css';
import Teacher from './components/Teacher';
import Info from './components/Info';
import Course from './components/Course';
import GoogleMap from './components/GoogleMap';
import Form from './components/Form';
import BookingA from './components/BookingA';
import BookingB from './components/BookingB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Caldwell CPR</h1>
        <Teacher />
        <Info />
        <Course />
        <GoogleMap />
        <Form />
        <BookingA />
        <BookingB />
      </header>
    </div>
  );
}

export default App;
