import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import NoMatch from './NoMatch';
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
	 <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>, 

	document.getElementById('root'));
