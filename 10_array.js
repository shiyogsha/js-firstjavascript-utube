// array 
// array always in []brackets
// () parenthesis, []brackets, {} braces

const myArr = [0, 1, 8, 9, 6, 7]
// we can add different elements in this also [true, 123, "shivam"]

const myHeros = ["bheem", "arjun","karn"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[3]);

// Array methods

myArr2.push(8) 
// o/p is just add 8 in array 
// console.log(myArr2);

// myArr2.pop()
// console.log(myArr2);

// o/p is to remove last element or value

myArr2.unshift(9)
// gives 9 value to front or first 
// console.log(myArr2);

myArr.shift()
// remove 0 from front 
// console.log(myArr);


// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(9));
// console.log(myArr2.indexOf(3));


const newArr = myArr2.join() 
// .join convert values into string as it not in square brackets

// console.log(myArr2);
// console.log(newArr);
// o/p is convert to string as we apply .join()
// console.log(typeof newArr);


// slice, splice
// interview quewstion 
// as slice is remove temporary but main array not changed but splice changed to main array
// also slice not take last range number but splice take

console.log("A ", myArr2);

const myn1 = myArr2.slice(1, 3)

console.log(myn1);
console.log("B ", myArr2);

const myn2 = myArr2.splice(1, 3)
console.log("C ", myArr2);

console.log(myn2);



