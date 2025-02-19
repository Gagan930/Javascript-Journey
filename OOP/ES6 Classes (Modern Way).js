// This is the modern way and in this we make a class not constructor functionsand in this class we make constructor

class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }

    // now in this class we can make a method. which can be used by an object   

    makesound(){
        console.log(`This ${this.name} says ${this.sound}`);
    }
}

let dog = new Animal("Dog","Woof");
dog.makesound();