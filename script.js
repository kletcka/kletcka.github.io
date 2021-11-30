let text = document.querySelectorAll('.ch');
let bg = document.querySelectorAll('.bg');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
    var index;
    for (index = 0; index < text.length; ++index) {
        text[index].classList.toggle('light');
        text[index].classList.toggle('dark');
    }
    for (index = 0; index < bg.length; ++index) {
        bg[index].classList.toggle('bg_light');
        bg[index].classList.toggle('bg_dark');
    }
    

};
let u = document.querySelectorAll('.u');
let uu = document.querySelectorAll('.uu');
const W = document.documentElement.scrollWidth

var index;
    for (index = 0; index < u.length; ++index) {
        u[index].width=String(W*0.375)

    }
    for (index = 0; index < uu.length; ++index) {
        uu[index].width=W
    }