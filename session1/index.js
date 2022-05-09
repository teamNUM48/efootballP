const pass_field = document.querySelector('.password');
const show_btn = document.querySelector('.show');
show_btn.addEventListener('click', function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        show_btn.style.color = "green";
        show_btn.textContent = "HIDE"
    }else{
        pass_field.type = "password";
        show_btn.style.color = "white";
        show_btn.textContent = "SHOW"
    }
})
//-------------------------------

let webo = document.getElementById("webo").onsubmit = function()
{
    let email = document.getElementById("email").value;
    if(email === 'admin'){
        return true;
    }else{
        return false;
    }
}
let email = document.getElementById('email')
let pass = document.getElementById('pass')

webo.onsubmit = ()=>{
    if(email === 'admin'){
        localStorage.ban =  JSON.stringify(email.value) 
        return true;
    }
    else{
        return false;
    }
}

