import axios from 'axios';
import { GET_IMAGES, SEARCH_TERM, SAVE_QUERY } from './types';
import unsplashAPI from '../config';

export const getImages = state => dispatch => {
  const { ACCESS_KEY, API_ROOT } = unsplashAPI;
  const query = state.searchTerm;
  axios
    .get(
      `${API_ROOT}/photos/random/?client_id=${ACCESS_KEY}&query=${query}&count=20`
    )
    .then(res => {
      // console.log(res.data);
      const imgUrl = res.data.map(img => img.urls.regular);
      dispatch({
        type: GET_IMAGES,
        payload: { imgUrl }
      });
    })
    .catch(err => console.log(err));
};

export const searchTerm = query => dispatch => {
  dispatch({
    type: SEARCH_TERM,
    payload: query
  });
};
export const saveQuery = query => dispatch => {
  dispatch({
    type: SAVE_QUERY,
    payload: query
  });
};
