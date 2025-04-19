// function x() {
//   let a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// let z = x();
// console.log(z);
// z();

//Corner Cases

function z() {
  var b = 900;
  function x() {
    let a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

/* 
  Bro Code Closures explained :-

  closure = A function defined inside of another function, the inner function has access to the 
  variables and scope of the outer function. Allow for private variables and state maintenance 
  Used frequently in JS frameworks: React, Vue, Angular
  
*/

//Bro code increment example

// in this state doesn't save
// function increment() {
//   let count = 0;
//   return
//   count++;
//   console.log(`count is increased to ${count}`);
// }

// increment();
// increment();
// increment();
// increment();

//Bro code increment with closure
// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }

//   return { increment, getCount };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());

//Bro code scoreUpdate game wtih closure

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(5);

game.decreaseScore(1);

console.log(`The final score is ${game.getScore()}pts`);
