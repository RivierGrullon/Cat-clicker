/* model this is who contains the data to send to view*/

const model = {
    currentCat: null,
    cats: [
        {
            name: 'Tom',
            clickCount: 0,
            src:'img/22252709_010df3379e_z.jpg'
        },
        {
            name: 'Toy jalto',
            clickCount: 0,
            src:'img/1413379559_412a540d29_z.jpg'
        },
        {
            name: 'PEPE',
            clickCount: 0,
            src:'img/4154543904_6e2428c421_z.jpg'
        },
        {
            name: 'Teddy',
            clickCount: 0,
            src:'img/434164568_fea0ad4013_z.jpg'
        },
        {
            name: '',
            clickCount: 0,
            src:'img/9648464288_2516b35537_z.jpg'
        }
    ]
}

const controller = {
    init: function() {

        model.currentCat = model.cats[0];
        nameOfCatsList.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};

const catView = {
    init: function (){
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click', function() {
            controller.incrementCounter();
        });

        this.render();
    },

    render: function (){
        let currentCat = controller.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.src;
    }
}

const nameOfCatsList = {
    init: function(){
        this.getList = document.querySelector('#cat-list');
        this.render();
    },
    render: function() {

        var cats = controller.getCats();

        this.getList.innerHTML = '';

        for (let i = 0; i < cats.length; i++) {
            let cat = cats[i];

            let elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
            this.getList.appendChild(elem);
        }
    }
};


controller.init()