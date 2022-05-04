let login = [{
    username:"",
    email:"",
    password:"",
    fullName:""
}]
let x = 1;
let username = document.getElementById('username')
let fullName = document.getElementById('fullName')
let email = document.getElementById('email')
let password = document.getElementById('pass')
let register = document.getElementById("register")

register.onsubmit = ()=>{
    if(x == 1){
    login[0].username = JSON.stringify(username.value)
    login[0].fullName = JSON.stringify(fullName.value)
    login[0].email = JSON.stringify(email.value)
    login[0].password = JSON.stringify(pass.value)
    localStorage.login = JSON.stringify(login[0])
    return true;    
    }
    else{
        return false
    }
}