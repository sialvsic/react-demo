import React from 'react';

class GoodUser extends React.PureComponent {

  onDeleteClick = () => {
    // No bind needed since we can compose the relevant data for this item here
    this.props.onClick(this.props.user.id);
  };

  render() {
    const { user } = this.props;
    console.log('render');

    return (
      <li>
        <input
          type="button"
          value="Delete"
          onClick={ this.onDeleteClick }
        />
        { user.name }
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

  renderUser = user => {
    return <GoodUser key={ user.id } user={ user } onClick={ this.deleteUser }/>;
  };

  render() {
    return (
      <div>
        <ul>
          { this.state.users.map(this.renderUser) }
        </ul>
      </div>
    );
  }
}

export default View;
