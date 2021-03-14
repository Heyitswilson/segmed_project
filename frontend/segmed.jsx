import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { getAllPhotos } from './util/photos_api_util'
import { getAllFavorites } from './util/favorites_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getAllPhotos = getAllPhotos;
    window.getAllFavorites = getAllFavorites;
    
    ReactDOM.render(<Root store={store}/>, root);
});