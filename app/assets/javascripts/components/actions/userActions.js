export const SET_USERS = 'SET_USERS';

export const USER_ADD = 'USER_ADD';
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS';
export const USER_ADD_FAIL = 'USER_ADD_FAIL';

export const USER_DELETE = 'USER_DELETE';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAIL = 'USER_DELETE_FAIL';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users: users
  };
}

function requestUser() {
  return { type: USER_ADD }
};

function receiveUser(data) {
  return{
    type: USER_ADD_SUCCESS,
    payload: data
  }
};

function receiveUserError(data) {
  return {
    type: USER_ADD_FAIL,
    payload: data
  }
};

export function AddUser(name) {
  return function(dispatch) {
    const user = { name: name };
    dispatch(requestUser())
    return fetch(`/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(data => {
      dispatch(receiveUser(data))
    }).catch(function(ex) {
      dispatch(receiveUserError(ex));
    })
  }
};

export function DeleteUser(user_id) {
  return function(dispatch) {
    const user = { name: name };
    dispatch({ type: USER_DELETE, payload: user_id })
    return fetch(`/users/${user_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: USER_DELETE_SUCCESS });
    }).catch(function(ex) {
      dispatch({ type: USER_DELETE_FAIL, payload: ex });
    })
  }
};