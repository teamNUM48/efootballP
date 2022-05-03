let data = {
    username:"",
    email:"",
    password:"",
    fullName:""
}
let username = document.getElementById('username')
let fullName = document.getElementById('fullName')
let email = document.getElementById('email')
let password = document.getElementById('pass')
document.getElementById('register').onsubmit = ()=>{
    if(username.value != ''){
    localStorage.login.username = JSON.stringify(username.value)
    localStorage.login.fullName = JSON.stringify(fullName.value)
    localStorage.login.email = JSON.stringify(email.value)
    localStorage.login.password = JSON.stringify(pass.value)
    return true;
    }
    else{
        return false;
    }
}