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
},
{
    username:"admin2",
    password:"123456789",
    fullName:"ahmed saber",
},
{
    username:"admin3",
    password:"12345678910",
    fullName:"ahmed atef",
},
]
let webo = document.getElementById("webo")
let username = document.getElementById('email')
let pass = document.getElementById('pass')
webo.onsubmit = ()=>{
    for(i=0; i < login.length; i++){
    if (username.value === login[i].username && pass.value === login[i].password) {
        localStorage.login = JSON.stringify(login[i])
        return true;
    }else{
        if (i == login.length-1){
            document.getElementById("wrong").style.display = 'block'
            return false;
        }
    }
    }      
       
}

