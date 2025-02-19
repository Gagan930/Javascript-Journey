//  Example (Dog Class Inherits from Animal Class):

class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
    makesound(){
        console.log(`${this.name} says ${this.sound}`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name,"woof");
        this.name = name;
        this.breed = breed;
        
    }
    showbreed(){
        console.log(`${this.name} is a ${this.breed}`);
    }
}

let dog = new Dog("Bravopreet","German Shepherd");
dog.showbreed();
dog.makesound();