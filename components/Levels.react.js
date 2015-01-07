/** @jsx React.DOM */

var React = require('react');
var Level = require('./Level.react.js');

module.exports = Levels = React.createClass({

  // Render our tweets
  render: function(){

    // Build list items of single tweet components using map
    var content = this.props.levels.map(function(level){
      return (
        <Level key={level._id} level={level} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <tbody className="levels">{content}</tbody>
    )

  }

}); 