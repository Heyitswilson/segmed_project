import { connect } from 'react-redux';
import { getAllPhotos } from '../../actions/photos_actions';
import Photos from './photos';

const mSTP = state => {
    // photos returns an object
    let user = Object.values(state.entities.users)[0]
    return {
        photos: state.entities.photos,
        favorites: user.favorites,
        errors: state.errors.photos
    }
};

const mDTP = dispatch => ({
    getAllPhotos: () => {dispatch(getAllPhotos())}
});

export default connect(mSTP, mDTP)(Photos);
// create reducers first

// map Index to props
// need api_util to call ajax first
// then need action creators to dispatch photos to state
// need reducer to hold state

// test rails Index method first
// might need to seed database first
// so set up aws?
// 4 photos max

// for tonight, let's set up login and signup