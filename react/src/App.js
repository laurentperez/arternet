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
        </form>
      <div>
      author: {this.state.author}
      </div>
      </div>
    );
  }
};

export default class Contacts extends Component {
  constructor(props) {
    super(props);
  };
  onChange(e) {
  };
  handleClick(i) {
    console.log('You clicked: ' + this.props.items[i]);
  };
  render() {
    console.log(this);
    return (
    	<div className="contacts">
      <div>
        {this.props.items.map(function(item, i) {
          return (
            <div>
            <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
            <ContactItem author={item}/>
            </div>
          );
        }, this)}
      </div>


      </div>      
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
    <div>
      <Contacts items={['Apple', 'Banana', 'Cranberry']}/>
    </div>
    );
  }
}
