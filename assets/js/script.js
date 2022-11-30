
//document.body.style.backgroundColor = "red"


const loginForm = document.getElementById("loginForm")


const labelEmail = document.getElementById("labelEmail");
const labelPassword = document.getElementById("labelPassword");

const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");

const loginButton = document.getElementById("loginButton")

inputEmail.onclick = ()=>{
    labelEmail.style.visibility = "visible";
    inputEmail.placeholder = "";
}

inputPassword.onclick = ()=>{
    labelPassword.style.visibility = "visible";
    inputPassword.placeholder = "";
}



