import { connect } from 'react-redux';
import VideoList from '../components/VideoList.js';
import changeVideo from '../actions/currentVideo.js';

var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

var mapStateToProps = (state) => ({
  videos: state.videoList
});

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
