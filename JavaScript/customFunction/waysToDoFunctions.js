function doctorize(firstName) {
    return `Dr ${firstName}`;
}

//Anonomys function
/* function (firstName) {
    return `Dr ${firstName}`;
} */
//Function expression
/* const doctorize = function (firstName) {
    return `Dr ${firstName}`;
} */


//Arrow function
/* const doctorize = (firstName) => `Mr ${firstName}`; */

//IIFE
/* (function(firstName) {
    console.log(`I'm running`);
    return `Mr ${firstName}`;
})(`Doctor`) */

//Method
const Vadym = {
    firstName : `Vadym`,
    sayHi: function() {
        console.log(`Hello ${this.firstName}`);
        return `Hey ${this.firstName}`;
    },
    //Short hand
    yellHi() {
        return `HI ${this.firstName}`;
    }
}

//Callback function
//click callback
const button = document.querySelector(`.clickMe`);

button.addEventListener(`click`, Vadym.sayHi)

//Timer callback
setTimeout(Vadym.sayHi, 2000)