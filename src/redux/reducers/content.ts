import {
  GET_CONTENT,
  UPDATE_CONTENT,
  EDIT_CONTENT,
  REMOVE_CONTENT,
} from 'redux/actions/types';

const initialState = { content: [] };

export default function content(state = initialState, action: any) {
  switch (action.type) {
    case GET_CONTENT:
      console.log(action.payload);
      return { ...state, content: action.payload };
    case REMOVE_CONTENT:
      console.log(state, action.payload, 'remove');
      return { ...state, content: action.payload };
    case UPDATE_CONTENT:
      return { ...state, content: action.payload };
    case EDIT_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
}
