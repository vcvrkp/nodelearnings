var greetings = require('./greetings.json')

var greet = function() {
    console.log( greetings.te + " ");
}

module.exports = greet;