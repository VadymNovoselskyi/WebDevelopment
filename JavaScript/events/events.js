const button = document.querySelector(`.eventButton`);
const coolButton = document.querySelector(`.coolButton`);

function handleClick() {
    console.log(`It got Clicked!!!`);
}

button.addEventListener(`click`, handleClick);
button.removeEventListener(`click`, handleClick);

coolButton.addEventListener(`click`, handleClick);

const buyButtons = document.querySelectorAll(`button.buy`);
/* function buyItem() {
    console.log(`Buying item`);
}

function atachListener(buyButton) {
    buyButton.addEventListener(`click`, buyItem);
}

buyButtons.forEach(atachListener); */

function handleBuyButtonClick(event) {
/*     console.log(`You are bying it!`);
    console.log(event);
    console.log(event.target.dataset.price); */
    console.log(event.currentTarget);
    event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener(`click`, handleBuyButtonClick);
});

window.addEventListener(`click`, function(event) {
    console.log(`You cli cked the window`);
    console.log(event.target)
});

const myImage = document.querySelector(`.image`);
myImage.addEventListener(`mouseenter`, function(event) {
    console.count(event.currentTarget);
    console.log(this);
});