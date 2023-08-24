const terms = document.querySelector(`.terms-and-conditions`);
const watch = document.querySelector(`.watch`)
const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1, });
const acceptButton = document.querySelector(`.accept`); 

function obCallback(payload) {
    if (payload[0].intersectionRatio) {
        acceptButton.disabled = false;
        ob.observe(terms.lastElementChild);
    }
/*     else {
        acceptButton.disabled = true;
    } */
}

ob.observe(terms.lastElementChild);

function scrollToAccept() {
    if(!terms) {
        return;
    }
    terms.addEventListener(`scroll`, function(event) {

    })
}

scrollToAccept(); 
