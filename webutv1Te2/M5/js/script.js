let uppg1p1 = document.getElementsByTagName('p')[0];
uppg1p1.innerHTML = "got by tag name";

let uppg1p2 = document.getElementById('p2');
uppg1p2.innerHTML = "got by id";

let uppg1h4 = document.getElementsByTagName('h4');
for(let i = 0; i < uppg1h4.length; i++) {
    uppg1h4[i].innerHTML = "change all h4";
}


let section2 = document.getElementsByTagName('section')[1];
let uppg2p = section2.getElementsByTagName('p');
uppg2p[0].style.color = "Red";
uppg2p[1].style.color = "Blue";
uppg2p[2].style.fontFamily = "Arial";
uppg2p[3].style.fontSize = "small";


let section3 = document.getElementsByTagName('section')[2];
let uppg3h1 = section3.getElementsByTagName('h1');
uppg3h1[0].onclick = click;

function click(e) {
    e.currentTarget.style.color = "Red";
}

let uppg3p1 = section3.getElementsByTagName('p')[0];
uppg3p1.onmouseover = hover;

function hover() {
    console.log("Lool");
    uppg3p1.style.background = "grey"
}