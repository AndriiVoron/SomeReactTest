import { combineReducers } from 'redux';
import { images } from './imagesList.reducer';

export const rootReducer = combineReducers({
  images: images
});
