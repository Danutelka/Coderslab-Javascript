<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
BARDZO WAŻNE - Wasze zadania są sprawdzanie przy pomocy automatycznego systemu. Żeby odpowiedzi zostały uznane za poprawne strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcjie i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane
w zadaniu.

## Dzień 4 - DOM
> Zadanie 1 wykonaj w pliku pizza.js

#### Zadanie 1

Plik HTML do tego zadania to plik **pizza.html**, a plik js to **pizza.js**.

Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki.
Cena każdego z dodatków jest trzymana w atrybucie ```data-price```.
Napisz takie eventy, żeby po zaznaczeniu checkoxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza
wewnątrz elementu ```page-info``` wyświetliła się następująca informacja: **"Do zapłaty: [odpowiednia kwota]"**, gdzie [odpowiednia kwota] to wartość zamówienia. Pamiętaj o tym, że kliknięcie w przycisk wywołuje domyślną akcję przeładowania strony. Zablokuj tą akcję, aby móc zobaczyć wpisaną informację do elmentu ```page-info```.

Zwróć uwagę na dwa specjalne checkboksy:
* Wyczyść &ndash; powinien odznaczyć wszystkie inne opcje,
* Wszystkie dodatki &ndash; powinien zaznaczyć wszystkie inne opcje (poza none).

-------------------------------------------------------------------------------
