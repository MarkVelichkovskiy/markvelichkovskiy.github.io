// (function() {
// const burger = document.querySelector('.burger');
// burger.addEventListener('click', () => {
//     burger.classList.toggle('burger-active');
// })
// }())
const burgerIcon = document.querySelector('.burger-menu-icon');
const closeIcon = document.querySelector('.close-burger-menu');
const burgerMenu = document.querySelector('.burger-menu');


function showMenu (){
    burgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    burgerMenu.style.display = 'block';
}
function closeMenu (){
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    burgerMenu.style.display = 'none';
}