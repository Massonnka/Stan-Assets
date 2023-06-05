let menuElemOne = document.getElementById('list-1');
let menuElemTwo = document.getElementById('list-2');
let menuElemThree = document.getElementById('list-3');
let menuElemFour = document.getElementById('list-4');
let menuElemFive = document.getElementById('list-5');

let titleElemOne = menuElemOne.querySelector('.questions-content-image');
let titleElemTwo = menuElemTwo.querySelector('.questions-content-image');
let titleElemThree = menuElemThree.querySelector('.questions-content-image');
let titleElemFour = menuElemFour.querySelector('.questions-content-image');
let titleElemFive = menuElemFive.querySelector('.questions-content-image');

titleElemOne.onclick = function() {
    menuElemOne.classList.toggle('open');
};

titleElemTwo.onclick = function() {
    menuElemTwo.classList.toggle('open');
};

titleElemThree.onclick = function() {
    menuElemThree.classList.toggle('open');
};

titleElemFour.onclick = function() {
    menuElemFour.classList.toggle('open');
};

titleElemFive.onclick = function() {
    menuElemFive.classList.toggle('open');
};


let i = 1;
for(let li of carousel.querySelectorAll('.gallery-card')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0"></span>`);
    i++;
}

/* конфигурация */
let width = 400; // ширина картинки
let count = 3; // видимое количество изображений
let list = carousel.querySelector('.gallery-cards');
let listElems = carousel.querySelectorAll('.gallery-card');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

let footerButton = document.getElementById('footer-button')
let headerAction = document.getElementById('header-section')

footerButton.onclick = function() {
    headerAction.scrollIntoView({block: "start", behavior: "smooth"});
}

let point1 = document.getElementById('point1');
let point2 = document.getElementById('point2');
let point3 = document.getElementById('point3');

let pointOne = point1.querySelector('.point');
let pointTwo = point2.querySelector('.point');
let pointThree = point3.querySelector('.point');

pointOne.onclick = function() {
    point1.classList.add('point-action');
    point2.classList.remove('point-action');
    point3.classList.remove('point-action');
}

pointTwo.onclick = function() {
    point1.classList.remove('point-action');
    point2.classList.add('point-action');
    point3.classList.remove('point-action');
}

pointThree.onclick = function() {
    point1.classList.remove('point-action');
    point2.classList.remove('point-action');
    point3.classList.add('point-action');
}