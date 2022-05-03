let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
//------------------------------------------

var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click', () =>{

    play.classlist.toggle('active');

    if(play.paused){
        play.play();
    }else{
        play.paused();
        play.currentTime = 0;
    }

}));