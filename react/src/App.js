import React, { Component } from 'react';

export default class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  onChange(e) {
    console.log("onChange" + e.target.value);
    this.setState({author: e.target.value});
  };
  render() {
    return (
  <div>
      <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>'Add #'</button>
        </form>
      <div>
      author: {this.state.author}
      </div>
      </div>
    );
  }
};

export default class Contacts extends Component {
  render() {
    return (
    	<div>
      <ContactItem />
      </div>      
    );
  }
}

export default class App extends Component {
  render() {
    return (
    <div>
      <Contacts author="john"/>
    </div>
    );
  }
}
