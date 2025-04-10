// 1

let password = "yourPassword"; 
let user_name = prompt("Please enter your username: ");
var user_password = prompt("Please enter your password: ");

if (user_password === password) {
    alert("Welcome" + user_name);
} else {
    alert("Maybe username or password is invalid or does not match");
}
