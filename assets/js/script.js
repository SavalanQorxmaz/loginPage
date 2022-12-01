
//document.body.style.backgroundColor = "red"


const loginForm = document.getElementById("loginForm")


const labelEmail = document.getElementById("labelEmail");
const labelPassword = document.getElementById("labelPassword");

const buttonEmailClear = document.getElementById("buttonEmailClear")
const buttonPasswordClear = document.getElementById("buttonPasswordClear")

const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");

const loginButton = document.getElementById("loginButton")



inputEmail.onclick = ()=>{
    labelEmail.style.visibility = "visible";
    buttonEmailClear.style.visibility = "visible";
    inputEmail.placeholder = "";
}

inputPassword.onclick = ()=>{
    labelPassword.style.visibility = "visible";
    buttonPasswordClear.style.visibility = "visible";
    inputPassword.placeholder = "";
}



buttonEmailClear.onclick = ()=>{
    labelEmail.style.visibility = "hidden";
    buttonEmailClear.style.visibility = "hidden";
    
   
    inputEmail.value = "";
    inputEmail.placeholder = "EMAIL";
    inputEmail.focus()

    
}



buttonPasswordClear.onclick = ()=>{
    labelPassword.style.visibility = "hidden";
    buttonPasswordClear.style.visibility = "hidden";
    inputPassword.value = "";
    inputPassword.placeholder = "PASSWORD";
    inputPassword.focus()
}