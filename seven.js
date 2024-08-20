const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map better than forEach and easy
// const newNums = myNumbers.map( (num) => {return num + 10 })
// console.log(newNums);
// if not return then dont use {} follow this below
//const newNums = myNumbers.map( (num) => num + 10) //same result

////chaining
// filtere ==> true or false

const newNums = myNumbers
    .map((num) => num * 10 )
    .map((num) => num + 1 )
    .filter((num) => num >= 50 )

console.log(newNums);
                