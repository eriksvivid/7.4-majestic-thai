var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
require('backbone-react-component');

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <div className="background"></div>
          <h1 className ="title">Majestic Thai</h1>
        </header>
      </div>
    );
  }
});
