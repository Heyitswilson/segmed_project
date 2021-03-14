import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import React from 'react';
import { Redirect } from 'react-router';

const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={(props) => (
            loggedIn ? <Component {...props}/> : <Redirect to="/login"/>
        )}
    />
)

const mSTP = (state) => ({
    loggedIn: state.session.id
});

export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected))