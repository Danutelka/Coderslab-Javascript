<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# jQuery &ndash; zadania
# Wyszukiwanie elementów

Zadania rozwiąż w pliku **app.js**.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod.

**Twój kod musi się znaleźć w miejscu, gdzie będziesz mieć pewność, że drzewo DOM jest już załadowane**.

### Zadanie 1 &ndash; do rozwiązania z wykładowcą
Dołącz do swojego pliku bibliotekę jQuery. W pliku **app.js** umieść kod sprawdzający, czy DOM został załadowany.

### Zadanie 2 &ndash; do rozwiązania z wykładowcą
Zapoznaj się z plikiem **index.html** oraz plikiem **style.css**. Dodaj klasę ```borderClass``` do każdego elementu ```li``` w elemencie ```section class="main"```. Pamiętaj, aby wykonać to w odpowiedniej funkcji.
Znajdź wszystkie elementy o **klasie** ```showMore```. Pierwszemu z tych elementów zmień kolor fontu ```css()``` na niebieski.


### Zadanie 3
Ustaw każdemu elementowi **li** (tylko te w **sekcji** o **klasie** ```main```) dodatkowe dwie **klasy**:
* ```colorText```,
* ```backgroundElement```.
Znajdziesz je w pliku **style.css** pod odpowiednim komentarzem.
Łącznie z poprzednią **klasą** ```borderClass```będą to trzy **klasy** ustawione dla każdego **li**. Ustaw także dla tych elementów następujące funkcje:
* ```fadeOut``` z bardzo wolnym zanikaniem,
* ```fadeIn``` z bardzo wolnym pojawianiem.

Pamiętaj, aby zrobić to w odpowiedniej funkcji.

Czy widzisz nadmiarowość w swoim kodzie?

### Zadanie 4
Za pomocą jQuery wykonaj następujące operacje:

 1. Wyszukaj wszystkie linki i ustaw im czerwony kolor za pomocą funkcji ```css()```.
 2. Zmodyfikuj kod tak, aby kolor czerwony miały linki tylko z menu.
 3. Dodaj **klasę** ```redLinks``` w pliku **style.css** (ustaw w niej kolor tekstu na czerwony) i za pomocą ```addClass``` nadaj ją elementom **li** w menu (zmodyfikuj kod z podpunktów 1. i 2.).
 4. Spraw, aby pierwszy element menu miał większy font niż inne. Stwórz odpowiednią **klasę** w pliku **style.css**.
 Pamiętaj, aby wykonać to w odpowiedniej funkcji.

### Zadanie 5
Sprawdź, czy **h1** ma **klasę** ```creepyHeader```.
1. Jeśli nie ma &ndash; dodaj ją do tego elementu.
2. Jeśli ma &ndash; wypisz w konsoli, że **nagłówek** ma już taką **klasę**.
