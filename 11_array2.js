const marvel_heros = ["Ironman", "thor", "spiderman"]
const indian_heros = ["shaktiman", "krish", "bheem"]

//marvel_heros.push(indian_heros)

// console.log(marvel_heros);
// not merge and create problem 
// o/p is array between array and not use this to merge as this [3]value is whole array
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(indian_heros)
// if we .concat this way by directly to same variable it not work but give same o/p as .push
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(indian_heros)
// now it will merge properly two arrays
// console.log(allHeros);

// easy method for merge better than concat which is spread operator 
// means it spread the elemts in arrays
const all_new_heros = [...marvel_heros, ...indian_heros]
console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7[4,5[2[3]]]]]
// arrray in array in array in arrray 

const real_another_array = another_array.flat(Infinity)
// actualy .flat converts into one array and in thia we give depth 1,2,3 
// under () but infrinity gives no problem

console.log(real_another_array);


//console.log(Array.isArray("shivam"))// check array or not give value in true or false like includes

//console.log(Array.from("shivam"));
// convert string to array

//console.log(Array.from({name: "shivam"})); 
// intresting so that we have to mention 
// that which we want to have array like string or name

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));