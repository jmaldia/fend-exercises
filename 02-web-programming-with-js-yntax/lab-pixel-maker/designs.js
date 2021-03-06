// JS selector variables
const canvasSelector = document.querySelector('#pixelCanvas');
const colorSelector = document.querySelector('#colorPicker');
const widthSelector = document.querySelector('#inputWidth');
const heightSelector = document.querySelector('#inputHeight');
const buttonSelector = document.querySelector('#myButton');

// Select color input
// Select size input
let inputWidth, inputHeight;
let color = '#000000';

// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
  // Your code goes here!
  canvasSelector.innerHTML = '';
  
  for (let h = 0; h < height; h++) {
    let row = canvasSelector.insertRow(h);

    for (let w = 0; w < width; w++) {
		row.insertCell(w);
  	}
  }
}

// Creates initial grid
makeGrid(12, 12);

// Calls makegrid function when submit button is clicked
buttonSelector.addEventListener('click', function(e){
    e.preventDefault();
    
    inputWidth = widthSelector.value;
    inputHeight = heightSelector.value;
    
    makeGrid(inputWidth, inputHeight);
});

// Assigns new color to variable
colorSelector.addEventListener('change', function() {
    color = colorSelector.value;
});

canvasSelector.addEventListener('click', function(e) {
    e.preventDefault();
    let targetNode = e.target;

    targetNode.style.backgroundColor = color;
});