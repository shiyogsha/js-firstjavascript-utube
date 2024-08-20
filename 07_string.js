const name = "shivam "
const repoCount = 12

// console.log(name + repoCount + " value");
// but this not reliable nowadays

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this more reliable as we male it {name.upercase,lowercase,etc}

const gameName = new String('shivamys')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
// if we assign -ve value to this as slice but again he startsc with zero
console.log(newString);
// for making it slice

const otherString = gameName.slice(-5, 4)
console.log(otherString);

const newStringOne = "   shivam    "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());

const url = "https://sguvaj.com/shivam%20sys"

//console.log(url.replace('%20', '-'));

//console.log(url.includes('athrva'));// include means o/p in true or false

const fatakaName = String('shivam-fd')

// console.log(fatakaName.split('-'));// split into two diffrent words
// console.log(fatakaName);


