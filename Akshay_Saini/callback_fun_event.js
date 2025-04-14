//What is a callback function in Javascript

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

// Javascript is a synchronous and single-threaded language
// Blocking the main thread

//Power of Callbacks?

// Deep about event listeners

// Closures Demo with Event Listeners

//Scope Demo with Event listeners

//Garbage Collection & removeEventListeners
