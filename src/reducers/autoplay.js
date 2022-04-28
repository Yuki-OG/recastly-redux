import Redux from 'redux';

var autoPlayReducer = (state = false, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case 'TOGGLE_AUTOPLAY':
      return !state;
    default:
      return state;
  }
};

export default autoPlayReducer;
