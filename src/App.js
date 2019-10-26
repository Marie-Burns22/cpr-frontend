import React from 'react';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import InfoContainer from './infoComponents/InfoContainer';
import ContactForm from './contactBookingComponents/ContactForm';
import BookingA from './contactBookingComponents/BookingA';
import BookingB from './contactBookingComponents/BookingB';
import TeacherContainer from './teacherComponents/TeacherContainer';
import Jumbo from './layoutComponents/Jumbo';
import CourseContainer from './courseComponents/CourseContainer';

function App() {
  return (
    <div className="App">
        <Jumbo />
        <Switch>
          <Route exact path="/" component={InfoContainer} />
          <Route path='/teachers' component={TeacherContainer} />
          <Route path='/courses' component={CourseContainer} />
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
        <ContactForm />
        <BookingA />
        <BookingB />
    </div>
  );
}

export default withRouter(App);
