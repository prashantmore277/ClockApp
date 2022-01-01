setInterval(setClock, 1000)
setInterval(getTimeInText, 1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const time = document.querySelector('[time-in-text]')
const colorArray = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green',
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
    'silver', 'teal', 'white', 'yellow'
];


function ChangeBoderColor() {
    let colorIndex = Math.floor((Math.random() * 15) + 1);
    document.getElementById("time").style.borderColor = colorArray[colorIndex];
    // document.getElementById('time').innerHTML = colorIndex;
}

function getTimeInText() {
    const d = new Date();
    let time = d.getHours() % 12 + " : " + d.getMinutes() + " : " + d.getSeconds();
    document.getElementById("time").innerHTML = time;
    ChangeBoderColor()
}

function setClock() {
    const currentDate = new Date()

    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)


}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
getTimeInText()