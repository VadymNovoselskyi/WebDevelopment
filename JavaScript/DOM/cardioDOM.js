// Make a div
const myDiv = document.createElement(`div`);
// add a class of wrapper to it
myDiv.classList.add(`wrapper`);
// put it into the body
document.body.append(myDiv);
// make an unordered list
const myList = document.createElement(`ul`);
// add three list items with the words "one, two, three" in them
const myLi1 = document.createElement(`li`);
myLi1.textContent = `One`;
const myLi2 = document.createElement(`li`);
myLi2.textContent = `Two`;
const myLi3 = document.createElement(`li`);
myLi3.textContent = `Three`;
// put that list into the above wrapper
myList.append(myLi1, myLi2, myLi3);
myDiv.append(myList);
// create an image
const myImage = document.createElement(`img`);
// set the source to an image
myImage.src = `https://picsum.photos/250`;
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add(`cute`);
// add an alt of Cute Puppy
myImage.alt = `Cute puppy`;
// Append that image to the wrapper
myDiv.append(myImage);
// with HTML string, make a div, with two paragraphs inside of it
const myString = `
<div>
    <p>First string paragraph</p>
    <p>Second string paragraph</p>
</div>
`;
// put this div before the unordered list from above
document.body.insertAdjacentHTML(`beforebegin`, myString);
// add a class to the second paragraph called warning
const myStringGetter = document.querySelector(`div`);
myStringGetter.lastElementChild.classList.add(`warning`);
// remove the first paragraph
myStringGetter.firstElementChild.remove();
// create a function called generat ePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name = ``, age =``, height =``,  number= ``) {
    function ageInDogYears (ageInHumanYears) {
        return Math.round(ageInHumanYears / 6) 
    }
    return `
    <div class="playerCard number${number}">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} cm high and ${age} years old. In dog years this persin would be ${ageInDogYears(age)}</p>
    </div>
    ` 
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
// make a new div with a class of cards
const myCards = document.createElement(`div`);
myCards.classList.add(`cards`);
// make 4 player cards using generatePlayerCard
const myCard1 = generatePlayerCard(`Oleg`, 50, 176, 1);
const myCardFramgment1 = document.createRange().createContextualFragment(myCard1);

const myCard2 = generatePlayerCard(`Nikolai`, 36, 182, 2);
const myCardFramgment2 = document.createRange().createContextualFragment(myCard2);

const myCard3 = generatePlayerCard(`Eva`, 16, 170, 3);
const myCardFramgment3 = document.createRange().createContextualFragment(myCard3);

const myCard4 = generatePlayerCard(`Galya`, 80, 163, 4);
const myCardFramgment4 = document.createRange().createContextualFragment(myCard4);
// append those cards to the div
myCards.append(myCardFramgment1, myCardFramgment2, myCardFramgment3, myCardFramgment4);
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement(`afterbegin`, myCards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
function deleteCard() {
    const myButton = document.querySelector(`button`);
    myButton.parentElement.remove();
}

const deleteButton1 = document.createElement(`button`);
deleteButton1.textContent = `Delete`;
const myCardNumber1 = document.querySelector(`.number1`);
myCardNumber1.append(deleteButton1);
deleteButton1.addEventListener(`click`, deleteCard);

const deleteButton2 = document.createElement(`button`);
deleteButton2.textContent = `Delete`;
const myCardNumber2 = document.querySelector(`.number2`);
myCardNumber2.append(deleteButton2);
deleteButton2.addEventListener(`click`, deleteCard);

const deleteButton3 = document.createElement(`button`);
deleteButton3.textContent = `Delete`;
const myCardNumber3 = document.querySelector(`.number3`);
myCardNumber3.append(deleteButton3);
deleteButton3.addEventListener(`click`, deleteCard);

const deleteButton4 = document.createElement(`button`);
deleteButton4.textContent = `Delete`;
const myCardNumber4 = document.querySelector(`.number4`);
myCardNumber4.append(deleteButton4);
deleteButton4.addEventListener(`click`, deleteCard);
