import React from 'react';
import { Switch, Route} from 'react-router';
import photosContainer from './photos/photos_container';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';

const App = () => (
    <div className="app">
        <Switch >
            <Route path="/login" component={loginFormContainer}/>
            <Route path="/signup" component={signupFormContainer}/>
            <Route exact path="/" component={photosContainer}/>
        </Switch>
        <Footer/>
    </div>
);

export default App;