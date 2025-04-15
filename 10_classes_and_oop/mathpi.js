const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bani");
  },
};

// console.log(Object.getOwnPropertyDescriptors(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//Hitesh sir is OP
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

//My code for Object loop
// for (let key in chai) {
//   console.log(`${key} : ${chai[key]}`);
// }
