// console.log(2 > 1);  //more than
// console.log(2 >= 1); //more than equal to
// console.log(2 < 1);  //less than
// console.log(2 <= 1); //less than equal to 
// console.log(2 == 1); //equal to
// console.log(2 != 1); //not equal to 


// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
//null is converted to 0 and checked but == and ><(comparison work differnetly on comparison converts into 0) 

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);
//undefined is converted in NaN


// === is strict check it doesn't convert and checks datatypes

console.log("2" === 2);