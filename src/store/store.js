import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!


const initialState = {
  videoList: [],
  currentVideo: {},
  autoplay: false
};

var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;