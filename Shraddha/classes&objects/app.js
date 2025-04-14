// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const karanArjun = {
//   salary: 50000,
//   calcTax() {
//     console.log("tax rate is 20%");
//   },
// };

// karanArjun.__proto__ = employee;

class ToyotaCar {
  constructor(brand) {
    console.log("creating new object");
    this.brand = brand;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}
// let fortuner = new ToyotaCar("fortuner");
// let lexus = new ToyotaCar("lexus");

class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name); //to invoke parent class constructor
  }
  work() {
    console.log("solve problems, build somthing");
  }
}

let engObj = new Engineer("shradha");
