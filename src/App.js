import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Info from './components/Info';
import Course from './components/Course';
import GoogleMap from './components/GoogleMap';
import ContactForm from './components/ContactForm';
import BookingA from './components/BookingA';
import BookingB from './components/BookingB';
import TeacherContainer from './teachers/TeacherContainer';
import Jumbo from './components/Jumbo';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
        <Jumbo />
        <Navigation />
        <Info />
        <Course />
        <GoogleMap />
        <ContactForm />
        <BookingA />
        <BookingB />
        <TeacherContainer />

    </div>
  );
}

export default App;
