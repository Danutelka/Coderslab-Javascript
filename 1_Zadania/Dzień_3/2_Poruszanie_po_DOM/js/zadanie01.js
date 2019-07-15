/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('.listContainer');

    divs.forEach(function(div) {
        div.addEventListener('mouseover', function(event) {
            this.classList.add('hovered');
        })

        var list = div.querySelector('.list');
        list.firstElementChild.addEventListener('mouseover', function(event) {
            this.style.backgroundColor = 'red';
        })

        list.lastElementChild.addEventListener('mouseover', function(event) {
             this.style.backgroundColor ='blue';
        });

        for(var i = 1; i < list.children.length - 1; i++) {
            list.children[i].addEventListener('mouseover', function(event) {
                this.style.backgroundColor = 'green';
            });
        }
    })
});