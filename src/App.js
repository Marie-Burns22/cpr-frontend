import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Info from './components/Info';
import Course from './components/Course';
import GoogleMap from './components/GoogleMap';
import Form from './components/Form';
import BookingA from './components/BookingA';
import BookingB from './components/BookingB';
import TeacherContainer from './teachers/TeacherContainer';

function App() {
  return (
    <div className="App">

        <h1>Caldwell CPR</h1>
        <Info />
        <Course />
        <GoogleMap />
        <Form />
        <BookingA />
        <BookingB />
        <TeacherContainer />

    </div>
  );
}

export default App;
