import React from 'react';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: "Hi,Jimmy",
    avatarUrl: "http://placekitten.com/g/64/64",
  }
};

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
          <div className="UserInfo-name"> {props.author.name} </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'HALA'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }
 render() {
    return (
       <div>
           <h1>{this.props.headerProps}</h1>
           <h1>{this.props.contentProps}</h1>
           <Welcome name="sara" />
           <br/>
           Function Split <br/>
           <Comment date={comment.date}
                    text={comment.text}
                    author={comment.author}
            />
            <HelloUser name="HLA"/>
            <Friends />
       </div> 
    );
 }
}

class HelloUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        username: "HALA"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
        username: e.target.value
    })
  }
  render() {
    return (
      <div>
        Props example; 
        Name Props = <strong>{this.props.name}</strong>
        <h4>Hello {this.state.username}</h4>
        <br/>
        change name:
        <input 
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
        />
      </div>
    )
  }
}

class Welcome extends React.Component {
  render() {
      return (
            <h1>Hello, {this.props.name}</h1>
      );
  }
}

class Friends extends React.Component {
  constructor(props) {
    super(props)

    this.state  = {
      name: 'Alxe',
      friends: ['Migel', 'Angel', 'Lorax', 'Tom']
    }

    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(friend) {
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }
  render() {
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <AddFriend addNew={this.addFriend} />
        <Friend names={this.state.friends} />
      </div>
    );
  }
}

class Friend extends React.Component {
  render() {
    return (
      <div>
        <h4>Friends</h4>
          <ul>
            {this.props.names.map((elem) => <li>{elem}</li>)}
          </ul>
      </div>
    )
  }
}

class AddFriend extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newFriend: ''
    }

    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }

  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }

  handleAddNew() {
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend:''
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    )
  }
}

App.defaultProps = {
	headerProps: "Header from props...",
	contentProps: "Content from props....."
}
export default App;