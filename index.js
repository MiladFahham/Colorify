function paint(color){
    const circle = document.getElementById(`circleID`);
    circle.style = `background-color:${color}`;
}

function randomPaint(){
    const colors = [`red`, `green`, `yellow`];

    randomColor = colors[Math.floor(Math.random() * colors.length)];

    paint(randomColor);
}