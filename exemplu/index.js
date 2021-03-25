/*document.getElementById("btn1").addEventListener("click", function() { document.body.style.backgroundColor = "red"});
document.getElementById("btn2").addEventListener("click", function() { document.body.style.backgroundColor = "green"});
document.getElementById("btn3").addEventListener("click", function() { document.body.style.backgroundColor = "blue"});
*/


/*const result = prompt ("Introduceti un numar")
if (result > 0){
	alert (1);
}else if (result < 0 ){
	alert (-1);
}else if (result == 0){
	alert (0);
}else if ( result != 0 ){
	alert ("Error"):
}
*/

/*const age = prompt ("Introduceti age")
if (!(age >= 14 && >= 90)){
	alert (age " nu este in limitele [14;90]");
}
if (age >= 14 || >= 90){
	alert (age " nu este in limitele [14;90]");
}
*/

const username = prompt ("cretu")
const password = prompt ("cristina")
function password() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value == "" || password.value == "") {
        console.log("Eroare");
    } else if (username.value == password.value) {
        console.log("Salut");
    } else if (username.value != correct_username) {
        console.log("Username gresit");
    } else if (password.value != correct_password) {
        console.log("Password gresit");
    } else if (password.value == correct_password && password.value == correct_password) {
        console.log("Nimic corect");
    } else if (username.value != correct_username && password.value != correct_password) {
        console.log("Nimic corect");
    }
}

/*function Function() {
    let start_interval = parseInt(document.getElementById("start_interval").value);
    let end_interval = parseInt(document.getElementById("end_interval").value);
    for (let i = start_interval; i <= end_interval; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
*/