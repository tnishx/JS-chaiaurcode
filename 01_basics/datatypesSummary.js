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


//***********************************************************memory***************************************************************

// stack => (primitive), Heap => (refrence/non-primitive)
// in stack we get duplicate value so change is applied to only the variable which we're changing
// in heap we get refrence of the original value so the change made is apllied to both varibale

/*Stack*/
let myFootballName = "CAFU"
let myAnotherName = myFootballName
myAnotherName = "MALDINI"

console.log(myFootballName)
console.log(myAnotherName)

/*Heap*/
let userOne = {
    name: "ramos",
    email: "ramos@brixit",
}

let userTwo = userOne

userTwo.email = "walker@fragile"

console.log(userOne)
console.log(userTwo)

