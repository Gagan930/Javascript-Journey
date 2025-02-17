let username = prompt("Enter your name : ");
let userage = prompt ("Enter your age : ");
let isStudent = prompt("Are you a student? (true/flase) : ");

let favHobbies = prompt("Enter your favorite hobbies : (comma-separated) ").split(", ");

let obj = {
    name : username,
    age : userage,
    verfiy : isStudent,  
    hobbies : favHobbies
};

console.log(`His name is ${obj.name},he is ${obj.age} years old. He is a student : ${obj.isStudent}. His hobbies are ${obj.hobbies}`);

console.log(favHobbies);