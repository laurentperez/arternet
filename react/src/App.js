"use strict";

import React, { Component } from 'react';
import About from './About';

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
    this.state = {};
    let numbers = [1,2,3,4,5,6,7];
    let even = [];
    this.state.items = ['Apple', 'Banana', 'Cranberry'];
    numbers.map(n => console.log(n % 2 ? even.push(n) : 'odd'));
    console.log(even);
  };
  render() {
    return (
    <div>
      <Contacts items={this.state.items}/>
      <a href="about">about</a>
    </div>
    );
  }
}
