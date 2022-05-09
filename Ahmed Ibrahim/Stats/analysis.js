let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};

function myfunction(){
    if(document.querySelector("#man").style.display=="block")
    {
    document.querySelector("#man").style.display="none";
    document.querySelector("#chelsea").style.display="block";
    }
else{
    document.querySelector("#man").style.display="block";
    document.querySelector("#chelsea").style.display="none";
}
}