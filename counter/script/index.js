
let countUp = document.getElementById("count-up");
let displayWidget = document.getElementById("display-widget");
 
let count = 0;

function increment() {
    count = count + 1;
    countUp.innerText = count;
}

function save() {
    let delimiter = " - ";
    displayWidget.innerText += " " + count + delimiter;
    count = 0;
}


//1 Appreciation 2 Success in our academics 3 Financial breakthrough 4 Help get ride of bottlenecks 5 Help in my scholarship