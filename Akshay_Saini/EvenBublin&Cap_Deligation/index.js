document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!");
    e.stopPropagation();
  },
  true
); //Capturing

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
  },
  true
); //Capturing

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
  },
  true
); //Capturing
