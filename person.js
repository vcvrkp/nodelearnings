var person = {
    name : 'Krishna',
    age : 25,
    about : function() {
        console.log('Hi My name is ' + this.name + ' and I am ' + this.age + ' yrs old.' )
    }
};

person.about();

console.log(person['name']);
console.log(person.age);
