$(document).ready(function() {
    /* zadanie 1
    Znajdź w pliku index.html trzy buttony w elemencie o klasie hero-buttons. 
    Stwórz funkcję, w której wykonaj następujące czynności:
    1 - ustaw każdy z trzech przycisków pod inną zmienną,
    2 - dla elementu pierwszego ustaw event click, który po kliknięciu wyświetli w 
    konsoli napis "kliknięto mnie",
    3 - dla elementu drugiego ustaw event click, który po kliknięciu wyświetli w 
    konsoli napis "kliknięto mnie, ale już drugi raz nie dam się kliknąć",
    4 - dla trzeciego wywołaj metodę off, która odczepi wszystkie eventy z wszystkich 
    przycisków.
    Przetestuj działanie Twojej funkcji.
    */
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

    /* zadanie 3
    Znajdź w pliku html sekcję o klasie superhero-description, a następnie napisz funkcję,
    w której:
    1 - Ukryj domyślnie wszystkie elementy dd.
    2 - Po kliknięciu w element dt spraw, by elementy dd:
        1 - rozwijały się, jeśli są ukryte,
        2 - zwijały się, jeśli są widoczne.
    */
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

    /* zadanie 4
    W pliku index.html znajdź formularz o klasie login. W pliku app.js stwórz funkcję, 
    która będzie reagować na wciśnięcie przycisku show-hide-btn. Na początek ustaw event 
    tak, aby po wciśnięciu wypisał w konsoli "działam". Następnie funkcja ma sprawdzać, 
    jakiego typu jest element przechowujący hasło. Jeśli password – zmień type na text. 
    Jeśli text – zmień na password.
    */
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

    /* zadanie 5
    Po najechaniu kursorem myszy na element w menu wypisz w konsoli tekst "Hura".
    */
    var menu = $('.menu');
        menu
            .find('a')
        ;
    menu.on('mouseenter', function(event) {
        console.log('hurra');
    });

    /* zadanie 6
    Znajdź w pliku index.html formularz o klasie login, a następnie napisz funkcję, 
    w której:
    1 - ustaw lekki cień wewnętrzny po kliknięciu wewnątrz inputa,
    2 - zmień background-color na szary po wyjściu kursorem z pola input.
    */
   
    var formularz = $('form.Login');
    var inputy = formularz.find('input');
        inputy.on('click', function(event){
           $(this).css('box-shadow', '-10px -10px 5px grey');
        });
           inputy.on('mouseleave', function(event){
           $(this).css('background-color', 'grey');
        });
    });
