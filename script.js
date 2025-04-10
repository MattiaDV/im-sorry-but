import { excuse } from "./excuse.js";

let text_excuse = document.getElementById('sorryText');
let button_excuse = document.getElementById('sorryButton');
let initial_text = "I'm sorry but ";

button_excuse.addEventListener('click', function() {
    let index = Math.floor(Math.random() * excuse.length);
    text_excuse.innerHTML = initial_text + excuse[index];
});