import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';
import autoPlayReducer from './autoplay.js';

var rootReducer = combineReducers({
  videoList: videoListReducer,
  currentVideo: currentVideoReducer,
  autoplay: autoPlayReducer
});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
