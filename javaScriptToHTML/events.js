// HTML DOM Element Variables
const light = document.getElementById("light");
const lightSwitch = document.getElementById("switch");
const lightToggle = document.getElementById("toggle");

const searchText = document.getElementById("search_txt");
const searchButton = document.getElementById("search_btn");

// Event Handlers
const lightOn = () => {
    light.innerHTML ="On";
}
const lightOff = () => {
    light.innerHTML = "Off";
}
const searchHandler = () => {
    alert(searchText.value);
}
const eventType = "click";

//Event Listenters and Varients
lightToggle.addEventListener(eventType, lightOff);

lightSwitch.addEventListener(eventType,lightOn);

searchButton.addEventListener(eventType, searchHandler);
