// Mobile only 
let menu = document.querySelector('nav');
let mainBody = document.querySelector('main');
let hamburger = document.querySelector('#nav-toggle');
let screenWidth = window.matchMedia("(min-width: 480px)");

// Shows/Hides the nav when the hamburger is clicked
hamburger.addEventListener('click', function(e){
	e.preventDefault();
	menu.classList.toggle('open');
});

// Removes the open class to hide the nave when you click anywhere else
mainBody.addEventListener('click', function(e){
	e.preventDefault();
	menu.classList.remove('open');
});

// Removes open class at a min width
screenWidth.addEventListener('change', function(e){
	e.preventDefault();
	menu.classList.remove('open');
});