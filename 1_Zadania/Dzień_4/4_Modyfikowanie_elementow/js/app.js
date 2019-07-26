$(document).ready(function() {
    // zad 1
    /* zadanie 1 
    Znajdź w pliku index.html element o klasie people. Stwórz odpowiednią funkcję, 
    wewnątrz której ustaw event click na przycisku dodaj. 
    Po kliknięciu wykonaj następujące czynności:
    1 - Pobierz do zmiennej wartość wpisaną do pola o id addUser.
    2 - Pobierz do zmiennej wartość wpisaną do pola o id age.
    3 - Wstaw nowy element na koniec listy, ustaw jej wiek jako atrybut data.
    4 - Po każdym wstawieniu elementu wywołaj osobną funkcję, która będzie ustawiała dany 
        kolor dla elementu li w następujący sposób:
            1 - zielony dla osób w wieku do 15 lat,
            2 - niebieski dla osób mających od 16 do 40 lat,
            3 - brązowy dla osób mających 41 lat i więcej
    */
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
    /* zadanie 2 
    Znajdź w pliku index.html element o klasie where-i-am, następnie stwórz odpowiednią 
    funkcję, wewnątrz której stwórz elementy span i dodaj je w odpowiednie miejsca według 
    obrazka poniżej. W miejsce trzech kropek wstaw nazwę funkcji, której używasz, np. 
    Jestem tutaj append. Nie zmieniaj kodu HTML.
    */
    var whereIam = $('.where-i-am div');
    var dodajSpana = function() {
        $('<span>1</span>').insertBefore(whereIam);
        $('<span>2</span>').insertAfter(whereIam);
        $('<span>3</span>').appendTo(whereIam);
        $('<span>4</span>').prependTo(whereIam);
    };
	dodajSpana();	
})