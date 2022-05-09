let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};

function scrollToTop() {
    window.scrollTo(0, 0);
}
