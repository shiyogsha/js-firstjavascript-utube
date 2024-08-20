const coding = ["java", "ruby", "js", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
//console.log(values);// gives error it means forEach not return value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 5 )//here we not need to return but if we use {} then need to return

//console.log(newNums);
//need to return but if we use {} then need to return

// const newList = myNums.filter( (num) => { 
//     return num < 5 })

// for Each use in 

const newGinti = []

myNums.forEach((num) => {
    if (num > 4) {
        newGinti.push(num)

    };
})
console.log(newGinti);









































