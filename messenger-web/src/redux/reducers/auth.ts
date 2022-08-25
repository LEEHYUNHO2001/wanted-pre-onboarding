import { GET_USERS, UPDATE_CURRENT_USER } from 'redux/actions/types';

const initialState = { users: [], currentUser: null };

export default function auth(state = initialState, action: any) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case UPDATE_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}
