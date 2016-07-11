/*
  Root reducer
 */

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors, // could use courses:courses ES6 shorthand property name
  ajaxCallsInProgress
});

export default rootReducer;
