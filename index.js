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
let login = [
{
    username: "admin1",
    password: "12345678",
    fullName: "ahmed Khaled mohamed",
    email:"ahmed_khaled@gmail.com"
},
{
    username:"admin2",
    password:"123456789",
    fullName:"ahmed saber",
    email:"ahmed_saber@gmail.com"
},
{
    username:"admin3",
    password:"12345678910",
    fullName:"ahmed atef",
    email:"ahmed_atef@gmail.com"
},
]
let webo = document.getElementById("webo")
let username = document.getElementById('email')
let pass = document.getElementById('pass')
let login2 = JSON.parse(localStorage.login2);
webo.onsubmit = ()=>{
    for(i=0; i < login.length; i++){
    if (username.value === login[i].username && pass.value === login[i].password) {
        localStorage.login = JSON.stringify(login[i])
        return true;
    }
    }   
    for(i=0; i < login2.length; i++){
    if(username.value === login2[i].username && pass.value === login2[i].password){
        localStorage.login = JSON.stringify(login2[i])
        return true;
    }
    else
    {
        document.getElementById("wrong").style.display = 'block'
        return false;

    }
    }      
       
}
