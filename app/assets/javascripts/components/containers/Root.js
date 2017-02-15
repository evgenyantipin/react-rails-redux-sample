import React, { Component } from 'react';

import { render } from 'react-dom'

import { Provider } from 'react-redux';

import UsersApp from './UsersApp';

import {setUsers} from '../actions/userActions'

import configureStore from '../store/configureStore';

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setUsers(this.props.users));
  }
  render() {
    return (
      <Provider store={store}>
        <UsersApp />
      </Provider>
    );
  }
}
