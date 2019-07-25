$(document).ready(function() {
    // zad 1
    var people = $('.people');
    var addUser = $('#addUser');
    var age = $('#age');
    var btnDodaj = people.find('input[type="submit"]');
    var ustawKolor = function(element, wiek) {
        if(wiek <= 15) {
            element.css('background-color', 'green');
        } else if (wiek >= 16 && wiek <= 40) {
            element.css('background-color', 'blue');
        } else {
            element.css('background-color', 'brown');
        }
    }
    btnDodaj.on('click', function(event) {
        var _name = addUser.val();
        var _age = age.val();
        if(_name.length > 0 && _age.length > 0) {
            var main = people.find('.main');
            var li = $('<li>');
            li.appendTo(main);
            li.text(_name);
            li.attr('data-age', _age);
            ustawKolor(li, _age);
        }
    })
    // zad 2 
    var whereIam = $('.where-i-am div');
    var dodajSpana = function() {
        $('<span>1</span>').insertBefore(whereIam);
        $('<span>2</span>').insertAfter(whereIam);
        $('<span>3</span>').appendTo(whereIam);
        $('<span>4</span>').prependTo(whereIam);
    };
	dodajSpana();	
})