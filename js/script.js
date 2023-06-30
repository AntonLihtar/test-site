//слайдер
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

//маска формы кнопки
let phoneMask = IMask(
    document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
});

//обработчик кнопок слайдера
let btnSlider = document.querySelectorAll('.slide-text button');
let popupActive = document.querySelector('.popup_active');

btnSlider.forEach(function (element) {
    element.addEventListener('click', function () {
        popupActive.style.display = 'block';
    });
});

//крестик в 1 модальном окне
let closeForm = document.querySelector('.popup-wrapper svg');
closeForm.addEventListener('click', function () {
    popupActive.style.display = 'none';
});

//кнопка в 1м модальном окне
let buttonForm = document.querySelector('.popup-wrapper button');
let popupAnswerActive = document.querySelector('.popup-answer_active');

buttonForm.addEventListener('click', function () {

    //выводим содержимое форм в консоль
    let inputNameValue = document.querySelector('input#name').value;
    console.log(`Ваше имя: ${inputNameValue}`);
    let inputPhoneValue = document.querySelector('input#phone').value;
    console.log(`Ваше телефон: ${inputPhoneValue}`);

    popupActive.style.display = 'none'; //выключаем 1 окно
    popupAnswerActive.style.display = 'block'; //включаем 2 окно


    function closeAnswer() {
        popupAnswerActive.style.display = 'none';
    }

    //крестик 2рого окна
    let btnCloseAnswer = document.querySelector('.popup-answer svg');
    btnCloseAnswer.addEventListener('click', function () {
        closeAnswer();
    });

    setTimeout(closeAnswer, 2500);

});




