// side bar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
// --------------------------------
// scroll to top
function scrollToTop() {
    window.scrollTo(0, 0);
}
// --------------------------------
