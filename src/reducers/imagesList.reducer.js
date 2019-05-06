import {
	FETCH_IMAGES_REQUEST,
	FETCH_IMAGES_ERROR,
  FETCH_IMAGES_SUCCESS,
  IMAGES_TO_ALBUMS,
} from '../constants/actionTypes';

const initialState = {
  albumsArr: [],
  imagesArr: [],
  imagesAreLoading: false,
  imagesHaveError: false
}

export function images(state = initialState, action) {
	switch (action.type) {
		case FETCH_IMAGES_REQUEST:
      return { ...state, imagesAreLoading: action.payload }
    case FETCH_IMAGES_ERROR: 
      return { ...state, imagesHaveError: action.payload }
		case FETCH_IMAGES_SUCCESS: 
      return { ...state, imagesArr: action.payload }
    case IMAGES_TO_ALBUMS: 
      return { ...state, albumsArr: action.payload }
		default:
			return state;
	}
};