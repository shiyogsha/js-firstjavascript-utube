// IIFE
(function chai (){
    console.log("DB CONNECTED")
})();
// upside function called named iife
// 2 iife we write by ending semicoln
// if we not end ";" semicolon then it give error in next function 

(  () => {
    console.log("DB CONNECTED TWO")
} )(); 

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )("shivam");
