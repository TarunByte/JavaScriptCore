// Primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.


const isLoggedIn = false
const outsideTemp = null
let userEmail --> undefined
*/

const score = 100
const scoreValue = 100.3

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraaj", "doga"];

let myObj = {
    name: "kartik",
    age : 18
}

const myFunc = function(){
    console.log("Hello");
}

console.log(typeof heros)

//************************************************************************************************************* 

// Stacks (primitive)   Heap (Non - primitive)

let myYoutubename = "hiteshchaudharydotcom"
let anotherName = myYoutubename
anotherName = "letsPlayGames"

console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email: "user@Gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Hitesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)