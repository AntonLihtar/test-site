# test-site

## тестовое задание (верстка первых 3х блоков)

### Требования:

1. Чистая CSS верстка без использования фреймворков (Bootstrap и прочих).
2. Hover эффекты для всех ссылок и активных элементов
3. Слайдер с использованием swiper slider (https://swiperjs.com/)

### Дополнительно сделано:

1. Адаптация для всех устройств c шириной от 320px до 1920px+
2. Плавный скролл между блоками из меню(используется только кнопка "Наши услуги")
3. Использованы предпроцессоры SCSS
4. При нажатии кнопок в слайдере "Записаться", открывается 1 модальное окно.
   Написан скрипт для него.
   - Работает крестик(закрытие) в модальном окне.
   - Работают кнопка , при нажатии отправляет данные в консоль(отправка на   сервер отключена) 
     Открывает 2 модальное окно с текстом подтверждения.
    <br>
   - формы при закрытии или отправке очищаются (на это действие в консоли реагирует скрипт маски.) 
   - 2 окно с ответом закрывается по крестику или через 2.5 секунды автоматически.
