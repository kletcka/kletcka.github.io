let text = document.querySelectorAll('.ch');
let headers = document.querySelectorAll('.hs');
let nav = document.querySelectorAll('.ns');
let bg = document.querySelector('.bg');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
    var index;
    for (index = 0; index < text.length; ++index) {
        text[index].classList.toggle('light_theme');
        text[index].classList.toggle('dark_theme');
    }
    for (index = 0; index < headers.length; ++index) {
        headers[index].classList.toggle('header3_light');
        headers[index].classList.toggle('header3_dark');
    }
    for (index = 0; index < nav.length; ++index) {
        nav[index].classList.toggle('navigation_light');
        nav[index].classList.toggle('navigation_dark');
    }
    bg.classList.toggle('bg_light');
    bg.classList.toggle('bg_dark');
    

};
