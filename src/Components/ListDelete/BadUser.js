import React from 'react';

class BadUser extends React.PureComponent {

  render() {
    const { name, onDeleteClick } = this.props;
    console.log('render');

    return (
      <li>
        <input
          type="button"
          value="Delete"
          onClick={ onDeleteClick }
        />
        { name }
      </li>
    );
  }
}

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Cory' },
        { id: 2, name: 'Meg' },
        { id: 3, name: 'Bob' }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id)
      };
    });
  };


  render() {
    return (
      <div>
        <ul>
          { this.state.users.map((user) => {
            return <BadUser
              key={ user.id }
              name={ user.name }
              onDeleteClick={ () => this.deleteUser(user.id) }
            />;
          }) }
        </ul>
      </div>
    );
  }
}

export default View;
