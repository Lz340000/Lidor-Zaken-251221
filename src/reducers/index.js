import { combineReducers } from 'redux';
import navigation from './navigation';
import weather from './weather';

const rootReducer = combineReducers({
  navigation,
  weather
});

export default rootReducer;
