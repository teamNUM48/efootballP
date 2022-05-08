// side bar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
// --------------------------------
let playerName = document.getElementById(`playerName`);
let playerTeam = document.getElementById("player-team");
let playerImg = document.getElementById(`playerImg`);
let playerPosition = document.getElementById(`player_position`);
let goals = document.getElementById(`goals`);
let wins = document.getElementById(`wins`);
let assists = document.getElementById(`assists`);
let matches = document.getElementById(`matches`);
let tittle = document.getElementById('tittle')
let playerInfo = JSON.parse(localStorage.player);

playerTeam.innerHTML = playerInfo.player_team;
playerName.innerHTML = playerInfo.player_name;
playerImg.src = playerInfo.player_img;
playerPosition.innerHTML = playerInfo.player_position;
goals.innerHTML = playerInfo.goals;
wins.innerHTML = playerInfo.wins;
assists.innerHTML = playerInfo.assists;
matches.innerHTML = playerInfo.matches;
tittle.innerHTML = playerInfo.tittle;
