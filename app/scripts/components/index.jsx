var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var FoodItemView = React.createClass({
render: function(){
  return (
    <li>{this.props.model.get("name")}</li>
  )
}
});

var FoodListView = React.createClass({
render: function(){
  var foodList = this.props.collection.map(function(model){
    return (
      <FoodItemView model={model} key={model.get('name')}/>
    );
  });

  return (
    <ul className="foodItems">
      {foodList}
    </ul>
  )
}
});

module.exports =
FoodItemView,
FoodListView;
