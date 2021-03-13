import React from 'react';
import { Switch, Route} from 'react-router';
import sessionForm from './session/session_form';
import photosContainer from './photos/photos_container';

const App = () => (
    <div>
        <h1>Segmed</h1>

        <Switch>
            <Route eact path="/session" component={sessionForm}/>
            <Route exact path="/photos" component={photosContainer}/>
        </Switch>
    </div>
);

export default App;