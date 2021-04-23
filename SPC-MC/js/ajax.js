// let obj = Object.entries(this);
//
// let xhr = new XMLHttpRequest();
//
// xhr.response.token = undefined;
//
// const url = "http://cards.danit.com.ua/login";
//
//
//
// xhr.open('POST', url);
//
// xhr.setRequestHeader('Authorization', 'Bearer ' + xhr.response.token);
//
// xhr.responseType = 'json';
//
// xhr.send(JSON.stringify(data));
//
// xhr.onload = function () {
//     if (xhr.status !== 200) {
//         alert(Ошибка ${xhr.status}: ${xhr.statusText});
//     } else {
//         console.log("status: " + xhr.response.status + ", " + "Your token: " + xhr.response.token);
//     }
// };
//
// xhr.onerror = function () {
//     alert("Запрос не удался");
// };
//
//
// //Отправка карточки на сервер и рендер
//
// let xhrCard = new XMLHttpRequest();
//
// xhrCard.open('POST', 'http://cards.danit.com.ua/cards');
//
// xhrCard.setRequestHeader('Authorization', 'Bearer ' + "dbd100a5940d");
//
// xhrCard.responseType = 'json';
//
// xhrCard.send(JSON.stringify(localStorage));
//
// xhrCard.onload = function () {
//     buttonCreate.addEventListener('click', function () {
//         if (doctor.selectedOptions[0].value === "cardiologist") {
//             let cardiologist = new VisitCardio(visitInput, dateInput, fullNameInput, title, pressure, bodyMassIndex, pastDiseases, age);
//             cardiologist.render();
//             console.log(cardiologist);
//             localStorage.setItem('cardiologist', ${Object.entries(cardiologist)});
//
//         } else if (doctor.selectedOptions[0].value === "dentist") {
//             let dentist = new VisitDentist(visitInput, dateInput, fullNameInput, title, lastDate);
//             dentist.render();
//             console.log(dentist);
//             localStorage.setItem('dentist', ${Object.entries(dentist)});
//         } else if (doctor.selectedOptions[0].value === "therapist") {
//             let therapist = new VisitTherapist(visitInput, dateInput, fullNameInput, title, age);
//             therapist.render();
//             console.log(therapist);
//             localStorage.setItem('therapist', ${Object.entries(therapist)});
//         }
//     });
//
//     $('#createCard').on('click', function () {
// //Show or hide list items
//         $('ul.note:last').each(function () {
//             let $ul = $(this),
//                 $lis = $ul.find('li:gt(0)'),
//                 isExpanded = $ul.hasClass('expanded');
//             $lis[isExpanded ? 'show' : 'hide']();
//
//             if ($lis.length > 0) {
//                 $ul
//                     .append($('<span class="showmore"><li class="expand">' + (isExpanded ? 'Show Less' : 'Show More') + '</li></span>')
//                         .click(function (event) {
//                             let isExpanded = $ul.hasClass('expanded');
//                             event.preventDefault();
//                             $(this).html(isExpanded ? 'Show More' : 'Show Less');
//                             $ul.toggleClass('expanded');
//                             $lis.toggle();
//                         }));
//             }
//         });
//     });
// };
//
//
//
// // let result = document.getElementById("result");
//
//
// function deleteCard(item, url) {
//
//     $(".content").on("click", ".delete_card", function () {
//         $(this).parent().remove();
//     });
//
//     return fetch(http://cards.danit.com.ua/cards/${xhrCard.response.id}, {
//     method: 'delete',
//         headers: {'Authorization': 'Bearer ' + "dbd100a5940d"},
//     body: "dbd100a5940d"
// })
// .then(response => response.toString());
//
// }
//
// let xhrRender = new XMLHttpRequest();
//
// xhrRender.open('GET', 'http://cards.danit.com.ua/cards');
// xhrRender.setRequestHeader('Authorization', 'Bearer ' + "dbd100a5940d");
//
// xhrRender.onload = function() {
//     if (xhrRender.status != 200) { // HTTP ошибка?
//         // обработаем ошибку
//         alert( 'Ошибка: ' + xhrRender.status);
//         return;
//     }
//
//     // получим ответ из xhr.response
// };
//
// xhrRender.onprogress = function(event) {
//     // выведем прогресс
//     alert(Загружено ${event.loaded} из ${event.total});
// };
//
// xhrRender.onerror = function() {
//     // обработаем ошибку, не связанную с HTTP (например, нет соединения)
// };
//
// // let obj = Object.entries(this);
// //
// // let xhr = new XMLHttpRequest();
// //
// // xhr.response.token = undefined;
// //
// // const url = "http://cards.danit.com.ua/login";
// //
// // const data = {
// //     email: 'stas-lyu@outlook.com',
// //     password: "Staslyu170397",
// // };
// //
// // xhr.open('POST', url);
// //
// // xhr.setRequestHeader('Authorization', 'Bearer ' + xhr.response.token);
// //
// // xhr.responseType = 'json';
// //
// // xhr.send(JSON.stringify(data));
// //
// // xhr.onload = function () {
// //     if (xhr.status !== 200) {
// //         alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
// //     } else {
// //         console.log("status: " + xhr.response.status + ", " + "Your token: " + xhr.response.token);
// //     }
// // };
// //
// // xhr.onerror = function () {
// //     alert("Запрос не удался");
// // };
// //
// //
// // //Отправка карточки на сервер и рендер
// //
// // let xhrCard = new XMLHttpRequest();
// //
// // xhrCard.open('POST', 'http://cards.danit.com.ua/cards');
// //
// // xhrCard.setRequestHeader('Authorization', 'Bearer ' + "dbd100a5940d");
// //
// // xhrCard.responseType = 'json';
// //
// // xhrCard.send(JSON.stringify(localStorage));
// //
// // xhrCard.onload = function () {
// //     buttonCreate.addEventListener('click', function () {
// //         if (doctor.selectedOptions[0].value === "cardiologist") {
// //             let cardiologist = new VisitCardio(visitInput, dateInput, fullNameInput, title, pressure, bodyMassIndex, pastDiseases, age);
// //             cardiologist.render();
// //             console.log(cardiologist);
// //             localStorage.setItem('cardiologist', `${Object.entries(cardiologist)}`);
// //
// //         } else if (doctor.selectedOptions[0].value === "dentist") {
// //             let dentist = new VisitDentist(visitInput, dateInput, fullNameInput, title, lastDate);
// //             dentist.render();
// //             console.log(dentist);
// //             localStorage.setItem('dentist', `${Object.entries(dentist)}`);
// //         } else if (doctor.selectedOptions[0].value === "therapist") {
// //             let therapist = new VisitTherapist(visitInput, dateInput, fullNameInput, title, age);
// //             therapist.render();
// //             console.log(therapist);
// //             localStorage.setItem('therapist', `${Object.entries(therapist)}`);
// //         }
// //     });
// //
// //     $('#createCard').on('click', function () {
// // //Show or hide list items
// //         $('ul.note:last').each(function () {
// //             let $ul = $(this),
// //                 $lis = $ul.find('li:gt(0)'),
// //                 isExpanded = $ul.hasClass('expanded');
// //             $lis[isExpanded ? 'show' : 'hide']();
// //
// //             if ($lis.length > 0) {
// //                 $ul
// //                     .append($('<span class="showmore"><li class="expand">' + (isExpanded ? 'Show Less' : 'Show More') + '</li></span>')
// //                         .click(function (event) {
// //                             let isExpanded = $ul.hasClass('expanded');
// //                             event.preventDefault();
// //                             $(this).html(isExpanded ? 'Show More' : 'Show Less');
// //                             $ul.toggleClass('expanded');
// //                             $lis.toggle();
// //                         }));
// //             }
// //         });
// //     });
// // };
// //
// //
// //
// // // let result = document.getElementById("result");
// //
// //
// // function deleteCard(item, url) {
// //
// //     $(".content").on("click", ".delete_card", function () {
// //         $(this).parent().remove();
// //     });
// //
// //     return fetch(`http://cards.danit.com.ua/cards/${xhrCard.response.id}`, {
// //         method: 'delete',
// //         headers: {'Authorization': 'Bearer ' + "dbd100a5940d"},
// //         body: "dbd100a5940d"
// //     })
// //         .then(response => response.toString());
// //
// // }
// //
// // // let xhrRender = new XMLHttpRequest();
// // //
// // // xhrRender.open('GET', 'http://cards.danit.com.ua/cards');
// // // xhrRender.setRequestHeader('Authorization', 'Bearer ' + "dbd100a5940d");
// // //
// // // xhrRender.onload = function() {
// // //     if (xhrRender.status != 200) { // HTTP ошибка?
// // //         // обработаем ошибку
// // //         alert( 'Ошибка: ' + xhrRender.status);
// // //         return;
// // //     }
// // //
// // //     // получим ответ из xhr.response
// // // };
// // //
// // // xhrRender.onprogress = function(event) {
// // //     // выведем прогресс
// // //     alert(`Загружено ${event.loaded} из ${event.total}`);
// // // };
// // //
// // // xhrRender.onerror = function() {
// // //     // обработаем ошибку, не связанную с HTTP (например, нет соединения)
// // // };
