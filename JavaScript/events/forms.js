var wes = document.querySelector(`.wes`);
wes.addEventListener(`click`, function(event) {
    const shouldChangePage = confirm(`This website might be hateful! Do you want to procced?`);
    if(!shouldChangePage) {
        event.preventDefault();
    }
});

const signupForm = document.querySelector(`[name="signup"]`);

signupForm.addEventListener(`submit`, function(event) {
/*     event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked); */
    const name = event.currentTarget.name.value;
    if(name.includes(`Chad`)) {
        alert(`Sorry bro`);
        event.preventDefault();
    }
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}

signupForm.name.addEventListener(`keyup`, logEvent);
signupForm.name.addEventListener(`keydown`, logEvent);
signupForm.name.addEventListener(`focus`, logEvent);
signupForm.name.addEventListener(`blur`, logEvent);
