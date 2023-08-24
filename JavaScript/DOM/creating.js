const myParagraph = document.createElement(`p`);
myParagraph.textContent = `I'm a JS created p`;
myParagraph.classList.add(`special`);
console.log(myParagraph)

const myImage = document.createElement(`img`);
myImage.src = `https://picsum.photos/500`;
myImage.alt = `Nice photo`;
console.log(myImage)

const myDiv = document.createElement(`div`);
myDiv.classList.add(`wrapper`);
console.log(myDiv)

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement(`h2`);
heading.textContent = `Cool Things`;


myDiv.insertAdjacentElement(`afterbegin`, heading);


const myUl = document.createElement(`ul`);
const myLi1 = document.createElement(`li`);
const myLi2 = document.createElement(`li`);
const myLi3 = document.createElement(`li`);
const myLi4 = document.createElement(`li`);
const myLi5 = document.createElement(`li`);

myLi1.textContent = `I'm first element in this list`;
myLi2.textContent = `I'm second element in this list`;
myLi3.textContent = `I'm third element in this list`;
myLi4.textContent = `I'm fourth element in this list`;
myLi5.textContent = `I'm fifth element in this list`;

myUl.appendChild(myLi2);
myUl.append(myLi3, myLi4);
myUl.insertAdjacentElement(`afterbegin`, myLi1);
myUl.insertAdjacentElement(`beforeend`, myLi5);

document.body.appendChild(myUl);

