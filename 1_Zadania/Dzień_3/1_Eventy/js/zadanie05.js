/* zadanie 5
Na stronie znajdują się trzy guziki i jeden licznik. Napisz jeden wspólny event dla 
wszystkich guzików, który spowoduje, że po kliknięciu w guzik licznik zwiększy wartość 
o jeden. Pamiętaj, żeby wszystko pisać w evencie DOMContentLoaded.
 */

document.addEventListener('DOMContentLoaded', function () {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');

    var span = document.querySelector("body > p > span");

    button1.addEventListener('click', function (event) {
        span.innerText = parseInt(span.innerText) + 1;
    });
    button2.addEventListener('click', function (event) {
        span.innerText = parseInt(span.innerText) + 1;
    });
    button3.addEventListener('click', function (event) {
        span.innerText = parseInt(span.innerText) + 1;
    });
});