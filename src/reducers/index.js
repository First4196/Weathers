import { combineReducers } from 'redux';
import WhetherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WhetherReducer
});

export default rootReducer;
