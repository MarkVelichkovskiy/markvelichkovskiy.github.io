// Задание
// Написать реализацию кнопки "Показать пароль". Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// В файле index.html лежит разметка для двух полей ввода пароля.
// По нажатию на иконку рядом с конкретным полем - должны отображаться символы, которые ввел пользователь, 
//иконка меняет свой внешний вид. В комментариях под иконкой - иконка другая, именно она должна отображаться вместо текущей.
// Когда пароля не видно - иконка поля должна выглядеть, как та, что в первом поле (Ввести пароль)
// Когда нажата иконка, она должна выглядеть, как та, что во втором поле (Ввести пароль)
// По нажатию на кнопку Подтвердить, нужно сравнить введенные значения в полях
// Если значения совпадают - вывести модальное окно (можно alert) с текстом - You are welcome;
// Если значение не совпадают - вывести под вторым полем текст красного цвета  Нужно ввести одинаковые значения

// После нажатия на кнопку страница не должна перезагружаться
// Можно менять разметку, добавлять атрибуты, теги, id, классы и так далее.

const firstInput = document.querySelector('.first-input');
const secondInput = document.querySelector('.second-input');

function changeTypeFirstInput(){
    
    if(firstInput.type === 'password'){
        firstInput.type = 'text';
        document.querySelector('.first-block-password').style.display = 'none';
        document.querySelector('.first-show-password').style.display = 'block';
    }else{
        firstInput.type = 'password';
        document.querySelector('.first-show-password').style.display = 'none';
        document.querySelector('.first-block-password').style.display = 'block';
    }
}

function changeTypeSecondInput(){
    if(secondInput.type === 'password'){
        secondInput.type = 'text';
        document.querySelector('.second-block-password').style.display = 'none';
        document.querySelector('.second-show-password').style.display = 'block';
    }else{
        secondInput.type = 'password';
        document.querySelector('.second-show-password').style.display = 'none';
        document.querySelector('.second-block-password').style.display = 'block';
    }
}

function validatePassword(){
    if (firstInput.value === secondInput.value){
        alert('You are welcome');
    }else{
        document.querySelector('.warning-text').style.display = 'block';

    }
}