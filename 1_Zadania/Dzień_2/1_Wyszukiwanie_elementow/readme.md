<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; zadania
# Wyszukiwanie elementów na stronie HTML

Zadania powinny być rozwiązane w pliku **app.js**.
Pamiętaj, żeby oddzielać zadania komentarzami i pisać czytelny, dobrze sformatowany kod.
**Nie modyfikuj kodu HTML, chyba że w poleceniu jest napisane inaczej**.

### Zadanie 1 &ndash; rozwiązywane z wykładowcą
1. Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej **tag** ```article``` o **klasie** ```first```.
2. W kolejnym etapie:
  * wypisz w konsoli, ile elementów **h1** znajduje się w tym **tagu**.
  * wyszukaj w nim wszystkie elementy o **klasie** ```oferts```, przeiteruj je i wypisz je w konsoli,
  * wyszukaj w nim wszystkie elementy **div**, przeiteruj je i wypisz je w konsoli.

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Używaj funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile jest znalezionych przez Ciebie elementów.

### Zadanie 2 &ndash; rozwiązywane z wykładowcą
Wyszukaj na stronie i zapisz do zmiennej element o **id** `exercise2`, który znajduje się w menu. Skorzystaj z selektora CSS.
Nie odwołuj się bezpośredniego do **klasy** lub **id** jakiegokolwiek elementu.
Użyj selektorów potomków, dzieci, n-tych dzieci itp.


### Zadanie 3
Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
1. Element o **id** ```home``` (na dwa sposoby).
2. Pierwszy element **li** nieposiadający atrybutu ```data-direction```.
3. Pierwszy element o **klasie** ```block```.

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. Używaj funkcji wyszukujących tylko jeden element.

### Zadanie 4
Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
1. Wszystkie elementy **li** znajdujące się w **tagu** ```nav```.
2. Wszystkie **paragrafy** należące do wszystkich elementów **div**.
3. Wszystkie **divy** znajdujące się w **tagu** ```article```.

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Pamiętaj, żeby używać funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile znalazłeś elementów.

## Zadanie dodatkowe
Znajdź wszystkie elementy **li**, które są w tagu ```nav```. Następnie nadaj każdemu elementowi **li** atrybut ```data-direction = "top"```, ale tylko dla tych elementów, które nie mają ustawionego tego atrybutu.
