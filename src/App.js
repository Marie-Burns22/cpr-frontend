import React from 'react';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import InfoContainer from './infoComponents/InfoContainer';
import ContactForm from './contactBookingComponents/ContactForm';
import TeacherContainer from './teacherComponents/TeacherContainer';
import Jumbo from './layoutComponents/Jumbo';
import CourseContainer from './courseComponents/CourseContainer';
import Navigation from './layoutComponents/Navigation';
import BridgetForm from './contactBookingComponents/BridgetForm';
import Scheduling from './infoComponents/Scheduling';

function App() {
  return (
    <div className="App">
        <Jumbo />
        <Navigation />
        {/* <Scheduling /> */}
        <Switch>
          <Route exact path="/" component={InfoContainer} />
          <Route exact path="/scheduling" component={Scheduling} />
          <Route path='/teachers' component={TeacherContainer} />
          <Route path='/courses' component={CourseContainer} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/courseForm" component={BridgetForm} />
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
    </div>
  );
}

export default withRouter(App);
