const pass_field = document.querySelector('.pass');
const show_btn = document.querySelector('#showHide');
show_btn.addEventListener('click', function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        show_btn.classList.remove("fas");
        show_btn.classList.remove("fa-eye-slash");
        show_btn.classList.add("fas");
        show_btn.classList.add("fa-eye");
    }else{
        pass_field.type = "password";
        show_btn.classList.remove("fas");
        show_btn.classList.remove("fa-eye");
        show_btn.classList.add("fas");
        show_btn.classList.add("fa-eye-slash");
    }
})
//------------------------------- 
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
