import { connect } from 'react-redux';
import { createFavorite, deleteFavorite } from '../../actions/favorites_action';
import photo from './photo';

const mSTP = state => ({
    user: state.session.id,
    favorites: state.entities.favorites
});

const mDTP = dispatch => ({
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId, photoId) => dispatch(deleteFavorite(favoriteId, photoId))
});

export default connect(mSTP, mDTP)(photo);