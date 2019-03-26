import axios from 'axios';
import { GET_IMAGES, SEARCH_TERM } from './types';
import unsplashAPI from '../config';

export const getImages = (query = 'cats') => dispatch => {
  const { ACCESS_KEY, API_ROOT } = unsplashAPI;
  axios
    .get(
      `${API_ROOT}/photos/random/?client_id=${ACCESS_KEY}&query=${query}&count=20`
    )
    .then(res => {
      console.log(res.data);
      const imgUrl = res.data.map(img => img.urls.regular);
      dispatch({
        type: GET_IMAGES,
        payload: imgUrl
      });
    })
    .catch(err => console.log(err));
};
