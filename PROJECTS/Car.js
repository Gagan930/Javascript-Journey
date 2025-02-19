// 💡 Task:
// 1️⃣ Create a Car class with properties (brand, model, year).
// 2️⃣ Add a displayInfo() method to show car details.
// 3️⃣ Create objects and display their details.

class Car{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo(){
        console.log(`Brand : ${this.brand} | Model : ${this.model} | Year : ${this.year}`);
    }

    startEngine(){
        console.log(`Engine started for ${this.brand} ${this.model}`);
    }
}

let car1 = new Car("Aston martin","BS6","2025");
let car2 = new Car("Maruti","BS6","2024");
let car3 = new Car("Auto","BS6","2023");

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();

car1.startEngine();
car2.startEngine();
car3.startEngine();




