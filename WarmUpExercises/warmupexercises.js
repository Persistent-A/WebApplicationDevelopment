const countries = [] //creating an array
countries.push("India"); //push adds elements at the end of the array
countries.unshift("Canada") //unshift adds the element at the start of the array
countries.pop() //pop remove the last element of the array
console.log(countries)
console.log(Array.isArray(countries)) //To check if a variable is an array or not

var person = {
    name: "John",
    age: 30,
    address: {
        street: "st crescent ",
        city: "montreal",
        state: "QC"
    }
}

const {address: {state}} = person
console.log(state)
person.email = "xyz@gmail.com" // to add any information in the array.
console.log(person)



// ARRAY OF OBJECTS
const todo = [
    {
        id: 0,
        text: 'Assignment',
        isDone: true
    },
    {
        id: 1,
        text: 'Workout',
        isDone: false
    },
    {
        id: 2,
        text: 'Lunch and dinner ',
        isDone: true
    }
]

console.log(JSON.stringify(todo)) // File format as JSON 

//Different for loop
for (let element of todo) {
    console.log(element);
}

// HIGHER ORDER FUNCTION forEach, map, filter

// forEach = for looping through the arrays
todo.forEach(function(element) {
    console.log(element.text);
})
/*
map = for every element call the function and store the  
the result to a new Array

.filter = check every element for a condition inside function and 
if it is true it returns element and store it to another array
*/
const workDone = todo.filter(function (element) {
        return element.isDone === true;
}).map(function(element) {
    return element.text;
})
console.log(workDone)

// OBJECT CONSTRUCTION by FUNCTION

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthMonth = function() {
    //     return this.dob.getMonth();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
} 

//method addition using .prototype
Person.prototype.getBirthMonth = function() {
    return this.dob.getMonth();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Instantiate object
const person1 = new Person('A', 'B', '10-1-1990');
const person2 = new Person('C', 'D', '1-1-1960');

console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1)


//CLASS
class AnotherPerson {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const p1 = new AnotherPerson('John', 'Smith', '1-4-1980');
const p2 = new AnotherPerson('Sachin', 'Tendulkar', '1-23-1976');

console.log(p1.getFullName())
