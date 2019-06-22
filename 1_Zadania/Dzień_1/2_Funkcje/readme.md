<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; zadania
## Funkcje

Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać zadania komentarzami i pisać czytelny, dobrze sformatowany kod.


## Część A &ndash; zadania do rozwiązania z wykładowcą

### Zadanie A1
Stwórz funkcję, która zwraca (przez ```return```) sumę trzech liczb. Liczby powinny być przekazane do funkcji jako argumenty.

Przykład:
```
input -> 1, 2, 3
output -> 6
```

### Zadanie A2
Napisz funkcję liczącą pole i obwód okręgu. Funkcja przyjmuje promień tej figury geometrycznej jako argument.
Jeśli przekazany argument jest nieodpowiedniego typu, to funkcja ma zwrócić `false`.

## Część B &ndash; zadania do rozwiązania samodzielnego

### Zadanie B1
Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie dziesięć razy: "Gdy piszę kod zawsze i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".

### Zadanie B2
Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty:
* kwotę do zapłaty,
* opis słowny obsługi.
Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany &ndash; funkcja powinna zwracać napis "Opis nieczytelny".

Opis może przyjmować następujące wartości:
"Bardzo dobra obsluga" => 25% napiwku,
"Dobra obsluga" => 20% napiwku,
"Srednia obsluga" =>15% napiwku,
"Zla obsluga" => 0% napiwku.

Przykład:
```
input -> 100, "Bardzo dobra obsluga"
output -> 25
```
