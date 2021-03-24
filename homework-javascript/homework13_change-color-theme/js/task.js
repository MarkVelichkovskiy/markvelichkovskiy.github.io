// Задание
// Реализовать возможность смены цветовой темы сайта пользователя. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Взять любое готовое домашнее задание по HTML / CSS.
// Добавить на макете кнопку "Сменить тему".
// При нажатии на кнопку - менять цветовую гамму сайта (цвета кнопок, фона и т.д.) на ваше усмотрение.
// При повтором нажатии - вернуть все как было изначально - как будто для страницы доступны две цветовых темы.
// Выбранная тема должна сохраняться и после перезагрузки страницы

let defaultTopic = 'white';
let greenTopic = 'green';
if(localStorage.getItem('bg')){
    document.querySelector('.main').style.backgroundColor = localStorage.getItem('bg');
} else {
    document.querySelector('.main').style.backgroundColor = defaultTopic;
}

function togglChangeTopic(){
    let topic = localStorage.getItem('bg');
    if(!topic) {
        localStorage.setItem('bg', greenTopic)
        document.querySelector('.main').style.backgroundColor = greenTopic;
    } else {
        localStorage.removeItem('bg')
        document.querySelector('.main').style.backgroundColor = defaultTopic;
    }
}