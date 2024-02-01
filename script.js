const featurBtn = document.getElementById('feature-btn').addEventListener('click', increment)
const counterTotal = document.getElementById('counter');

let counter = 0;

function increment() {
    counter++;
    console.log(counter);
    counterTotal.innerHTML = 
        `<h3>This counter is incremented using javascript.</h3> 
        <h3 style="text-align: center">${counter}</h3>`;
};