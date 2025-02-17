// 🛠️ Small Project: Student Records 🎓
// 💡 Task:
// 1️⃣ Create an array of student objects, each with name, age, and grade.
// 2️⃣ Loop through the array and print student details.


let student = [
    {name:"Gagan",age :21,class:"10th"},
    {name:"B",age :20,class:"10th"},
    {name:"C",age :19,class:"10th"},
];

for(let key of student){
    console.log(`${key.name} (Age:${key.age}) ,Grade : ${key.class}`);
}

