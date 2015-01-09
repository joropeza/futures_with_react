var express = require('express');
var router = express.Router();
var JSX = require('node-jsx').install();
var React = require('react');
//var FuturesApp = require('./components/FuturesApp.react');
var GoogleSpreadsheet = require("google-spreadsheet");

var marketService = require('../services/marketService');
var Q = require('q');


/* GET home page. */
router.get('/', function(req, res) {

  //get candles... at some point this could include parameters for market and timeframe
  Q.nfcall(marketService.getCandles).then(function(levels) {
 
  console.log(levels);

  // Render React to a string, passing in our fetched tweets
      var markup = React.renderToString(
        FuturesApp({
          levels: levels
        })
      );

  	  res.render('home', {markup: markup});

    });
  

});

module.exports = router;


