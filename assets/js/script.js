var container = document.querySelector('.container');
var img_icon = document.querySelector("#img_icon");
var img_header = document.querySelector("#header");
var main = document.querySelector('#main');
var function_bar = document.getElementById("function-bar");
var footer = document.querySelector("#footer");

var items_left = document.getElementById("items-left");
var quant_items_left = 0;

var COUNT_CLICKS = 0; // variável para controlar o fundo dark ou light pelo valor ímpar ou par
var QUANT_ICONS = 0;
var count = 0; // variável contador para indexar os itens que são adicionados


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
var list = document.getElementById("list"); // container da lista de tarefas
var inputCheckbox = [];
var item = []; // conteúdo da lista
var itemSize = item.length; // tamanho da lista de tarefas
var deleteIcone = []; // lista de ícones para deletar sua respectiva tarefa
var text_delete = [];

if(itemSize == 0) {
    function_bar.style.display = 'none';
}

function addTodo() {
    /*
    * verifica se o usuário já adicionou alguma tarefa
    */
    if(todo_text.value.length < 1) {
        return 0;
    }

    /*
    * incrementa a quantidade de itens restantes na lista
    */
    quant_items_left++;
    items_left.innerHTML = quant_items_left + ' items left';

    /* 
    * verifica o tamanho do vetor e exibe ou não a barra de ferramentas
    */
    itemSize++;
    if(itemSize > 0) {
        function_bar.style.display = 'grid';
    }

    inputCheckbox[count] = document.createElement("input");
    inputCheckbox[count].setAttribute('type', 'checkbox');
    inputCheckbox[count].setAttribute('id', count);
    inputCheckbox[count].setAttribute('onclick', 'getHighlighter(this.id)');
    inputCheckbox[count].style.width = '100%';
    inputCheckbox[count].style.height = '100%';
    inputCheckbox[count].style.borderRadius = '40px';

    item[count] = document.createElement("span");
    item[count].setAttribute('id', count);
    item[count].style.width = '100%';
    item[count].style.borderRadius = '2.5px';
    item[count].setAttribute('id', QUANT_ICONS+1);

    deleteIcone[count] = document.createElement("i");
    deleteIcone[count].setAttribute('class', 'fa-solid fa-trash');
    deleteIcone[count].setAttribute('id', count);
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

function deleteIcon(id) {
    inputCheckbox[id].style.display = 'none';
    item[id].style.display = 'none';
    deleteIcone[id].style.display = 'none';
    
    itemSize--;
}

function clearAll() {
    for(let i=0; i<item.length; i++) {
        item[i].style.display = 'none';
    }
    itemSize = 0;
}

function getHighlighter(id) {
    if(inputCheckbox[id].checked) {
        item[id].style.textDecoration = 'line-through';
    } else {
        item[id].style.textDecoration = '';
    }
}