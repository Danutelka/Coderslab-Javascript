/* zadanie 2
Na stronie przypisanej do zadania znajduje się lista i guzik. 
Dopisz odpowiednie eventy do nich w taki sposób, żeby po kliknięciu w guzik dodał 
się nowy element do listy. Element powinien mieć w sobie informacje na temat tego,
 ile elementów jest w liście w chwili jego dodania.
 */

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('a.button');
    var menu = document.querySelector('ul.menu');
    var counter = 0;
    button.addEventListener('click', function(event) {
        var li = document.createElement('li');
        counter += 1;
        li.innerText = 'liczba: ' + counter.toString();
        menu.appendChild(li);
    });
});