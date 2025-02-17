// 💡 Task:
// 1️⃣ Ask the user for their age.
// 2️⃣ Use if-else to determine the ticket price:

// Under 12 years → Child ticket: $5
// Between 12 and 60 → Regular ticket: $10
// Above 60 → Senior discount ticket: $7
// 3️⃣ Show a message with the ticket price.

let age = prompt("What is your age?");

if(age<12){
    console.log("Child ticket: $5");
}
else if(age=>12 && age <=60){
    console.log("Regular ticket: $10");
}

else{
    console.log("Regular ticket: $7");
}

