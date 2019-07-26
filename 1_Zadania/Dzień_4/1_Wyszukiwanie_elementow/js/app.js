
/* zadanie 1
Dołącz do swojego pliku bibliotekę jQuery. 
W pliku app.js umieść kod sprawdzający, czy DOM został załadowany.

$(function() {
    alert ('wszystsko działa');

});
 
albo

$(document).ready(function() {
    alert ('wszystko działa');
});

/ zadanie 2
Zapoznaj się z plikiem index.html oraz plikiem style.css. 
Dodaj klasę borderClass do każdego elementu li w elemencie section class="main". 
Pamiętaj, aby wykonać to w odpowiedniej funkcji. Znajdź wszystkie elementy o klasie
showMore. Pierwszemu z tych elementów zmień kolor fontu css() na niebieski.

$(document).ready(function() {
    var li = $('section.main').find('li');
    li.attr('class', 'borderClass');
    li.addClass('borderClass');

    $('.showMore').eq(0).css('color', 'red');
    
});
*/

$(document).ready(function() {
    /* zadanie 3
    Ustaw każdemu elementowi li (tylko te w sekcji o klasie main) dodatkowe dwie klasy:
    1 - colorText,
    2 - backgroundElement. 
    Znajdziesz je w pliku style.css pod odpowiednim komentarzem. 
    Łącznie z poprzednią klasą borderClass będą to trzy klasy ustawione
    dla każdego li. Ustaw także dla tych elementów następujące funkcje:
    1 - fadeOut z bardzo wolnym zanikaniem,
    2 - fadeIn z bardzo wolnym pojawianiem.
    Pamiętaj, aby zrobić to w odpowiedniej funkcji.
    Czy widzisz nadmiarowość w swoim kodzie?
    */
    var li = $('section.main').find('li');
    li.addClass('colorText backgroundElement borderClass')
        .fadeOut('slow')
        .fadeIn('slow');

    /* zadanie 4
    Za pomocą jQuery wykonaj następujące operacje:
    1 - Wyszukaj wszystkie linki i ustaw im czerwony kolor za pomocą funkcji css().
    2 - Zmodyfikuj kod tak, aby kolor czerwony miały linki tylko z menu.
    3 - Dodaj klasę redLinks w pliku style.css (ustaw w niej kolor tekstu na czerwony) 
    i za pomocą addClass nadaj ją elementom li w menu (zmodyfikuj kod z podpunktów 1. i 2.).
    4 - Spraw, aby pierwszy element menu miał większy font niż inne. Stwórz odpowiednią 
    klasę w pliku style.css. Pamiętaj, aby wykonać to w odpowiedniej funkcji.
    */
    var link = $('.menu').find('a').css('color', 'red');
    link.addClass('redlinks');
    var link1 = link.eq(0);
    link1.css('font-size', 'large');
    
    /* zadanie 5
    Sprawdź, czy h1 ma klasę creepyHeader.
    1 - Jeśli nie ma – dodaj ją do tego elementu.
    2 - Jeśli ma – wypisz w konsoli, że nagłówek ma już taką klasę.
    */
    var h1 = $('body').find('h1');
    if ($('h1').hasClass('creepyHeader')) {
        console.log('Ma juz taka classe');
    } else {
        h1.addClass('creepyHeader')
    }
});




