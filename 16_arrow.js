const user = {
    username: "shivam",
    price: 300,

    welcomemessage: function () {
        //console.log(`${this.username}, welcome to website`)
        //console.log(this);
    }
}
// // user.welcomemessage // not give o/p as () is imp as this is function
//user.welcomemessage() // give o/p 

// // user.username = "sam"
// // user.welcomemessage() // now give sam as this works on current context 
// console.log(this);// gives {} empty as in global scope no value is there but in browser it is not


// function chai() {
//     let username = "shivam";
//     //console.log(this) // gives so much info means this not work inside function
//     console.log(this.username); //umdefined 
// }
// chai()

/* How we declare function by  arrow function*/

const chai = () => {
    let username = "shivam"
    //console.log(this.username); // undefined
    console.log(this);


}
// chai()// we take o/p from only arrow function like this

// const addTwo = (num1, num2) => {
//    return num1 + num2;
// arrow function hai curly braces me tha isliye return keyword likna pada
//}
// console.log(addTwo(2,3))// arrow function cant access before initiliazation

//const addTwo = (num1, num2) => num1 + num2; // same o/p as down line

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => (username: "shivam"); // undefines as we use {} for object

const addTwo = (num1, num2) => ({ username: "shivam" });

console.log(addTwo(2, 3))



