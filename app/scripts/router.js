
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'menu': 'menu'
  },

  home: function(){
    ReactDOM.render(
      React.createElement(Home), document.getElementById('app')
    );
  },

  menu: function(){
    ReactDOM.render(
      React.createElement(MenuPage, {collection: menuCollection}), document.getElementById('app')
    );
  }
});
