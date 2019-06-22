<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; zadania
# Więcej o elemencie

Zadania z wpływania na element DOM.

Strona **index.html** jest podzielona na części do każdego zadania.
**Elementy wyszukuj tylko w divie dla danego zadania.**
Zadania powinny być rozwiązane w pliku **app.js**.
Pamiętaj, żeby oddzielać zadania komentarzami i pisać czytelny, dobrze sformatowany kod.

**NIE MODYFIKUJ KODU HTML**

### Zadanie 1 &ndash; rozwiązywane z wykładowcą
Zmodyfikuj listę w następujący sposób:
1. Dodaj atrybut ```data-direction``` nastawiony na wartość ```up``` każdemu elementowi **li**, który nie ma tego atrybutu.
2. Nastaw kolor tła co drugiego elementu listy na zielony.
3. Nastaw piątemu elementowi listy **klasę** ```big```.
4. Nastaw co trzeciemu elementowi podkreślenie.

### Zadanie 2 &ndash; rozwiązywane z wykładowcą
W zadaniu (plik **index.html**) znajduje się prosty formularz z polem wyboru ```select```. Ustaw każdemu elementowi ```option``` wartość opisu z atrybutu ```value```. Dodaj każdemu elementowi atrybut ```data-year```, użyj ```dataset```, ale wynikowa wartość ma być o 20 większa niż w atrybucie ```value```, czyli np. 2020 -> 2040.

### Zadanie 3
Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
Napisz kod JavaScript, który wprowadzi następujące zmiany:
1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```).
2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut ```href```.
3. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).

Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript. Zastanów się, dlaczego dopisywany jest w tym miejscu.
Napisz odpowiedź na to pytanie w komentarzu do zadania.

### Zadanie 4
Na stronie jest lista, w której wpisz swoje imię i nazwisko, ulubiony kolor i potrawę.
1. Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych.
2. Za pomocą ```innerHTML``` wypełnij w nich odpowiednie informacje.


### Zadanie 5
Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
1. Wyszukaj element ```ul``` i dodaj mu klasę ```menu```.
2. Wyszukaj wszystkie elementy ```li``` i dodaj im klasę ```menuElement``` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy ```selected```.
3. Zauważ, że jeden z elementów ma czerwony kolor tekstu. Jest to spowodowane tym, że ma **klasę** ```error```. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę **klasę** wszystkim elementom, które ją mają).

### Zadanie 6
Dodaj do każdego elementu listy atrybut ```data-id``` przyjmujący kolejne liczby całkowite (zaczynając od 1). Rozwiąż to zadanie na dwa sposoby:
  1. Używając datasetu.
  2. Używając matody ```setAttribute```.
