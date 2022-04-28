import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';
import { Provider } from 'react-redux';
import changeVideoList from './actions/videoList.js';
import changeVideo from './actions/currentVideo.js';
import handleVideoSearch from './actions/search.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

var callback = searchYouTube({query: 'cool cats', key: YOUTUBE_API_KEY}, (data) => {
  store.dispatch(changeVideoList(data));
  store.dispatch(changeVideo(data[0]));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  callback
);
