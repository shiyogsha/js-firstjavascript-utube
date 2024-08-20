const accountId = 458552
// const not change again or locked its value//
let accountEmail = "ashivqam"
var accountPassword = "123456"
// let var const used for storing data in memeory//
// let var keyword always store vale in under inverted commas "...."//
accountCity = "Nagpur"
/*sometimes this also shows output as js is flexible but
dont use this always as it is not professional*/
//accountId = 65498498
// we changeed it but whwn we get output it shows error as const is locked its value already//

accountEmail = "aad@gmail.com"
accountPassword = "32243655476"
accountCity = "Nagdwar"
let accountState;
console.log(accountId);
/* prefer not use var variable because problem with block scope and fumctional scope {}
*/
console.table([accountEmail, accountPassword, accountCity, accountState]);
//as we used accountState without ginving its value its shows undefined output //
console.log( || "bak");
