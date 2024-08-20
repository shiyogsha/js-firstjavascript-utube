// reduced
// use in shopping cart
// reduce use for sum of values elements 
const myNums = [1, 2, 3,6]

// const myTotal = myNums.reduce( function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal ${currVal}`);
//     return acc + currVal;
// }, 2 )

// console.log(myTotal);

// reduce in arrow function

const myTotal = myNums.reduce((arr, currVal) => arr + currVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
    itemName : "JS",
    Price: 2999
    },
    {
    itemName : "Pycourse",
    Price: 1500
    },
    {
    itemName : "DataScience",
    Price: 12999
    }

]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.Price, 0)

console.log(priceToPay);

