import { GET_IMAGES, SEARCH_TERM, SAVE_QUERY } from '../actions/types';

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
    case SAVE_QUERY:
      return {
        ...state,
        queries: state.queries.concat(action.payload)
      };
    default:
      return state;
  }
}
