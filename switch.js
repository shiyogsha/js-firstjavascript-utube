// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// we use switch cause now if we check 3 month date then if we use if statement then we need 12 if so thatwhy we use switch for ease
// in switch(key) "key"means those value we need to check

const month = 3

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        //break;
    case 4:
        console.log("Aprill")
        break;

    default:
        console.log("deafalt case match");
        break;
}
// if we break not apply in case 3 then it runs the all after cases execute without match the cases also except default case (not run default case)
// interview question



