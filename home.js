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
// players cards in home
let player_info = [
  {
    player_name: "K.Benzema",
    tittle: "efootball | K.Benzema",
    player_team: "Real Madrid CF",
    player_img: "player_info_page/pics/Karim Benzema.png",
    matches: "43",
    goals: "43",
    assists: "14",
    player_link: "player_info_page/player_info.html",
    player_position: "FW",
    wins: "32",
  },
  {
    player_name: "C.Ronaldo",
    tittle: "efootball | C.Ronaldo",
    player_team: "Manchester United F.C.",
    player_img: "player_info_page/pics/cristiano-ronaldo-437-390x384.png",
    matches: "43",
    goals: "43",
    assists: "14",
    wins: "32",
    player_position: "FW",
    player_link: "player_info_page/player_info.html",
  },
  {
    player_name: "L.Messi",
    tittle: "efootball | L.Messi",
    player_team: "Paris Saint-Germain F.C.",
    player_img: "player_info_page/pics/Lionel Messi - FootyRenders (1).png",
    player_link: "player_info_page/player_info.html",
    matches: "43",
    goals: "43",
    assists: "14",
    player_position: "RW",
    wins: "32",
  },
  {
    player_name: "M.Salah",
    tittle: "efootball | m.salah",
    player_team: "Liverpool F.C.",
    player_img: "player_info_page/pics/Mohamed Salah - FootyRenders (1).png",
    player_link: "player_info_page/player_info.html",
    matches: "43",
    goals: "43",
    assists: "14",
    player_position: "RW",
    wins: "32",
  },
];
let player = document.getElementById("player");
function showData() {
  let table;
  for (let index = 0; index < player_info.length; index++) {
    table += `
        <a onclick="passPlayer(${index})" href="${player_info[index].player_link}" class="MOTM">
                <p class="details-header">${player_info[index].player_name}</p>
                <div class="det-content">
                    <img src="${player_info[index].player_img}" alt="">
                    <!-- <i class="fa-solid fa-star" style="color: lime;">9.4</i> -->
                </div>
        </a>
        `;
  }
  player.innerHTML = table;
}
showData();
// ----------------------------------------------
function passPlayer(index) {
  localStorage.player = JSON.stringify(player_info[index]);
}
