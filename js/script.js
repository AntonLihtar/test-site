'use strict';
//--------------слайдер------------------------
new Swiper('.swiper', {
    //бесконечность
    loop: true,

    //автопрокрутка
    autoplay: {
        //пауза
        delay: 5000,
        //закончить на последнем
        stopOnLastSlide: false,
        //отключить после ручного переключения
        disableOnInteraction: false
    },

    //скорость
    speed: 2000
});

//--------------маска формы кнопки--------------
let phoneMask = IMask(
    document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
});


//----------------модальные окна---------------

//обработчик кнопок слайдера
const btnSlider = document.querySelectorAll('.slide-text button');
const popupActive = document.querySelector('.popup_active');

btnSlider.forEach(function (element) {
    element.addEventListener('click', function () {
        popupActive.style.display = 'block';
    });
});

//формы
let inputName = document.querySelector('input#name');
let inputPhone = document.querySelector('input#phone');

//ф закрывает первое окно и сбрасывает формы
function closePopupWindow() {
    popupActive.style.display = 'none';
    inputName.value = "";
    inputPhone.value = "";
}


//крестик в 1 модальном окне
const closeForm = document.querySelector('.popup-wrapper svg');
closeForm.addEventListener('click', closePopupWindow);

//кнопка в 1м модальном окне
const buttonForm = document.querySelector('.popup-wrapper button');
const popupAnswerActive = document.querySelector('.popup-answer_active');




function getAnswer(event) {
    event.preventDefault(); //выключаем отправку формы на сервер
    console.log(`Ваше имя: ${inputName.value}`);
    console.log(`Ваше телефон: ${inputPhone.value}`);

    closePopupWindow();//выключаем модальное окно
    popupAnswerActive.style.display = 'block'; //включаем 2 окно с ответом



    //ф закрывает мод окно с ответом
    function closeAnswer() {
        popupAnswerActive.style.display = 'none';
    }
    //крестик 2рого окна
    document.querySelector('.popup-answer svg').addEventListener('click', function () {
        closeAnswer();
    });

    setTimeout(closeAnswer, 2500);
}

//обработчик формы 
document.querySelector('#form').addEventListener('submit', getAnswer);

//--------------бургер------------------------


let burgerMenu = document.querySelector('.header-w .burger');
let bodyClass = document.querySelector('.body-class');
let headerMenu = document.querySelector('.mobile-w-menu');

function removeActive() {
    headerMenu.classList.remove('active');
    bodyClass.classList.remove('active');
}

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active'); //меняем бургер на крест
    bodyClass.classList.toggle('active');
    headerMenu.classList.toggle('active'); //меняем меню с горизонтального в вертикальный список
});


//---------обработчик событий на элементы бургер меню ---------
let liClick = document.querySelector('.mobile-w-menu');
liClick.addEventListener('click', removeActive);



