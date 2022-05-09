// side bar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
// --------------------------------
let booked = document.getElementById("booked");
let book = document.getElementById("book");
book.onclick = () => {
  booked.style.display = "block";
};
