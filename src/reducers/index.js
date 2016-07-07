/*
  Root reducer
 */

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses // could use courses:courses ES6 shorthand property name
});

export default rootReducer;
