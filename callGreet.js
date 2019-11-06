var greet = require('./greet');

greet.telugu();
greet.english();


var greet1 = require('./greet1.js');
greet1();
var greet2 = require('./greet2.js').greet;
greet2();
var greet3 = require('./greet3.js');
greet3.greet();
greet3.greeting = "Namaste anna :)";

var greet3a = require('./greet3.js');
greet3a.greet();

var greet4 = require('./greet4')
var grt4 = new greet4();
grt4.greet();

var mve = require('./exportvsmodule');
mve.greet();