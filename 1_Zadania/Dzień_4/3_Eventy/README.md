<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# jQuery &ndash; zadania
# Eventy


Zadania rozwiąż w pliku **app.js**.
Pamiętaj, żeby oddzielać zadania komentarzami i pisać czytelny, dobrze sformatowany kod.

### Zadanie 1 &ndash; do rozwiązania z wykładowcą
Znajdź w pliku **index.html** trzy **buttony** w elemencie o **klasie** ```hero-buttons```. Stwórz funkcję, w której wykonaj następujące czynności:
* ustaw każdy z trzech przycisków pod inną zmienną,
* dla elementu pierwszego ustaw event ```click```, który po kliknięciu wyświetli w konsoli napis "kliknięto mnie",
* dla elementu drugiego ustaw event ```click```, który po kliknięciu wyświetli w konsoli napis "kliknięto mnie, ale już drugi raz nie dam się kliknąć",
* dla trzeciego wywołaj metodę `off`, która odczepi wszystkie eventy z wszystkich przycisków.

Przetestuj działanie Twojej funkcji.

### Zadanie 2
W pliku **counter.html** znajduje się pusty formularz, umieść w nim pole **textarea**.
Poniżej pola ma znaleźć się licznik wpisanych aktualnie znaków w to pole np. ```63/100```. Licznik ma zwiększać i zmniejszać swoją wartość po każdym wpisanym/usuniętym znaku.
Zablokuj możliwość wpisania więcej niż 100 znaków w to pole.

Napis z liczbą wpisanych znaków ma zmieniać kolor:

|kolor fontu|liczba wpisanych znaków|
|:--:|:--:|
|zielony|0&ndash;33|
|zółty|34&ndash;66|
|czerwony|67&ndash;100|

Zadanie rozwiąż w pliku **counter.js** i pamietaj o podpięciu jQuery.

### Zadanie 3
Znajdź w pliku html **sekcję** o **klasie** ```superhero-description```, a następnie napisz funkcję, w której:
1. Ukryj domyślnie wszystkie elementy **dd**.
2. Po kliknięciu w element **dt** spraw, by elementy **dd**:
 * rozwijały się, jeśli są ukryte,
 * zwijały się, jeśli są widoczne.

### Zadanie 4
W pliku **index.html** znajdź formularz o **klasie** ```login```. W pliku **app.js** stwórz funkcję, która będzie reagować na wciśnięcie przycisku ```show-hide-btn```.
Na początek ustaw event tak, aby po wciśnięciu wypisał w konsoli "działam". Następnie funkcja ma sprawdzać, jakiego typu jest element przechowujący hasło. Jeśli ```password``` &ndash; zmień **type** na ```text```. Jeśli ```text``` &ndash; zmień na ```password```.

### Zadanie 5
Po najechaniu kursorem myszy na element w **menu** wypisz w konsoli tekst "Hura".

### Zadanie 6
Znajdź w pliku **index.html** formularz o **klasie** ```login```, a następnie napisz funkcję, w której:
* ustaw lekki cień wewnętrzny po kliknięciu wewnątrz inputa,
* zmień ```background-color``` na szary po wyjściu kursorem z pola **input**.
