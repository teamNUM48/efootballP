let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let data = JSON.parse(localStorage.login)
btn.onclick = function () {
    sidebar.classList.toggle("active");
};
let wewe = document.getElementById('Username');
wewe.innerHTML = data.username;

let fullName = document.getElementById('fullName');
fullName.innerHTML = data.fullName;
