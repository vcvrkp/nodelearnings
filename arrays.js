var obj = {
    greet : 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var key = 'greet';
console.log(obj[key]);

var arr = [];

arr.push(1);
arr.push(2);
arr.push(3);

arr.forEach(function(item) {
    console.log(item);
})

var arr1 = [];

arr1.push(function() {
    console.log('Function 1');
});
arr1.push(function() {
    console.log('Function 2');
});
arr1.push(function() {
    console.log('Function 3');
});

arr1.forEach(function(item) {
    item();
})