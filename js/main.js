const getS = selector => document.querySelector(selector);

function editBtn() {
    getS('.edit-block').classList.remove('hidden');
    getS('.area').value = getS('.top').innerHTML;
    getS('.style-block').classList.add('hidden');
    if (getS('.bottom').children[2]) {
        getS('.bottom').removeChild(getS('.colors'));
    }
}

function styleBtn() {
    getS('.edit-block').classList.add('hidden');
    getS('.style-block').classList.remove('hidden');
}

function saveBtn() {
    getS('.top').innerHTML = getS('.area').value;
    getS('.edit-block').classList.add('hidden');
}

function fontSize() {
    getS('.top').style.fontSize = event.target.value;
}

function fontWeight() {
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal';
}

function fontStyle() {
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal';
}

const colors = ['red', 'blue', 'green', 'black', 'yellow', 'coral', 'rgb(234, 238, 239)', 'purple', 'pink'];

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

function chooseTextColor() {
    getS('.top').style.color = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
}

function chooseBackgroundColor() {
    getS('.top').style.backgroundColor = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
}

function selectFont() {
    getS('.changeFont').value = event.target.innerText
    getS('.top').style.fontFamily = event.target.innerText
}

function addBtn() {
    getS('.second-step').classList.remove('hidden');
    getS('.first-step').classList.add('hidden');
}

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

let selectValue = () => event.target.parentElement.previousElementSibling.value = event.target.innerText

function checkedTable() {
    getS('.table-box').classList.remove('hidden');
    getS('.list-box').classList.add('hidden');
}

function checkedList() {
    getS('.table-box').classList.add('hidden');
    getS('.list-box').classList.remove('hidden');
}

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