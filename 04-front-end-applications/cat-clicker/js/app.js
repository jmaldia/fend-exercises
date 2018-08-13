const catImage = document.querySelector('#cat-image');
const catCount = document.querySelector('#cat-count');
const button = document.querySelector('button');
let counter = 0;

catImage.addEventListener('click', () => {
    counter++;
    catCount.innerHTML = counter;
});

button.addEventListener('click', () => {
    counter = 0;
    catCount.innerHTML = counter;
});
