import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
             <h1>{this.props.headerProps}</h1>
             <h1>{this.props.contentProps}</h1>
             <Welcome name="sara" />
             <Comment date={comment.date}
                      text={comment.text}
                      author={comment.author}
              />
         </div>
      );
   }
}

class Welcome extends React.Component {
  render() {
      return (
            <h1>Hello, {this.props.name}</h1>
      );
  }
}

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

App.defaultProps = {
	headerProps: "Header from props...",
	contentProps: "Content from props....."
}
export default App;