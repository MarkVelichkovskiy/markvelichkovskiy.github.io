'use strict';

function filterBy(list, dataType) {
    let newArray = list.filter(function(item) {
        return typeof (item) !== dataType ;
    });
    document.getElementById("h2").innerText = "Result: " + newArray;
    console.log(newArray);
    return newArray;
}

filterBy(['hello', 'world', 23, '23', null], 'string');