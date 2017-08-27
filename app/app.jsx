var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}> // the route that always being rendered --> update Navigation.jsx
      <Route path="countdown" component={Countdown}/> // the component route --> update Navigation.jsx
      <IndexRoute component={Timer}/> // if nothing rendered, IndexRoute will
    </Route>
  </Router>,
  document.getElementById('app')
);
