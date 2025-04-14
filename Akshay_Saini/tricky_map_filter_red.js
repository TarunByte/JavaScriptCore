const user = [
  { firstName: "akshay", lastName: "saini", age: 22 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 22 },
];

/*

// list of full names
// ["akshay saini", "donald trump"...]
// function which is passed inside the map will run against each of these objects or each of these values inside this array

const output = user.map((x) => x.firstName + " " + x.lastName);
console.log(output);

*/

/*

// { 22 : 2, 75 : 1, 50 :  1 }

const output = user.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);

*/

/*
// find the firstname of people whose age is less than 30

const output = user.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);

*/
