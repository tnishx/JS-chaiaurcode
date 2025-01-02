//**********************************************************Primitive************************************************************

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let myName = "tanish"        //string
const score = 100            //number
const scoreValue = 100.3     //number
const isLoggedIn = false     //boolean
const outsideTemp = null     //null
let userEmail;               //undefined
let userEmailId = undefined  //undefined

const id = Symbol('123')         //symbol
const anotherId = Symbol('123')  //symbol
console.log(id === anotherId);
// const bigNumber = 3456543576654356754n


//***********************************************8**Reference (Non primitive)***************************************************

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = { name: "Darth",  age: 20,  }

const myFunction = function(){
    console.log("Hello world");
}

console.table([typeof heros, typeof myObj, typeof myFunction]);

// type of (array and object => object) (function => object function)