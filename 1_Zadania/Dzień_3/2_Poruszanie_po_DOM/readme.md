<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; zadania
# Poruszanie się po DOM

Każde zadanie ma swój plik **HTML** i powinno być rozwiązane w osobnym pliku JavaScript (puste pliki są już przygotowane w odpowiednim folderze).
Pamiętaj, żeby pisać czytelny, dobrze sformatowany kod.


### Zadanie 1
W pliku znajdują się trzy listy (każda osadzona w elemencie **div**). Po najechaniu myszką na element **div** zmienić się mają kolory tła elementów jego listy. Odpowiednio:
 1. Pierwszy element w liście ma mieć kolor czerwony.
 2. Ostatni element w liście ma mieć kolor niebieski.
 3. Wszystkie inne elementy mają mieć kolor zielony.
 4. Po najechaniu myszką na element **div** dodaj mu klasę ```hovered```, ale tylko jemu.

Rozwiązanie musi spełniać następujące założenia:
 1. Na wszystkie **divy** musi być założony ten sam event.
 2. Elementy listy mają być wyszukane w zależności od ```this```.

### Zadanie 2
W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). Po kliknięciu w którykolwiek z nich &ndash; element, który znajduje się bezpośrednio po nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Następny element ma być wyszukiwany zależnie od położenia ```this```.
3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się ```null```).


### Zadanie 3
W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). Po kliknięciu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Rodzic ma być wyszukiwany zależnie od położenia ```this```.
3. Kolor tła musi być losowy.

Hint:
Żeby uzyskać losowy kolor, użyj poniższego kodu:
```JavaScript
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

### Zadanie 4
Znajdź i zapisz do zmiennych następujące elementy:
1. Element o **klasie** ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
2. Element o **id** ```second``` -> jego rodzic -> jego czwarte dziecko.
3. Element o **atrybucie** ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w górę).
4. **Div** o **klasie** ```forth``` -> jego rodzic -> jego pierwsze dziecko o tagu ```article``` -> jego drugie dziecko o tagu ```<p>```.

Wszystkie te elementy mają atrybut ```data-answer``` nastawiony na numer zadania, dla którego są odpowiedzią.
Sprawdź przez wyświetlenie w konsoli wartość tego atrybutu. Dzięki temu będziesz wiedział, czy dane polecenie wykonałeś prawidłowo.
