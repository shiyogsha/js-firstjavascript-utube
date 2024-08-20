function sayMyName(){
    console.log("s")
    console.log("h")
    console.log("i")
    console.log("v")
    console.log("a")
    console.log("m")
}
// sayMyName()
// console.log(sayMyName());// dont write console log in function it gives undefined extra

//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
//}
function addTwoNumbers(number1, number2){
    return (number1 + number2);
    // console.log("shivam");
    // "shivam not print as return exected first "
}

const result = addTwoNumbers(3, 4)

// console.log("result:", result);

function loginUserMessage(username = "atharva"){
    if (!username){
        // username === undefined same as !username gives same o/p
        console.log("Please enter a username");

    }
    return `${username} just loggged in`
}
// console.log(loginUserMessage("shivam"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    // ...num1 means rest opearator ... means bundle me pack kr ke dena
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 44, 4545));

const user ={
    username: "shivam",
    price: 200
}
user.username = "asd"
console.log(user);


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)

// handleObject({
//     username: "sam",
//     price: 233
// })

const myNewArray = [100, 299, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2, 4, 5, 6]));
console.log(myNewArray[1]);








































































