import {combineReducers} from 'redux';

// import {reducer as main} from '../pages/Home/store/';
// import { reducer as searchReducer } from '../pages/search/store/index'

import * as constant from './constant';

const initState = {
  allBooks: [],
};
const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case constant.ADD_NEW_BOOK:
      return {
        ...state,
        allBooks: [...state.allBooks, action.payload],
      };
    default:
      return state;
  }
};

export default combineReducers({
  main: mainReducer,
});
