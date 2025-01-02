let score = "40abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)  //we can convert data types using constructor functions like String(), which start with capital letters
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"       => 33
// 33abc      => NaN
// null       => 0
// undefined  => NaN
// true/false => 1/0
// "string"   => NaN

let isLoggedIn = 1
isLogged = Boolean(isLoggedIn)
console.log(typeof isLogged)
console.log(isLogged)

// ""  => false
// "string"  => true

let aNumber = 4
inString = String(aNumber)
console.log(typeof inString)
console.log(inString)

// ***********************************************operations*******************************************

let value = 7
let negvalue = -value
console.log(negvalue)

// console.log(2+2)  //add
// console.log(2-2)  //subtract
// console.log(2*2)  //multiply
// console.log(2/2)  //divide
// console.log(2**2) //power
// console.log(3%2)  //modulus

str1 = "2"
str2 = "4"

str3 = (str1+str2)
console.log(str3)

strn1 = "tanish"
strn2 = " singh"

strn3 = (strn1+strn2)
console.log(strn3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log("1" + (2 + 2))
console.log(1 + 2 + "2")
console.log("1" + 2 + "2")

console.log( (3 + 4) * 5 % 6 )

console.log(+true)//1
console.log(+"")  //0

let a = ""
let b = Boolean(a)
console.log(b)
console.log(typeof a)

let gameOperator = 100;
gameOperator++
console.log(gameOperator)
++gameOperator
console.log(gameOperator)
// learn about prefix and postfix increment