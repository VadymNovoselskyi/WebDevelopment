const traversing = document.querySelector(`.traversing`);
console.log(traversing.children);

console.log(traversing.firstElementChild);
console.log(traversing.lastElementChild);
console.log(traversing.previousElementSibling);
console.log(traversing.nextElementSibling);
console.log(traversing.parentElement);
console.log(traversing.childNodes);

const p = document.createElement(`p`);
p.textContent = `I'll be removed`;
document.body.append(p);
p.remove();
console.log(p);