/**
 * Created by Jacek on 2016-01-12.
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