var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var menu = require('./menu-items.json');
var Backbone = require('backbone');
require('backbone-react-component');
console.log(menu)

var Header = React.createClass({
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


var Menu = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleAdd: function(item){
    this.props.addItem(item);
  },

  handleClick: function(item){
  console.log(item.toJSON());
  },
  render: function(){
    // var items = this.props.items;
    var foodItems = this.props.collection.map(function(item){
      var boundItemClick = this.handleClick.bind(this,item);
      return(
        <div className ="menu-items" key={item.cid}>
          <h5>{item.get('item')}<button onClick={boundItemClick} className="glyphicon glyphicon-plus plus-icon" aria-hidden="true"></button></h5>
          <p>{item.get('description')}</p>
          <span>${item.get('price')}</span>
        </div>
        );
      }.bind(this));
      console.log(foodItems);
      return(
        <div className="container menu">
          <div className="col-md-12 menu">
            <div className="row">
              <h2 className="menu-title">Today's Menu</h2>
            </div>
            <div>{foodItems}</div>
          </div>
        </div>
      );
  }
});

var Footer = React.createClass({
  render: function(){
    return(
        <div>
          <div className="container footer">
            <div className="col-md-6 hours">
              <div className="row">
                <p>Hours: Monday-Saturday: 12pm-12pm</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="row">

              </div>
            </div>
          </div>
        </div>
    );
  }
});

var MenuApp = React.createClass({
  render: function(){
    return(
      <div>
        <Menu collection={this.props.collection}/>
        <Footer />
      </div>
    )
  }
});

module.exports = {
  'Header': Header,
  'Menu':Menu,
  'Footer':Footer,
  'MenuApp': MenuApp
};
