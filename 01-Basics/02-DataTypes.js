"use strict"; // treat all js code as newer version

// alert("hello"); // it gives o/p in browser but we r in local using node.js here is a different syntax
// console.log(2+2); console.log("hello")
/* we should not write in same line even after writing semicolon we should always go with next line for good coding practice and code rediablity*/
/*console.log(2+2); 
console.log("hello");*/
// follow like this one by one

/*                           DATATYPES

            // primitive
      1.number => 2 to the power of 53 we have bigInt also
      2.string => "" or ''
      3.boolean => true or false
      4.null
      5.undefined
      6.symbol => uniquness we use symbol
      7.BigInt

            // non primitive or reference type 
      1. Array
      2.Object 
      3.Functions     
*/

/*let uname = "Abhi";
let age = "24";
let isLoggedIn = false;
let state = undefined; // undefined
let temp = null ; // intentionally defining empty

console.log(typeof uname); // string
console.log(typeof age);   // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined
console.log(typeof temp); // object */

const id  = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNum = 2165451654231n;

const rollNo = [1,2,3,4,5,6];
let myObj = {
    userName : "abhi",
    tyepes: "any",
    age:24,
}

console.log(myObj.userName);

let myFunc = function () {
    console.log("this a demo function");
}

