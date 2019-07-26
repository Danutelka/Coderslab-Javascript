/* zadanie 3
Na stronie znajduje się guzik. Dopisz do niego event w taki sposób, żeby po 
kliknięciu w niego guzik został usunięty ze strony.
*/

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('a.button');
    button.addEventListener('click', function(event) {
        button.remove('button');
    })
});
