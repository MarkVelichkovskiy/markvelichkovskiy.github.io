'use strict';

function showList(list) {
    let array = [];
    let newArray = [];
    let finalArray = [];
    function traverse(theObject) {

        for (let key in theObject) {
            if (theObject[key] != null && typeof (theObject[key]) == 'object') {
                traverse(theObject[key]);

            } else {

                array.push(theObject[key]);
                newArray = array.map(word => `<li>${word}</li>`);
                finalArray = newArray.join('');
                document.body.children[2].innerHTML = finalArray;
            }
        }
    }
    traverse(list);

    let i = 10;
    let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i === 0) {
        document.getElementById('list').classList.add("none");
        document.getElementById('timer').classList.add("none");
        clearInterval(timerId);
        newArray = [];
        }

        i--;
    }, 1000);

}

showList(['hello', 'world', ["Mark", "Velichkovskiy"], 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);