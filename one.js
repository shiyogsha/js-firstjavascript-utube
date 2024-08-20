// if


// "=" means value given but "==" means we check value is equal or not
// "===" means check value qual or not with data type also check
// <, >, <=, >=, ==, !=, ===


// if (3=="3") {
//     console.log("executed")
// }// it is executed but data type not equal that check by "==="strict equal


// if (3==="3") {
//     console.log("executed")
// }

// const isUserLoggedIn = true
// const temperature = 47

// if (temperature === 45){
//     console.log("less than 50")
// } else{
//     console.log("temperature is greater than 50")
// }

// const score = 450

// if (score>100) {
//     let power = "fly"
//     console.log(`userpower: ${power}`);
    
// }
// console.log(`userpower: ${power}`); // gives error cause we know that let is inline variable and "power" is under if function means it is not global , parent not take value from child

const balance = 1000
// if (balance>500) console.log("test"), console.log("test2");// dont write like this not official

/* nesting*/
// if (balance<500){
//     console.log("less than")

// } else if (balance<750){
//     console.log("less than 750");   

// } else if (balance<1000){
//     console.log("less than 1000");    

// } else if (balance<1200){
//     console.log("less than 1200");    
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if (isUserLoggedIn && debitCard && 2==2){
    console.log("allow to purchase")
}

if (loggedInFromGoogle && loggedInFromEmail){
    console.log("user logged in");
    
}




