const accountId = 144553;
let accountEmail = "taun@gmail.com"
var accountPassword = "1234";
accountCity = "Jaipur";
let accountState;

// accountId = 2;

accountEmail = "hc@hc.com";
accountPassword = 121212;
accountCity = "Bengaluru";

console.log(accountId);

/*
prefer not to use var  
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);