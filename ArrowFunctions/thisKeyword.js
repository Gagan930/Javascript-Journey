// In regular function, this keyword represents the object that called the function.

const object1 = {
    name : "gagan",
    age : 21,
    city : "kalka",

    greet: function(){
        console.log(`Hello I am ${this.name}`);
    }
};

object1.greet();

// In arrow function, this keyword represents the object that defined the arrow function.
const object2 = {
    name : "gagan",
    age : 20,
    city : "New york",

    greet : ()=>{
        console.log(`Hello I am ${this.name}`);
    }
}

