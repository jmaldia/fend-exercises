let model = {
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
    ],

    addNumber: () => {
        this.counter++;
    }
}

// This is the View 
// It controls what the user sees
let view =  {
    // This sets up what is initially seen on the page
    init: () => {
        const catsDiv = $('.cats');
        const menu = $('.menu');
        const catCount = $('.cat-count');
        const button = $('button');
        const reset = $('.reset');

        const randomNum = Math.floor(Math.random() * cats.length);

        // This sets up the menu
        cats.forEach((cat, index) => {
            menu.append(
                '<li class="li' +
                index +
                '">' + 
                '<a href="#" data-index="' +
                index +
                '">' +
                cat.name +
                '</a></li>'
            );
        });

        menu.on('click', 'li a', (e) => {
            let index = e.currentTarget.dataset.index;
        
            catsDiv.empty();
            catsDiv.append(
                '<div class="cat">' +
                    '<h2 class="cat-name">' + 
                    cats[index].name +
                    '</h2><img class="cat-image" src="' +
                    cats[index].url +
                    '" alt="' +
                    cats[index].name +
                    '" data-index="' +
                    index +
                    '"><br><h3 class="cat-count index' +
                    index +
                    '">' + 
                    cats[index].counter +
                    '</h3><br><button data-index="' +
                    index +
                    '">Reset</button>' +
                '</div>'
            );
        });

        reset.on('click', () => {
            let confirmReset = confirm('Are you sure?');
            if (confirmReset) {
                cats.forEach((cat) => {
                    cat.counter = 0;
                    catsDiv.find('h3').html(cat.counter);
                });
            }
        });
        
    }, 

    // This renders the featured cat
    render: () => {
        catsDiv.append(
            '<div class="cat">' +
                '<h2 class="cat-name">' + 
                cats[randomNum].name +
                '</h2><img class="cat-image" src="' +
                cats[randomNum].url +
                '" alt="' +
                cats[randomNum].name +
                '" data-index="' +
                0 +
                '"><br><h3 class="cat-count index' +
                0 +
                '">' + 
                cats[randomNum].counter +
                '</h3><br><button data-index="' +
                0 +
                '">Reset</button>' +
            '</div>'
        );

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
    }
}

let controller = () => {
    view.init();
    view.render();
}

controller();