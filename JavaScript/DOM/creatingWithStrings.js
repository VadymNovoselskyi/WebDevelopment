const item = document.querySelector(`.item`);
console.log(item);
console.log(item.innerHTML);
const myHTML = `
<div>
<h1>Hey how are u?</h1>
</div>
`
console.log(item.innerHTML);

const myFramgment = document.createRange().createContextualFragment(myHTML);
document.body.append(myFramgment);