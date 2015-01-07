/** @jsx React.DOM */

var React = require('react');

module.exports = Level = React.createClass({
  render: function(){
    var level = this.props.level;
    return (
      <tr>
        <td>{level.descriptor}</td>
        <td>{level.level} </td>
        <td> {level.price} </td>
      </tr>
    )
  }
});