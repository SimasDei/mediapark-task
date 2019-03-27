import { GET_IMAGES, SEARCH_TERM } from '../actions/types';

const initialState = {
  searchTerm: 'cats',
  queries: ['cats'],
  images: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload
      };
    case SEARCH_TERM:
      return {
        ...state,
        queries: action.payload
      };
    default:
      return state;
  }
}
