// For core modules you need not to mention the path where for custome or own written modules we specify the path.
var util = require('util');

var name = "krishna";
var greeting = util.format('Hi hello %s',name);
console.log(greeting);