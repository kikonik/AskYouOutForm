const button_yes = document.querySelector(".button_yes");

const button_no = document.querySelector(".button_no");


button_yes.addEventListener('click', () => {

    var img = document.getElementById("pic");
    var audio = document.getElementById("audio")

    img.src = "ciganin.jpg"

    audio.currentTime = 89;
    audio.play()


})


button_no.addEventListener('mouseover', () => {

    const i = Math.floor(Math.random()*200)+1;
    const j = Math.floor(Math.random()*200)+1;

    button_no.style.left = i + "px"
    button_no.style.top = j + "px"


})

