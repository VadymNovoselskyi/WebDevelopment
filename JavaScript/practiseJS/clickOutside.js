const cardButtons = document.querySelectorAll(`.card button`);

const modalOuter = document.querySelector(`.modal-outer`);
const modalInner = document.querySelector(`.modal-inner`);

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest(`.card`);
    const imgSrc = card.querySelector(`img`).src;
    const description = card.dataset.description;
    const name = card.querySelector(`h2`).textContent; 
    modalInner.innerHTML = `
    <button class="close-button">X</button>
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${description}</p>
    `;
    modalOuter.classList.add(`open`);
}

cardButtons.forEach(function(button) {
    button.addEventListener(`click`, handleCardButtonClick);
})

function closeModal() {
    modalOuter.classList.remove(`open`);
}

modalOuter.addEventListener(`click`, function(event) {
    const isOutside =  !event.target.closest(`.modal-inner`);
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener(`keydown`, function(event) {
    if (event.key === `Escape`) {
        closeModal();
    }
})

modalInner.addEventListener(`click`, function(event) {
    if (event.target.classList.contains('close-button')) {
        closeModal();
    }
})
