const catDiv = $('.cat');
const catImage = $('.cat-image');
const catCount = $('.cat-count');
const button = $('button');

const cats = [
    {
        name: 'Pepper',
        url: 'img/cat.jpeg', 
        counter: 0
    }, 
    {
        name: 'Salt',
        url: 'img/cat2.jpeg', 
        counter: 0
    }
];
// const html = `<h3 class="cat-count">${cat.counter}</h3><img class="cat-image" src="${cat.url}" alt="Cat"><button>Reset</button>`

cats.forEach((cat) => {
    catDiv.append(
        '<h3 class="cat-count">' + 
        cat.name + ' - ' + cat.counter +
        '</h3><img class="cat-image" src="' +
        cat.url +
        '" alt="' +
        cat.name +
        '">' +
        '<button>Reset</button>'
    );
});

catImage.on('click', 'img', () => {
    $(this).counter++;
    this.catCount.innerHTML = counter;
    console.log($(this));
    console.log(counter);
});

button.on('click', 'button', () => {
    this.counter = 0;
    this.catCount.innerHTML = counter;
});
/*
catImage.addEventListener('click', () => {
    counter++;
    catCount.innerHTML = counter;
});

button.addEventListener('click', () => {
    counter = 0;
    catCount.innerHTML = counter;
});

<button>Reset</button>
*/