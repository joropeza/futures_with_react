
var GoogleSpreadsheet = require("google-spreadsheet");

function getCandles(cb) {

	//get some data
  var marketSheet = new GoogleSpreadsheet('1MjxmKxResafP5ylUqTVvB2krroEi--6z398RHjv0mqQ');

  marketSheet.getRows( 1, function(err, row_data){
    console.log( 'pulled in '+row_data.length + ' rows ');
    


    var allLevels = [];

    var currentY = false;
    var currentQ = false;
    var currentM = false;
    var currentW = false;
    var currentD = false;

    var levels = [];

    //sort the row_data by date
    row_data.sort(compareByDate);

    for (var i = 0, item; item = row_data[i]; i++) {
      if ((item.candle === 'D' && !currentD) || (item.candle === 'W' && !currentW) || (item.candle === 'M' && !currentM) || (item.candle === 'Q' && !currentQ) || (item.candle === 'Y' && !currentY)) {
        levels.push({"descriptor":item.candle,"level":"Pivot","price": item.p});
        levels.push({"descriptor":item.candle,"level":"S1","price": item.s1});
        levels.push({"descriptor":item.candle,"level":"R1","price": item.r1});
        if (item.candle==='D') {
          levels.push({"descriptor":"Yest","level":"Close","price": item.c});
          currentD = true;
        }
    }
    }

      

    levels.sort(compareByPrice);

    cb(null, levels);

});
}

function compareByPrice(a,b) {
  if (a.price < b.price)
     return 1;
  if (a.price > b.price)
    return -1;
  return 0;
}

function compareByDate(a,b) {
  if (a.end < b.end)
     return 1;
  if (a.end > b.end)
    return -1;
}

module.exports = {
	getCandles: getCandles
}