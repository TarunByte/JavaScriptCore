const arr = [5, 1, 3, 2, 6];

/*

//map() examples

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 5, 18]

// Binary - ["101", "1", "11", "10", "110"]

let output = arr.map((x) => x * 2);
output = arr.map((x) => x * 3);
output = arr.map((x) => x.toString(2));

console.log(output);

*/

/*
function isEven(x) {
  return x % 2 === 0;
}

const output = arr.filter((x) => x % 2 === 0);

console.log(output);
*/

/*
//Normal function  for adding array values

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

//reduced function for adding array values

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
  }, 0);

  console.log(output);

  */

/*

//Normal function for finding max values in an array

function findMax(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findSum(arr));

//Reduced function for finding max values in an array

const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output);

*/
