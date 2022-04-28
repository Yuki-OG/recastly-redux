import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  const apiThing = {
    key: YOUTUBE_API_KEY,
    query: q
  };
  searchYouTube(apiThing, (data) => {
    console.log(data);
    store.dispatch(changeVideoList(data));
    store.dispatch(changeVideo(data[0]));
  });
};

export default handleVideoSearch;
