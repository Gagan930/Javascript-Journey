// 💡 Task:
// 1️⃣ Ask the user for a number (e.g., 10).
// 2️⃣ Use a while loop to count down to 1.
// 3️⃣ Print "Countdown complete!" when finished.

let countdown = Number(prompt("Enter a number to start countdown:"));

// for(let i=countdown;i>=0;i--){
//     console.log(i);
// }

while(countdown>=0){
    console.log(countdown);
    countdown--;
}