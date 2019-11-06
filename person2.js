function Person(name,age) {
    this.name = name;
    this.age = age;

    this.about = function() {
        console.log('Hi My name is ' + this.name + ' and I am ' + this.age + ' yrs old.' );
    }
}
Person.prototype.sayHi = function() {
    console.log("Hi I am " + this.name);
};
var kp = new Person('Krishna Prasad',25);
kp.about();
kp.sayHi();
var rk = new Person('Rama krishna',35);
console.log(kp.__proto__)
console.log(rk.__proto__)