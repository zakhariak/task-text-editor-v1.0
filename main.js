const getS = selector => document.querySelector(selector);
// при додаванні класу hidden до елементів вони приховуються display: none


// функція викликається при кліку на кнопку edit: показує textarea в який передається html стрічкою з верхнього блоку
function editBtn() {
    getS('.edit-block').classList.remove('hidden');
    getS('.area').value = getS('.top').innerHTML;
    getS('.style-block').classList.add('hidden');
    if (getS('.bottom').children[2]) {
        getS('.bottom').removeChild(getS('.colors'));
    }
}
// функція викликається при кліку на кнопку style: приховує блок edit додаванням класу, одночасно показує блок style видалянням класу
function styleBtn() {
    getS('.edit-block').classList.add('hidden');
    getS('.style-block').classList.remove('hidden');
}


// функція викликається при кліку на кнопку save: значення з textarea передається у верхній блок
function saveBtn() {
    getS('.top').innerHTML = getS('.area').value;
    getS('.edit-block').classList.add('hidden');
}

function fontSize() {
    getS('.top').style.fontSize = event.target.value;
}
//функція включає і виключає стиль тексту жирний
function fontWeight() {
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal';
}
//функція включає і виключає стиль тексту курсив
function fontStyle() {
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal';
}
// масив кольорів для квадрату з кольорами
const colors = ['red', 'blue', 'green', 'black', 'yellow', 'coral', 'rgb(234, 238, 239)', 'purple', 'pink'];



//функція створює квадрат з квадратами в середині 9*9. якщо квадрата немає він запускає функцію, якщо він є то його видаляє і перезапускає функцію. Зробив так, тому що було: якщо нажати на копку колір тексту і потім на фон і вибрати колір то вибере колір для тексту
function boxColor() {
    if (!getS('.bottom').children[2]) {
        let divColors = document.createElement('div')
        divColors.classList.add('colors');
        for (let i = 0; i < colors.length; i++) {
            let divColorBox = document.createElement('div');
            divColorBox.classList.add('color-box');
            divColorBox.style.background = colors[i];
            (event.target.name == 'text color') ? divColorBox.setAttribute('onclick', 'chooseTextColor()'): divColorBox.setAttribute('onclick', 'chooseBackgroundColor()');
            divColors.appendChild(divColorBox);
        }
        getS('.bottom').appendChild(divColors);
    } else if (getS('.bottom').children[2]) {
        getS('.bottom').removeChild(getS('.colors'));
        boxColor()
    }
}
//функція задає колір тексту і видаляє квадрат
function chooseTextColor() {
    getS('.top').style.color = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
}
//функція задає колір фону і видаляє квадрат
function chooseBackgroundColor() {
    getS('.top').style.backgroundColor = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
}

//функція ставить текст у відповідний шрифт
function selectFont() {
    getS('.changeFont').value = event.target.innerText
    getS('.top').style.fontFamily = event.target.innerText
}

//функція показує другу сторінку і скриває першу при натисканні на кнопку
function addBtn() {
    getS('.second-step').classList.remove('hidden');
    getS('.first-step').classList.add('hidden');
}

//функція створює таблицю відносно введених даних в інпути і додає таблицю кодом в area
function createTable() {
    const countTr = getS('.countTr').value;
    const countTd = getS('.countTd').value;
    let table = `<table style="border:${borderWidth()}px ${borderStyle()} ${borderColor()}"cellspacing='0'>`
    for (let i = 1; i <= countTr; i++) {
        table += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            table += `<td style="width:${tdWidth()}px;height:${tdHeight()}px;border:${borderWidth()}px ${borderStyle()} ${borderColor()}">TD</td>`;
        }
        table += `</tr>`;
    }
    table += `</table>`;
    getS('.area').value += table;
    reset()
}
//функції витягуй значення для всавки у функцію вище - createTable
let tdWidth = () => getS('.widthTd').value;

let tdHeight = () => getS('.heightTd').value;

let borderWidth = () => {
    if (getS('.borderWidth').value == '') {
        return 1
    } else {
        return getS('.borderWidth').value
    }
};

let borderStyle = () => getS('.changeBorderStyle').value;

let borderColor = () => getS('.changeBorderColor').value;

//функція для кастомного селекту. присвоєння вибраного значення в інпут
let selectValue = () => event.target.parentElement.previousElementSibling.value = event.target.innerText

//функція показує настройки таблиці і скриває настройки списку
function checkedTable() {
    getS('.table-box').classList.remove('hidden');
    getS('.list-box').classList.add('hidden');
}
//функція показує настройки списку і скриває настройки таблиці
function checkedList() {
    getS('.table-box').classList.add('hidden');
    getS('.list-box').classList.remove('hidden');
}



// функція створює список відносно введених даних і додає список кодом в area
function createList() {
    const countLi = getS('.countLi').value;
    let list = `<ul style="list-style-type:${listMark()}">`
    for (let i = 1; i <= countLi; i++) {
        list += `<li>List${i}</li>`;
    }
    list += `</ul>`
    getS('.area').value += list;
    reset()
}

let listMark = () => getS('.changeListMarks').value;

//функція скидає усі настройки
let reset = () => {
    getS('.countLi').value = '';
    getS('.changeListMarks').value = 'circle';
    getS('.countTr').value = '';
    getS('.countTd').value = '';
    getS('.widthTd').value = '';
    getS('.heightTd').value = '';
    getS('.borderWidth').value = '';
    getS('.changeBorderStyle').value = 'solid';
    getS('.changeBorderColor').value = 'black';
    getS('.second-step').classList.add('hidden');
    getS('.first-step').classList.remove('hidden');
}