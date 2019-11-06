// pass by value example 

function change(b) {
    b = 2;
}

a = 1;
change(a);
console.log(a)

// pass by reference example

function changeObj(myObj) {
    myObj.prop1 = function() {};
    myObj.prop2 = {};
}

var mobj = {};
mobj.prop1 = {};

console.log('mobj before changeObj ' + mobj.prop1);
changeObj(mobj);
console.log('mobj after changeObj ' + mobj.prop1);

