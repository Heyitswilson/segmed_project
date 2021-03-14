import { connect } from 'react-redux';
import { getAllPhotos } from '../../actions/photos_actions';
import { getAllFavorites } from '../../actions/favorites_action';
import { logout } from '../../actions/session_actions';
import Photos from './photos';

const mSTP = state => {
    return {
        photos: state.entities.photos,
        favorites: state.entities.favorites,
        user: state.session.id,
        errors: state.errors.photos
    }
};

const mDTP = dispatch => ({
    getAllPhotos: () => dispatch(getAllPhotos()),
    getAllFavorites: (userId) => dispatch(getAllFavorites(userId)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Photos);