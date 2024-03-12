//uppg1
let uppg1p1 = document.getElementsByTagName('p')[0];
uppg1p1.innerHTML = "got by tag name";

let uppg1p2 = document.getElementById('p2');
uppg1p2.innerHTML = "got by id";

let uppg1h4 = document.getElementsByTagName('h4');
for(let i = 0; i < uppg1h4.length; i++) {
    uppg1h4[i].innerHTML = "change all h4";
}


//uppg2
let section2 = document.getElementsByTagName('section')[1];
let uppg2p = section2.getElementsByTagName('p');
uppg2p[0].style.color = "red";
uppg2p[1].style.color = "blue";
uppg2p[2].style.fontFamily = "Arial";
uppg2p[3].style.fontSize = "small";


//uppg3
let section3 = document.getElementsByTagName('section')[2];
let uppg3h1 = section3.getElementsByTagName('h1');
uppg3h1[0].onclick = click;

function click(e) {
    e.currentTarget.style.color = "red";
}

let uppg3p1 = section3.getElementsByTagName('p')[0];
uppg3p1.onmouseover = hover;
uppg3p1.onmouseleave = unhover;

function hover() {
    uppg3p1.style.background = "gray"
}
function unhover() {
    uppg3p1.style.background = "white"
}


//uppg4
let isClicked = true;
let uppg4MenuButton = document.getElementById('topMenuButton');
let uppg4Menu = document.getElementById('topMenu');
uppg4MenuButton.onclick = menuButtonAction;

function menuButtonAction() {
    if(isClicked) {
        uppg4Menu.style.display = 'block';
    }
    else {
        uppg4Menu.style.display = 'none';
    }

    isClicked = !isClicked;
}


//uppg5
let thumbsContainer = document.getElementById('thumbs');
let thumbsArray = thumbsContainer.getElementsByTagName('img');

for(let i = 0; i < thumbsArray.length; i++) {
    thumbsArray[i].onmouseover = cngImg;
}

function cngImg(e) {
    let largeImg = document.getElementById('largeImg');
    let imgName = e.target.src.split('_')[0] + '.jpg';
    
    largeImg.src = imgName;
}


//uppg6
let calcForm = document.getElementById('calcForm');
calcForm.oninput = calc;

function calc() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    let sum = Number(x) + Number(y);

    document.getElementById('sum').value = sum;
}


//uppg7
let section7 = document.getElementsByTagName('section')[6];
let p7 = section7.getElementsByTagName('p');
console.log(p7);

for(let i = 0; i < p7.length; i++) {
    p7[i].onclick = changeBG;
}

let isGrey = true
function changeBG() {
    if(isGrey) {
        for(let i = 0; i < p7.length; i++) {
            p7[i].style.backgroundColor = "grey";
        }
    }
    else {
        for(let i = 0; i < p7.length; i++) {
            p7[i].style.backgroundColor = "white";
        }
    }

    isGrey = !isGrey;
}