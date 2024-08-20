// for
// { } curly braces means block scope
// variable declare index and under value 0, 
// after condition check then index++ not directly loop not here
// after check it goes to const element... then index++
// syntax 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let index = 0; index < 10; index++) {
  //     const element = index;
  //     console.log(element)

}
// ctrl d ==> duplicate

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");  
//     }
//     console.log(element)

// }
// console.log(element); // not execute cause {} element declare under localobject so not access in global or parent not use child things 

for (let i = 1; i < 10; i++) {
  //console.log(`Outer loop value ${i}`);
  for (let j = 1; j < 10; j++) {
    //console.log(`inner loop value ${j} and inner value ${i}`);
    //console.log(i + "*" + j + "=" + i*j );

  };

}
let myArray = ["flash", "superman", "krish"]
// console.log(myArray.length);
//if we gives <= gives undefined causew array starts from 0 value 
// for (let index = 0; index < myArray.length; index) { 
//     const element = myArray[index];
//     // console.log(element);
// }
// if we not give ++ to index then it gives infinite loop never ends , but we end it manualy by ctrl C

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("5 is detected", index)
    break;
  }
  console.log(`Value of i is ${index}`);

}
  // for continue it skip that 5 value or checking condition not run 5 and then continue after
  // only skip condition value for one time
  for (let index = 1; index <= 20; index++) {
    if (index == 5) {
      console.log("5 is detected", index)
      continue;
    }
    console.log(`Value of i is ${index}`);

  }


