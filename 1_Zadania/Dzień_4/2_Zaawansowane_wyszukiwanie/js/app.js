
$(document).ready(function() {
    /* zadanie 1
    Znajdź w pliku index.html element o klasie shopping, a następnie wykonaj poniższe
    czynności:
    1 - Po kliknięciu w przycisk Dodaj ustaw mu klasę added, oraz pojedynczemu elementowi
     div zawierającemu produkt zmieni obramowanie na zielone.
    2 - Po ponownym kliknięciu zresetuj ustawienia elementu .cart-item.
    */
    var shopping = $('section.shopping');
    var btn = shopping.find('button');
    btn.on('click', function(event){
        if(!$(this).hasClass('added')){
        $(this).addClass('added');
        $(this).parent().parent().css('border-color', 'green');
        } else {
            $(this).removeClass('added');
            $(this).parent().parent().css('border-color', '');
        }
    })
    
    /* zadanie 2
    Znajdź w pliku index.html element o klasie films, zmień kod następująco:
    1 - Po kliknięciu w przycisk rozwiń, rozwinie się opis filmu.
    2 - Po kliknięciu w przycisk zamknij, zwinie się opis filmu (tylko ten, 
        który chcemy zwinąć, nie wszystkie).
    3 - Po kliknięciu w zamknij, zwiną się wszystkie opisy.
    */
    var films = $('section.films');
    var btnExpand = films.find('a.expand');
    btnExpand.on('click', function(event){
        event.preventDefault();
        $(this).parent().siblings().show();
    })
    var btnHide = films.find('a.close');
    btnHide.on('click', function(event){
        event.preventDefault();
        $(this).parent().hide();
    })
});
