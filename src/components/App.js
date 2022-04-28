import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import store from '../store/store.js';
import toggleAutoPlay from '../actions/toggleAutoPlay.js';

var handleClick = () => {
  store.dispatch(toggleAutoPlay());
};

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <SearchContainer />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer />
      </div>
      <div className="col-md-5">
        <span style={{paddingRight: '0.5rem' }} >AutoPlay</span>
        <label className="switch">
          <input type="checkbox" onClick={handleClick} ></input>
          <span className="slider"></span>
        </label>
        <VideoListContainer />
      </div>
    </div>
  </div>
);
  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.


export default App;
