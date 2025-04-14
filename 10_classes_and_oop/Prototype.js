// let myName = "Hitesh     ";

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh Says hello`);
};

// heroPower.hitesh();
myHeros.hitesh();
myHeros.heyHitesh();
// heroPower.heyHitesh();

// Inheritance

const User = {
  name: "Chai",
  email: "Chai@google.com",
};

const Teacher = {
  makevideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
