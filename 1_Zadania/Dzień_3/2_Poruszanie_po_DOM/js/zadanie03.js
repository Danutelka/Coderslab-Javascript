/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.button');

    links.forEach(function(link) {
        var parent = link.parentElement;
        link.addEventListener('click', function(event) {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);    
            this.parentElement.style.backgroundColor = randomColor;
    })        
})
});