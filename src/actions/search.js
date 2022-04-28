import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';

var handleVideoSearch = function(query = 'cool cats') {

  return (dispatch) => {
    const options = {
      key: YOUTUBE_API_KEY,
      query: query
    };
    searchYouTube(options, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};


export default handleVideoSearch;
