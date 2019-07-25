$(document).ready(function() {
    // zad 1
    var btnHero1 = $('button.ironMan-btn');
    var btnHero2 = $('button.thor-btn');
    var btnHero3 = $('button.wolverine-btn');

    btnHero1.on('click', function(event) {
        console.log('kliknieto mnie');
    });
    btnHero2.one('click', function(event) {
        console.log('kliknięto mnie, ale już drugi raz nie dam się kliknąć');
    });
    btnHero3.on('click', function(event) {
        btnHero1.off('click');
        btnHero2.off('click');
        btnHero3.off('click');
    });
    // zad 3
    var desc = $('.superhero-description');
    // chowamy dd
    desc
        .find('dd')
        .hide()
    ;
    var dts = desc.find('dt');
    dts.on('click', function(event) {
        $(this)
            .next()
            .toggle()
        ;
    });
    // zad 4 
    var btn = $('.show-hide-btn');
    var password = $('.user-pass');
    btn.on('click', function (event) {
        event.preventDefault();
        if (password.attr('type') === 'text') {
            password.attr('type', 'password')
        } else {
            password.attr('type', 'text')
        }
    })
    // zad 5
    var menu = $('.menu');
        menu
            .find('a')
        ;
    menu.on('mouseenter', function(event) {
        console.log('hurra');
    });
    // zad 6
    var formularz = $('form.Login');
    var inputy = formularz.find('input');
        inputy.on('click', function(event){
           $(this).css('box-shadow', '-10px -10px 5px grey');
        });
           inputy.on('mouseleave', function(event){
           $(this).css('background-color', 'grey');
        });
    });
