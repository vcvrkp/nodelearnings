// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.
function math() {
var a = 1;
var b = 2;
var c = a + b;

console.log(c);
console.log('Testing Hello NodeJs');
}
//math();

function callerMethod(fn) {
    fn();
}

callerMethod(math);

var sayHello = function() {
    console.log("Hello .. Krishna");
}

sayHello();
callerMethod(sayHello)