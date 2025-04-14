const URL = "https://meowfacts.herokuapp.com";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// Async await
const getFacts = async () => {
  try {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    factPara.innerText = data.data[0];
  } catch (error) {
    console.log("E: ", error);
  }
};

//Promise chaining
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[0].text;
//     });
// }

btn.addEventListener("click", getFacts);
