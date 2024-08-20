// for Each for function and array

const coding =["java", "ruby", "js", "python", "cpp"]

coding.forEach(function (val) {
    // console.log(val);
    
})

// function in arrow function style
coding.forEach( (item) => {
  //  console.log(item);
    
})

// function declare cormal style
function greet(item){
    console.log(item);
    
}
// coding.forEach(greet)// only give refernece greet not give execution like greet()
// coding.forEach(greet()) // gives error

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})// aceess all values whole array their index 
