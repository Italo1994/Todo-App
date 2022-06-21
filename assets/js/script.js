var container = document.querySelector('.container');
var img_icon = document.querySelector("#img_icon");
var img_header = document.querySelector("#header");
var main = document.querySelector('#main');
var footer = document.querySelector("#footer");
var COUNT_CLICKS = 0;


var todo_text = document.getElementById("todo-text");
var button_add = document.getElementById("button-add");

var list = document.getElementById("list");
list.style.display = 'grid';
list.style.gridTemplateColumns = '1fr 9fr';
list.style.justifyContent = 'center';
list.style.alignItems = 'center';


var item = document.createElement("li");
var text = document.createTextNode(todo_text.value);


function alter_bg() {
    COUNT_CLICKS++;
    if(COUNT_CLICKS % 2 == 0) {
        img_icon.setAttribute('src', '../../images/icon-moon.svg');
        img_header.style.background = 'url("../../images/bg-desktop-light.jpg")';

        main.style.backgroundColor = '#FFF';
        footer.style.backgroundColor = '#FFF';
        container.style.backgroundColor = '#FFF';

        list.style.backgroundColor = '#FFF';
        item.style.backgroundColor = '#FFF';

        img_header.style.transition = 'all .5s';
    }
    else {
        img_icon.setAttribute('src', '../../images/icon-sun.svg');
        img_header.style.background = 'url("../../images/bg-desktop-dark.jpg")';

        main.style.backgroundColor = '#181824';
        footer.style.backgroundColor = "#181824";
        container.style.backgroundColor = '#181824';

        list.style.backgroundColor = '#25273C';
        item.style.backgroundColor = '#25273C';
        item.style.color = '#FFF';
        
        img_header.style.transition = 'all .5s';
    }
}


function addTodo() {
    if(todo_text.value.length < 1) {
        return 0;
    }

    var inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.style.width = '100%';
    inputCheckbox.style.height = '100%';
    inputCheckbox.style.marginTop = '0px';
    inputCheckbox.style.borderRadius = '10px';

    
    item.appendChild(text);
    list.appendChild(inputCheckbox);
    list.appendChild(item);

    todo_text.value = ""; // limpando o texto do input ao adicionar
}