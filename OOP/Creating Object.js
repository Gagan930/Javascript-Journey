// 1. Creating Objects (Object Literals)

let user1 = {
    name:"Gagan",
    age:21,

    greet : function(){
        console.log(`Hello my name is ${this.name}`);
    }
};


user1.greet();
