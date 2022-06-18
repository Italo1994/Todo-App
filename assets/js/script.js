var img_icon = document.querySelector("#img_icon");
var img_header = document.querySelector("#header");
var main = document.querySelector('#main');
var footer = document.querySelector("#footer");
var COUNT_CLICKS = 0;

function alter_bg() {
    COUNT_CLICKS++;
    if(COUNT_CLICKS % 2 == 0) {
        img_icon.setAttribute('src', './images/icon-moon.svg');
        img_header.style.background = 'url("./images/bg-desktop-light.jpg")'
        main.style.backgroundColor = '#FFF';
        footer.style.backgroundColor = '#FFF';
    }
    else {
        img_icon.setAttribute('src', './images/icon-sun.svg');
        img_header.style.background = 'url("./images/bg-desktop-dark.jpg")'
        main.style.backgroundColor = '#181824';
        footer.style.backgroundColor = "#181824";
    }
}