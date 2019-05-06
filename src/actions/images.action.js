import {
	FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_ERROR,
    FETCH_IMAGES_SUCCESS,
    IMAGES_TO_ALBUMS,
} from '../constants/actionTypes';

import ImageDto from '../models/images.model';
import AlbumDto from '../models/album.model';

function imagesFetchAction(bool) {
    return {
        type: FETCH_IMAGES_REQUEST,
        payload: bool
    };
};

function imagesFetchError(bool) {
    return {
        type: FETCH_IMAGES_ERROR,
        payload: bool
    };
};

function imagesFetchSuccess(arr) {
    let stabArr = arr.map(image => {
        const imgObg = new ImageDto(image);
        return imgObg;
    });
  return {
      type: FETCH_IMAGES_SUCCESS,
      payload: stabArr
  };
};
function albumsData(arr) {
    const albumsArr = [];
    arr.forEach(image => {
        let album = albumsArr.find((albumItem) => albumItem.id === image.albumId);
        if(!album){
            const newAlbum = new AlbumDto(image);
            albumsArr.push(newAlbum);
            album = newAlbum;
        }
        album['images'].push(image.id);
    });
    return {
        type: IMAGES_TO_ALBUMS,
        payload: albumsArr
    };
};

export function imagesFetchData() {
    return (dispatch) => {
        dispatch(imagesFetchAction(true));

        fetch('https://jsonplaceholder.typicode.com/photos')
          .then((response) => {
              if (!response.ok) throw Error(response.statusText);
              dispatch(imagesFetchAction(false));
              return response;
          })
          .then((response) => response.json())
          .then((response) => {
            dispatch(albumsData(response));
            dispatch(imagesFetchSuccess(response));
            return response;
          })
          .catch((error) => {
              console.log(`ERROR in groupsFetchData: ${error}`);
              return dispatch(imagesFetchError(true));
          });
    };
};
