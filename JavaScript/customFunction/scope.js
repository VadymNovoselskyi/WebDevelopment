function isCool(firstName) {
    let cool;
    if (firstName === `Vadym`) {
        cool = true;
    }
    return cool;
}

let weather = `sunny`

function logWeather() {
    console.log(weather)
}

function changeWeather() {
    let weather = `rainy`
    logWeather()
}

changeWeather()
