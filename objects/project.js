// Project 7:  Person Object

// Create an object representing a person with properties like name, age, and occupation.
// Print the person's name and occupation.
// Update the person's age.
// Add a new property, such as isStudent, with a boolean value.
// Print the updated object.

let person = {
    name: "Yoyo",
    age:20,
    occupation:"Farmer"
};

console.log(person.name+" "+person.occupation);
person.age = 21;

// adding a new property to an exsting object
person.isStudent = true;
console.log(person);


