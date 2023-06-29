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