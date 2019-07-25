/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('a.button');
    var lista = document.querySelectorAll('.list');
    button.addEventListener('click', function(event) {
        button.removeChild('list');
    })
});
