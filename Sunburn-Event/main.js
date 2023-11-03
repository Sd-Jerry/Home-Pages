let backvideo = document.getElementById("backvideo");
let btn = document.getElementById("PlyBtn");

btn.onclick = function () {
    backvideo.style.display = "block";

    if (backvideo.paused) {
        backvideo.play();
        btn.src = "./Img/pause.png";
    } else {
        backvideo.pause();
        btn.src = "./Img/Play Button.png";
    }
}


