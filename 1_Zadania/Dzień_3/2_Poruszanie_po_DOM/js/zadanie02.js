/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.button');
 
    links.forEach(function(link) {
 
        link.addEventListener('click', function(event) {
            var brother = this.nextElementSibling;
            if (brother) { // sprawdzam czy nie jest null
                if (brother.style.display != 'none') {
                    brother.style.display = 'none';
                } else {
                    brother.style.display = 'block';
                }
            }
        })
 
    })
 });