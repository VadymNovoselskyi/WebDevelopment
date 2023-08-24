const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);

const moveAmount = 20
const { width, height } = canvas; // same as width = canvas.width; height = canvaas.height;

let x = Math.floor(Math.random() * width);
let y  = Math.floor(Math.random() * height);

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = moveAmount;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
    console.log(key);
    hue += 6;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (key) {
        case `ArrowUp`:
        y -= moveAmount;
        break;
        case `ArrowRight`:
        x += moveAmount;
        break;
        case `ArrowDown`:
        y += moveAmount;
        break;
        case `ArrowLeft`:
        x -= moveAmount;
        break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleKey(event) {
    if (event.key.includes(`Arrow`)) {
        event.preventDefault();
        draw({ key: event.key });
    };
}

window.addEventListener(`keydown`, handleKey);

function clearCanvas() {
    canvas.classList.add(`shake`);
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    canvas.addEventListener(`animationend`, function() {
        console.log(`Removing class`);
        canvas.classList.remove(`shake`);
    })
};

shakeButton.addEventListener(`click`, clearCanvas);
