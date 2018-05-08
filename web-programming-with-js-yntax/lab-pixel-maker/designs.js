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
  
  for (let w = 0; w < width; w++) {
    let row = canvasSelector.insertRow(w);
    
    for (let h = 0; h < height; h++) {
		row.insertCell(h);
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