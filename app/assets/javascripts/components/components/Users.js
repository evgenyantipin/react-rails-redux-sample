import React, { Component, PropTypes } from 'react';

class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: this.props.users
    };
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const createInput = this.refs.createInput;
    const name = createInput.value;
    const user = { name: name };
    const { AddUser } = this.props;

    AddUser(name).then(() => {
      this.refs.createInput.value = '';
    });

  }

  onUserDelete (user_id) {
    const { DeleteUser } = this.props;
    DeleteUser(user_id)
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleFormSubmit.bind(this) }>
            <input type="text" placeholder="Enter a user" ref="createInput" />
            <button>Create</button>
        </form>

        <table>
          <tbody>
            { this.props.users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    {user.name}
                  </td>
                  <td>
                    <button onClick={ this.onUserDelete.bind(this, user.id) }> Delete </button>
                  </td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Users;
