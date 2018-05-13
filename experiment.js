let moment = require('moment')
var a = moment();
var b = moment([1990, 04, 08]);

console.log(a.diff(b,'years'))