
let countUp = document.getElementById("count-up");
let displayWidget = document.getElementById("display-widget");
 
let count = 0;

function increment() {
    count = count + 1;
    countUp.textContent = count;
}

function save() {
    let delimiter = " - ";
    displayWidget.textContent += " " + count + delimiter;
    countUp.textContent = 0;
    count = 0;
}


//1 Appreciation 2 Success in our academics 3 Financial breakthrough 4 Help get ride of bottlenecks 5 Help in my scholarship