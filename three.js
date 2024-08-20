// for of loops
// Array specific loop

// ["", "", ""]
// [{}, {}, {}]

// for (const element of object) {

// }// in this syntax object means not JS object its is things
// loop in array
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);   
// }

// for of loop for string

// const greetings = "Happy independence day"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);

// }

// Maps data type
// unique value gives not repeat values not always in order in which order we set 

//const map = new Map()
// map.set("In", "India");
// map.set("Np", "Nepal");
// map.set("Fr", "France");
// map.set("In", "India");

// console.log(map); // not gives india 2 times beacause map gives unique values not repeat

// for of in map
// if use square bracket then destructure of array but temporary means not in [] 
// for (const [key, value] of map) {
//     console.log(key, ":-", value);

// }
//console.log(map);

// for of for Object
// gives error not iterables
const myObject = {
    game1: "NFS",
    game2: "BGM"
}

// for (const key of myObject) {
//     // console.log(key);

// }

// for in loop in map
// map not ietrable in for in loop

// const map = new Map()
// map.set("In", "India");
// map.set("Np", "Nepal");
// map.set("Fr", "France");
// map.set("In", "India");


// for (const key in map) {
//     // console.log(key);

// }

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

]
myCoding.forEach((item) => {
    console.log(item.languageFileName);
    
})
// item is variable name we give ant name entity in for like keys in 