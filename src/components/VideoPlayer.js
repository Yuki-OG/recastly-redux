import React from 'react';
import PropTypes from 'prop-types';

var VideoPlayer = ({video, toggle}) => (
  !video
    ? <div className="video-player">Please wait...</div>
    : <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id ? video.id.videoId : ''}${toggle ? '?autoplay=1&mute=1' : ''}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet ? video.snippet.title : 'Fail'}</h3>
        <div>{video.snippet ? video.snippet.description : 'epic fail'}</div>
      </div>
    </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoPlayer;
