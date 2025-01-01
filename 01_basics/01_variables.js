const accountId = 144553
let accountEmail = "tanish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate;

// accountId = 2 // not allowed changing const

accountEmail = "ts@google.com"
accountPassword = "11223"
accountCity = "bangalore" 

/*
we use only let and tend to not use var cause of scope problem local/functional scope and block or global scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);