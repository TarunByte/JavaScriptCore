//async function will always return Promise
/*
Either we return a promise from an async function or if we don't return a promise if we return a value from this async function then this function will automatically wrap this value inside a promise and return a promise
*/

// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved value!!");
// });

// async function getData() {
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

//Aync awit starts from here

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 40000);
});

// await can only be used inside an async function
async function handlePromise() {
  console.log("Hello world!!");

  //Js Engine was waiting for promise to be resolved
  const val = await p1;
  console.log("Namaste Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste Javascript 2");
  console.log(val2);
}
handlePromise();

// function getData() {
//   // Js Engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));

//   console.log("Namaste JavaScript");
// }

// getData();
