let age = Number(prompt("Enter your age:"));
let hasLicense = confirm("Do you have a driving license? Click OK for Yes, Cancel for No.");

if (age >= 18 && hasLicense) {
    console.log("You are allowed to drive!");
} else if (age >= 18 && !hasLicense) {
    console.log("You need a license to drive!");
} else {
    console.log("You cannot drive yet!");
}
