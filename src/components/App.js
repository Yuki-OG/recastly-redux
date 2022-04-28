import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        {/* <Search getYouTubeVideos={this.getYouTubeVideos}/> */}
        <SearchContainer />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        {/* <VideoPlayer video={this.state.currentVideo}/> */}
        <VideoPlayerContainer />
      </div>
      <div className="col-md-5">
        {/* <VideoList
          handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
          videos={this.state.videos}
        /> */}
        <VideoListContainer />
      </div>
    </div>
  </div>
);
  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.


export default App;
