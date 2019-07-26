/* zadanie 4
Na stronie znajduje się lista z wpisami i guzik. Napisz taki event, żeby po kliknięciu
 w guzik z listy zostały usunięte wszystkie jej dzieci.
 */
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('a.button');
    var list = document.querySelectorAll('.list');
    button.addEventListener('click', function(event) {
        button.removeChild('list');
    })
});
