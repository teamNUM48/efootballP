let carty = JSON.parse(localStorage.cart1);


// Start sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
// end sidebar 
function showDate(){
    let table = '';
    for(let i =0; i < carty.length;i++){
        table += `
    <div class="cardt">
        <div class="lefts">
        <img src="${carty[i].Image}" alt="">
        </div>
        <div class="rights">
        <div>
        <h3>${carty[i].title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quia?</p>
        <h3>${carty[i].price}</h3>
        </div>
        <div>
                <button class="remove_btn" onclick="removeI(${i})">remove item</button>
        </div>
        </div>
    </div>
        `
    }           
    document.getElementById('carts').innerHTML = table;

} 
showDate()
function removeI(i){
    carty.splice(i,1);
    localStorage.cart1 = JSON.stringify(carty);
    showDate();
}