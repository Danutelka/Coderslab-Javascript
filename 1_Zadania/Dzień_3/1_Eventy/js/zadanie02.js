/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var bubblingButtons = document.getElementById('bubblingButtons');
    var buttons = bubblingButtons.querySelectorAll('button');

    // console.log(buttons);

    buttons.forEach(function(button){
        button.addEventListener('click', function(event){
            this.dataset.counter = parseInt(this.dataset.counter) +1;
        })
    })
});