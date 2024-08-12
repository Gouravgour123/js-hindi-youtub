//  Primitive

// 7 types:  String, Number, Boolean, null, undefine, BigInt, Symbol

const score = 100
const scoreValue = 100.3


const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)


const bigNumber = 5141654646854653154n
console.log(bigNumber)


// Reference (Non Primitive)

// Array, Object, Function, 
//  Set, Map, Date, RegExp, Error, Promise

const heros = ["shaktiman", "naagraj", "doga"];

let obj = {
    name: "gourav",
    age: 25,
}

const myFunction = () =>{
    console.log("hello");
}
console.log(typeof scoreValue)