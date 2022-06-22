var container = document.querySelector('.container');
var img_icon = document.querySelector("#img_icon");
var img_header = document.querySelector("#header");
var main = document.querySelector('#main');
var footer = document.querySelector("#footer");
var COUNT_CLICKS = 0;
var QUANT_ICONS = 0;
var count = 0;


function alter_bg() {
    COUNT_CLICKS++;
    if(COUNT_CLICKS % 2 == 0) {
        img_icon.setAttribute('src', '../../images/icon-moon.svg');
        img_header.style.background = 'url("../../images/bg-desktop-light.jpg")';
        main.style.backgroundColor = '#FFF';
        footer.style.backgroundColor = '#FFF';
        container.style.backgroundColor = '#FFF';

        img_header.style.transition = 'all .5s';
    }
    else {
        img_icon.setAttribute('src', '../../images/icon-sun.svg');
        img_header.style.background = 'url("../../images/bg-desktop-dark.jpg")';
        main.style.backgroundColor = '#181824';
        footer.style.backgroundColor = "#181824";
        container.style.backgroundColor = '#181824';
        
        img_header.style.transition = 'all .5s';
    }
}

var todo_text = document.getElementById("todo-text");
var button_add = document.getElementById("button-add");

var list = document.getElementById("list");
var inputCheckbox = [];
var item = [];
var deleteIcone = [];
var text_delete = [];

function addTodo() {
    if(todo_text.value.length < 1) {
        return 0;
    }

    inputCheckbox[count] = document.createElement("input");
    inputCheckbox[count].setAttribute('type', 'checkbox');
    inputCheckbox[count].setAttribute('id', count);
    inputCheckbox[count].style.width = '100%';
    inputCheckbox[count].style.height = '100%';

    item[count] = document.createElement("span");
    item[count].setAttribute('id', count);
    item[count].style.width = '100%';
    item[count].setAttribute('id', QUANT_ICONS+1);

    deleteIcone[count] = document.createElement("i");
    deleteIcone[count].setAttribute('class', 'fa-solid fa-trash');
    deleteIcone[count].setAttribute('id', count);
    // deleteIcone[count].innerHTML = count + 1;
    deleteIcone[count].setAttribute('onclick', 'deleteIcon(this.id)');
    deleteIcone[count].style.cursor = 'pointer';
    

    var text = document.createTextNode(todo_text.value);

    item[count].appendChild(text);
    item[count].appendChild(deleteIcone[count]);
    list.appendChild(inputCheckbox[count]);
    list.appendChild(item[count]);

    todo_text.value = ""; // limpando o texto do input ao adicionar
    QUANT_ICONS++;
    count++;
}

function deleteIcon(e) {
    inputCheckbox[e].style.display = 'none';
    item[e].style.display = 'none';
    deleteIcone[e].style.display = 'none';
}