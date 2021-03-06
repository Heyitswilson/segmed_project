import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)