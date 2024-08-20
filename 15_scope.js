// let a = 270
//if (true) {
//  let a = 10
//  const b = 2
//  var c = 12
// console.log("inner:", a)

//}
// // a and c is declared but their values not read but c has because var is global scope means have wide range not inline
// // inside if function block scope outside is global scope
// // when we write code outside like here if outside they are read by if function
// // but when we inside if function outside not read only read var but dont use var

// console.log(c)

function one() {
    const username = "shivam"

    function two() {
        const website = "youtube"
        console.log(username)
        // this will give o/p when "console.log(website)"is not their or in comment cause parent run first 
    }
    //console.log(website) // give error as ice cream example child accept but parent not take ice cream
    two()

}
// one()

if (true) {
    const username = "shivam"
    if (username === "shivam") {
        const website = " utube"
        console.log(username + website)
    }
    //console.log(website) //not run parent not take value from child and 
}
// console.log(username)

console.log(addone(3)) // in function we get value before function declaration

function addone(num) {
    return num + 1;
}

// console.log(addtwo(2))// give error in this variable type function syle declare

const addtwo = function (num) {
    return num + 2
}


