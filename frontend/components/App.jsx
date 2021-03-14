import React from 'react';
import { Switch, Route} from 'react-router';
import photosContainer from './photos/photos_container';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app">
        <Switch >
            <ProtectedRoute exact path="/" component={photosContainer}/>
            <Route exact path="/login" component={loginFormContainer}/>
            <Route exact path="/signup" component={signupFormContainer}/>
        </Switch>
    </div>
);

export default App;