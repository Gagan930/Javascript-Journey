//Constructor Functions

function person(name,age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log(`Hello my name is ${name} and my age is ${age}`);
    }
}

let person1 = new person("Gagan","21");
person1.greet();

 



