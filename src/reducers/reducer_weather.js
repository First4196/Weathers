import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  if (action.type == FETCH_WEATHER) {
    // ... is spread operator
    return [action.payload.data, ...state];
  }
  return state;
}
