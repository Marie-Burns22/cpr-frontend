import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import InfoContainer from './infoComponents/InfoContainer';
import GoogleMap from './layoutComponents/GoogleMap';
import ContactForm from './contactBookingComponents/ContactForm';
import BookingA from './contactBookingComponents/BookingA';
import BookingB from './contactBookingComponents/BookingB';
import TeacherContainer from './teacherComponents/TeacherContainer';
import Jumbo from './layoutComponents/Jumbo';
import Navigation from './layoutComponents/Navigation';
import CourseContainer from './courseComponents/CourseContainer';

function App() {
  return (
    <div className="App">
        <Jumbo />
        <Navigation />
        <InfoContainer />
        <CourseContainer />
        <GoogleMap />
        <ContactForm />
        <BookingA />
        <BookingB />
        <TeacherContainer />

    </div>
  );
}

export default App;
