const hour = document.querySelector('.hand.hours');
const minutes = document.querySelector('.hand.minutes');
const seconds = document.querySelector('.hand.seconds');

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    setRotation(seconds, secondsPercentage);
    setRotation(minutes, minutesPercentage);
    setRotation(hour, hoursPercentage);
}

setClock();

setInterval(setClock, 1000);