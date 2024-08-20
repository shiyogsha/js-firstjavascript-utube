// const instaUser = new Object() 
// singleton object but same o/p as const instaUser = {}
const instaUser = {}
// non singleton object

instaUser.id = "123abf"
instaUser.name = "shivam"
instaUser.isLoggedIn = true

// console.log(instaUser);

const regularUser = {
    email: "shivam@saf",
    fullname:{
        userfullname:{
            firstname: "atharva",
            lastname: "shahane"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname);

const obj1 ={1: "q", 2: "b", 3: "c"}
const obj2 ={4: "g", 5: "j", 6: "c"}

//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)
// same o/p but real doc gives this {}
//const obj3 = {...obj1, ...obj2}
// most efficient use spread operator
// console.log(obj3);

const users = [
    {
        id: "1",
        email: "g@ghfv"
    },
    {
        id: "2",
        email: "qwerty"
    },
    {
        id: "3",
        email: "asdfgh"
    }
]

// console.log(users[1].email);
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn')); // check value true or false

// destructuring 
const course = {
    coursename: "Js",
    price: "999",
    courseMentor: "shivam"
}
// course.courseMentor

const {courseMentor: Mentor} = course //convert courseMentor to Mentor but temporary
// console.log(Mentor);
// console.log(course);

//**************APIs******* */
// apis like values from backend in JSON to write 

//{
//   "coursename": "Js",
//    "price": "free",
//   "courseMentor": "shivam"
//}

//[
//   {},
// {},
//{}
//]



