/* zadanie 3
Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole 
z checkboksami, w którym użytkownik może wybrać sobie dodatki. Cena każdego z dodatków 
jest trzymana w atrybucie data-price. Napisz takie eventy, żeby po zaznaczeniu checkoxa
wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza wyświetlił się 
alert z wyliczoną kwotą. Zwróć uwagę na dwa specjalne checkboksy:
1 - none – powinien odznaczyć wszystkie inne opcje,
2 - all – powinien zaznaczyć wszystkie inne opcje (poza none).
*/
document.addEventListener("DOMContentLoaded", function() {

    var addons = document.querySelectorAll('[data-price]');
    var sum = document.querySelector('#price');
    var totalPrice = 0;
    var clearAllAdd = document.querySelector('form').children[6].firstElementChild.firstElementChild;
    var setAllAdd = document.querySelector('form').firstElementChild.firstElementChild.firstElementChild;
    // console.log(document.querySelector('form').children[6].firstElementChild);

    clearAll();

    function clearAll () {
        [].forEach.call(addons, function (elem) {   //zerowanie wszstkich checkboxow
            elem.checked = false;
            sum.innerHTML = totalPrice;
        });
    }

    function setAll () {
        [].forEach.call(addons, function (elem) {   //zerowanie wszstkich checkboxow
            elem.checked = true;
            sum.innerHTML = totalPrice;
        });
    }
});