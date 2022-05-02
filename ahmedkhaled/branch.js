let desc;
let project_name = document.getElementById('project_name');
let price = document.getElementById('price');
desc = JSON.parse(localStorage.branch);
project_name.innerHTML = desc.title;
price.innerHTML = desc.price
// Start GAllary //
let img_1 = document.getElementById('img_1');
let img_2 = document.getElementById('img_2');
let img_3 = document.getElementById('img_3');
let img_4 = document.getElementById('img_4');
img_1.src = desc.Image;
img_2.src = desc.Image2;
img_3.src = desc.Image3;
img_4.src = desc.Image4;
img_5.src = desc.Image;
let cart;
if(localStorage.cart1 != null){
    cart = JSON.parse(localStorage.cart1)
}else{
    cart = [];
}
function cart_wow(){
    cart.push(desc);
    localStorage.cart1 = JSON.stringify(cart);
}

// End GAllary //
// Start sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
// end sidebar