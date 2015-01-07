/** @jsx React.DOM */

var React = require('react');
var Levels = require('./Levels.react.js');

module.exports = FuturesApp = React.createClass({


  // Set the initial component state
  getInitialState: function(props){

    props = props || this.props;

    // Set initial application state using props
    return {
      levels: props.levels,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };

  },

  render: function() {
    return (
      <div>
      	<Levels levels={this.state.levels} />
      </div>
    );
  }

});