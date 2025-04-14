// Promise Chaining2

// function asynFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asynFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1....");
// asynFunc1().then((res) => {
//   console.log("fetching data2....");
//   asynFunc2().then((res) => {});
// });

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); //1st
//   await api(); //2nd
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

//Async-await

async function getAllData() {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
  console.log("getting data4....");
  await getData(4);
}

//IIFE

(async function () {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
  console.log("getting data4....");
  await getData(4);
})();

// Promise chaining1
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// // callback hell
// getData(1, () => {
//   console.log("getting data2 ....");
//   getData(2, () => {
//     console.log("getting data3 ....");
//     getData(3, () => {
//       console.log("getting data4 ....");
//       getData(4);
//     });
//   });
// });
