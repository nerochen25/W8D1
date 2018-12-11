import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to='/'>
        <h1 className='bench-bnb-header'>Bench BnB</h1>
      </Link>
      <GreetingContainer/>
    </header>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
