'use strict';

document.getElementById('firstInput').addEventListener('click', function () {

    let input = document.getElementById('firstPassword');
    if (input.type === 'password') {
        document.getElementById('firstInput').classList.replace('fa-eye', 'fa-eye-slash');
        input.type = 'text';
    } else {
        input.type = 'password';
        document.getElementById('firstInput').classList.replace('fa-eye-slash', 'fa-eye');
    }
});
document.getElementById('secondInput').addEventListener('click', function () {

    let input = document.getElementById('secondPassword');
    if (input.type === 'password') {
        document.getElementById('secondInput').classList.replace('fa-eye', 'fa-eye-slash');
        input.type = 'text';
    } else {
        input.type = 'password';
        document.getElementById('secondInput').classList.replace('fa-eye-slash', 'fa-eye');
    }
});
document.getElementById('btn').addEventListener('click', () => {
   if (firstPassword.value === secondPassword.value) {
       alert('You are welcome');
   } else {
       errorMessage.innerText = 'Нужно ввести одинаковые значения';
   }
});