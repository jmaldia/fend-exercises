const catsDiv = $('.cats');
const catCount = $('.cat-count');
const button = $('button');
const reset = $('.reset');

const cats = [
    {
        name: 'Salt',
        url: 'img/cat0.jpeg', 
        counter: 0
    },
    {
        name: 'Pepper',
        url: 'img/cat1.jpeg', 
        counter: 0
    },
    {
        name: 'Oil',
        url: 'img/cat2.jpeg', 
        counter: 0
    },
    {
        name: 'Vinegar',
        url: 'img/cat3.jpeg', 
        counter: 0
    },
    {
        name: 'Bread',
        url: 'img/cat4.jpeg', 
        counter: 0
    },
    {
        name: 'Butter',
        url: 'img/cat5.jpeg', 
        counter: 0
    }
];
// const html = `<h3 class="cat-count">${cat.counter}</h3><img class="cat-image" src="${cat.url}" alt="Cat"><button>Reset</button>`

cats.forEach((cat, index) => {
    catsDiv.append(
        '<div class="cat">' +
            '<h2 class="cat-name">' + 
            cat.name +
            '</h2><img class="cat-image" src="' +
            cat.url +
            '" alt="' +
            cat.name +
            '" data-index="' +
            index +
            '"><br><h3 class="cat-count index' +
            index +
            '">' + 
            cat.counter +
            '</h3><br><button data-index="' +
            index +
            '">Reset</button>' +
        '</div>'
    );
});

$('h1').on('click', (e) => {
    console.log(e);
});

catsDiv.on('click', 'img', (e) => {
    let index = e.currentTarget.dataset.index;
    let h3Index = 'h3.index' + index;

    cats[index].counter++;

    catsDiv.find(h3Index).html(cats[index].counter);
});

catsDiv.on('click', 'button', (e) => {
    let index = e.currentTarget.dataset.index;
    let h3Index = 'h3.index' + index;

    cats[index].counter = 0;

    catsDiv.find(h3Index).html(cats[index].counter);
});

reset.on('click', () => {
    cats.forEach((cat) => {
        cat.counter = 0;
        catsDiv.find('h3').html(cat.counter);
    });
});

