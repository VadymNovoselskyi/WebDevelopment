/* const p = document.querySelector(`p`);
console.log(p);

const divs = document.querySelectorAll(`div`);
console.log(divs); 

const items = document.querySelectorAll(`.item`);
console.log(items); 

const divItems = document.querySelectorAll(`div.item`);
console.log(divItems); 

const ps = document.querySelectorAll(`.item p`);
console.log(ps);*/


/* const heading = document.querySelector(`h2`);
console.log(heading); 
console.dir(heading); 
console.log(heading.textContent);
heading.textContent = `Hey! I'v changed`;
console.log(heading.textContent);  */


/* const pizzaList = document.querySelector(`.pizza`);
console.log(pizzaList.textContent);
pizzaList.insertAdjacentText(`beforeend`, `🍕`) */


const pic = document.querySelector(`.class1`);
/* pic.classList.add(`class3`);
pic.classList.remove(`class2`); */

function toggleRound() {
    pic.classList.toggle(`round`);
}

pic.addEventListener(`click`, toggleRound);
console.log(pic.classList);
 

pic.alt = `Random cool picture`; //setter
console.log(pic.alt); //getter\

const custom = document.querySelector(`.custom `);
console.log(custom.dataset);

custom.addEventListener(`click`,  function() {
    alert(`Welcome ${custom.dataset.name}`)
});
