var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./models');
var MenuApp = require('./components/index.jsx');

ReactDOM.render(
  React.createElement(MenuApp),
  document.getElementById('app')
);
