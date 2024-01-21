const account_Id = 144553
let account_Email = "harshithbrahmam22@gmail.com"  // let and var are varables 
var account_password = "123456789"                 // variables can be declare in two ways one is let and other is var

/*
prefered not to use var
because issue in the block scope and functional scope
*/

account_City = "khammam"

// account_Id = 2. we cant change the const, it is not allowed, it fixed 

account_Email = "harshith@gmail.com"
account_password = "212121"
account_City = "HYD"

console.log(account_Id); // we can run only one varable by using .log

console.table([account_Email,account_Id,account_password,account_City]) 
// we can run all the varablies at a time by using .table and [].
// It will display in tabular form.

