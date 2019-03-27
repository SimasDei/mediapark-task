import axios from 'axios';
import { GET_IMAGES, SEARCH_TERM, SAVE_QUERY } from './types';
import unsplashAPI from '../config';

export const getImages = state => dispatch => {
  const { ACCESS_KEY, API_ROOT } = unsplashAPI;
  const query = state.searchTerm.trim();
  if (query.length > 0) {
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
  } else {
    console.error({ message: 'Invalid search term' });
  }
};

export const searchTerm = query => dispatch => {
  dispatch({
    type: SEARCH_TERM,
    payload: query
  });
};
export const saveQuery = query => dispatch => {
  if (query.length > 0) {
    dispatch({
      type: SAVE_QUERY,
      payload: query
    });
  } else {
    console.error({ message: 'No query to save' });
  }
};
