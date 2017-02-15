import { SET_USERS, USER_ADD, USER_ADD_SUCCESS, USER_ADD_FAIL, USER_DELETE, USER_DELETE_SUCCESS, USER_DELETE_FAIL } from '../actions/userActions';

const initialState = []

const user = (state, action) => {
  switch (action.type) {
    case USER_ADD_SUCCESS:
      return action.payload

    default:
      return state
  }
}

const users = (state = initialState, action) => {

  switch (action.type) {
    case SET_USERS:
      return action.users;

    case USER_ADD:
      return [
        ...state
      ]

    case USER_ADD_SUCCESS:
      return [
        ...state,
        user(undefined, action)
      ]

    case USER_ADD_FAIL:
      return [
        ...state
      ]

    case USER_DELETE:
      const userId = action.payload;
      return state.filter(user => user.id !== userId)

    case USER_DELETE_SUCCESS:
      return [
        ...state
      ]

    case USER_DELETE_FAIL:
      return [
        ...state
      ]

    default:
      return state;
  }
}


export default users;