// Dates
// date is function
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString);
// console.log(myDate.toDateString);
// if we not given parenthesis after mydate.***() then not shown o/p shown function
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);
// it is object means non primitive or reference 

let myCreatedDate = new Date(2024, 0, 21)
// its means that in javascrpt month start from zero 
let myotherDate = new Date(2024, 0, 21, 5, 9)
// means in 1 digit month start from zero but in 2 digit starts from 01
let myLastDate = new Date("2024-05-21")
// this is yy-mm-dd but in Bharat we follow mm-dd-yy
// console.log(myCreatedDate.toDateString());
// console.log(myotherDate.toLocaleString());
// console.log(myLastDate.toLocaleString());

let myTimeStamp = Date.now()
// use in quizzes, polls and in this we use Date.now() but we use new Date() also
//console.log(myTimeStamp);
// this o/p is the milliseconds of this date specialy use in hotel app or in poll 
// need to compare date in hotel app
// console.log(myLastDate.getTime());
// gives milli seconds and now we can compare two values

// console.log(Date.now()/1000);
// convert to seconds but gives decimal value so use math.floor
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getTime());
console.log(newDate.getMonth() + 1);
// if get months is 3 then +1 means o/p show 4 month

// string interpolletion means value in `${hdfjhdkijg}` and date is `${newDate.getDate()}`
console.log(`${newDate.getDate()} and the time is `);

newDate.toLocaleString('default', {
    weekday: "long"
})
// ctrl + space gives suggestion means u use propery like long or weekday






