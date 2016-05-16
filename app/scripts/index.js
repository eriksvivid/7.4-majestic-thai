var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var models = require('./models/model.js');
var menu = require('./components/menu-items.json');
var menuInfo = require('./components/menu.jsx');
var Header = menuInfo.Header;
var Menu = menuInfo.Menu;
var Footer = menuInfo.Footer;
var MenuApp = menuInfo.MenuApp;

Backbone.history.start();

var MenuCollection = new models.MenuCollection( menu );

ReactDOM.render(
  React.createElement(Header),
  document.getElementById('header')
);

ReactDOM.render(
  React.createElement(Menu, {collection: MenuCollection}),
  document.getElementById('container-menu')
);

ReactDOM.render(
  React.createElement(Footer),
  document.getElementById('container-footer')
);
