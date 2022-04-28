import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div>
    <div className="video-list">
      {props.videos ?
        props.videos.map(video => (
          <VideoListEntry
            key={video.etag}
            video={video}
            handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}
          />
        )) : 'Fail'}
    </div>
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
