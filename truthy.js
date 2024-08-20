// const userEmail = []
 
// if (userEmail) {
//     console.log("got useremail")

// } else {
//     console.log("dont have user email");
    
// }
/*******TRUTHY VALUES ********/
// "0", "false", " ", [], {}, function(){}


// Falsy valuse
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// const userEmail = []
//  if (userEmail.length === 0) {
//     console.log("Array is empty")
    
//  }
 // so we dont directly check array by checking their proprties use

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty")
    
// }// so we dont directly check object by checking their proprties use
// first convert object to array but object.keys than add .length proprty of array 



/****Nullish Coalescing Operator (??):null undefined */

// let val1;
// // val1 = 5 ?? 10  //gives 5
// // val1 = null ?? 67  // gives 67
// // val1 = undefined ?? 7 // 7 gives
// val1 = null ?? 7 ?? 4 

// console.log(val1)

//// Terniary Operator

// condition ? true : false

// const soupPrice = 25
const soupPrice = 32
soupPrice < 30 ? console.log("soup nhi milen") : console.log(" garam garam soup ghya");



