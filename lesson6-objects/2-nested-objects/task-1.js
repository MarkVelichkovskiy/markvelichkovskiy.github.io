/**
 * Створити об'єкт студента з ім'ям, прізвищем та 
 * наступнипи оцінками по розділам
 * html - 78
 * css - 89
 * js - 77
 * python - 66
 * 
 * Запитувати у користувача, за яким розділом він хоче дізнатися оцінку
 * та виводити оцінку повідомленням
 * 
 * Якщо такого розділу немає, то повідомляти про це
 * 
 */

const student = {
    firstname: 'Sam',
    lastname: 'Smith',
    count: {
        html: 78,
        css: 89,
        js: 77,
        python: 66,
    }
}
let user = prompt ("По какому предмету ходите узнать оценку?");
 alert (student.count[user]);