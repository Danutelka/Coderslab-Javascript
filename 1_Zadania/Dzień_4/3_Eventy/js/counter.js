$(document).ready(function() {
    var textarea = $('form > textarea');
    var counter = $('#counter span');
    textarea.on('keyup', function(event) {
        var length = $(this).val().length;
        counter.text(length);
        if (length <= 33) {
            counter.css('color', 'green'); 
        } else if (length >= 34 && length <= 66) {
            counter.css('color', 'yellow');
        } else {
            counter.css('color', 'red');
        }
        }); 
    });