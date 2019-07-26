/* zadanie 8
Na stronie znajdują się zagnieżdżone elementy. Do każdego dopisane są eventy. 
Użyj metod stopPropagation i stopImmediatePropagation w taki sposób, aby:
1 - Wywoływały się eventy dla elementu pierwszego i drugiego, a nie wywoływał się event 
    dla elementu trzeciego.
2 - Wywoływały się wszystkie eventy dla elementu czwartego i pierwszy event dla elementu
    piątego.
*/

document.addEventListener("DOMContentLoaded", function() {
    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var element4 = document.getElementById("element4");
    var element5 = document.getElementById("element5");

    element1.addEventListener("click", function(event) {
        console.log("Click in element 1");
    });

    element2.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("Click in element 2");
    });

    element3.addEventListener("click", function(event) {
        console.log("Click in element 3");
    });

    element4.addEventListener("click", function(event) {
        console.log("Click in element 4");
        event.stopImmediatePropagation();
    });

    element5.addEventListener("click", function(event) {
        console.log("Click in element 5 - 2");
    });

});
