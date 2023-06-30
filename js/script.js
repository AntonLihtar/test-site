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

let phoneMask = IMask(
    document.getElementById('phone'), {
      mask: '+{7}(000)000-00-00'
    });
