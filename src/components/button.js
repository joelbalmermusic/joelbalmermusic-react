import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "this is a title!"};
    this.myClassMethod = this.myClassMethod.bind(this);
  }

  myClassMethod() {
    this.setState({title: "I've changed the title!"});
  }

  render() {  
    return (
      <button onClick={this.myClassMethod}>
        Hello: {this.props.text + " And, " + this.state.title}
      </button>
    );
  }
}

export default Button;