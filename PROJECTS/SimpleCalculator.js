function calculator(num1,num2,operation){
    if(operation=="+"){
        return num1 + num2;
    }
    else if(operation=="-"){
        return num1-num2;
    }
    else if(operation=="/"){
        return num1/num2;
    }
    else if(operation=="*"){
        return num1*num2;
    }
    else{
        console.log("Invalid Operation");
    }
}


let a = 4;
let b = 5;
let operation = "*";

let result = calculator(a,b,operation);
console.log(`Result : ${result}`);