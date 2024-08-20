// Objects
// singleton (when we declared contructor then singeleton)

// object literals
// object inside name,age etc are all string without " "
// but for symbol we asign them under[]

const mySym = Symbol("key1")
// Interview => use symbol ,add that in object key and print that => way

const Jsuser ={
    name: "shivam",
    fullname: "atharva",
    [mySym]: "mykey1",
    age: 22,
    location: "nagpur",
    Email: "shivam@hjbsd",
    isLoggedIn: false,
    LastLoginDays: ["monday", "sunday"]
}
// how to accesss objects
//console.log(Jsuser.Email)
// yes this method is right but when symbol is their then thatswhy use 2nd way
// console.log(Jsuser["Email"]);
// console.log(Jsuser["fullname"]);
// console.log(Jsuser.mySym);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

// how to change objects values 
Jsuser.Email = "shivam@chatgpt.com"

// how to lock or freeze the object
// Object.freeze(Jsuser)
Jsuser.Email = "atharva@shahane"

// console.log(Jsuser);
console.log(Jsuser.Email);

// javascipt treat function as variable
Jsuser.greeting = function(){
    console.log("jai shree ram");
}
Jsuser.greetingtwo = function(){
    console.log(`jai radhe krishna, ${this.name}`);
}
// upside is string interpolletion
// this. use as we want name from Jsuser so if other object then not this.
console.log(Jsuser.greeting);
console.log(Jsuser.greetingtwo());





