// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); 
// automaticaly convert 2 string into number sometimes not given expected o/p 
// thatswhy some use typescript cause they not allow to compare different datatypes
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); // it convert null to zero or NaN
console.log(null >= 0); // thatswhy this o/p gives true value

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===
// it check data type also its shoows they are not same as thir datatype are not same 
//but in == it convert
console.log("2" === 2);
console.log(typeof "2")