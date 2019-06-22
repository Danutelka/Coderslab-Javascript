<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; zadania
# Zmienne, operatory, wyrażenia warunkowe i pętle

Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać zadania komentarzami i pisać czytelny, dobrze sformatowany kod.


## Część A &ndash; zadania rozwiązywane z wykładowcą

### Zadanie A1
Zajrzyj do pliku **zadanieA1.js**. Znajdziesz tam kod funkcji, która losuje liczbę z przedziału 0&ndash;99. Dopisz kod, który wyświetli następujące informacje w konsoli:
 1. Czy liczba jest parzysta czy nieparzysta.
 2. Wszystkie dzielniki liczby, np. dla 10 wyświetli 10, 5, 2, 1 (liczby mają wyświetlić się w jednej linii).
 3. Wyświetli wynik potęgowania liczby, wykładnikiem potęgi ma być reszta z dzielenia tej liczby przez 5.

```
**Przykład dla polecenia 3.**:
Wylosowana liczba: 8
8 % 5 = 3
Dzielniki: 8, 4, 2, 1
8^3 = 512
```

### Zadanie A2
W pliku **zadanieA2.js** &ndash; jest przykładowa funkcja obliczająca proste równania. Niestety nie działa ona dobrze. Znajdź błąd i go napraw, tak żeby funkcja działała. Dopisz dodatkowe testy, żeby sprawdzić, czy wszystkie przypadki działają. Zadanie rozwiąż w tym samym pliku.

## Część B &ndash; zadania rozwiązywane samodzielnie

### Zadanie B1
Stwórz tyle zmiennych, ile różnych znasz typów. Każdą odpowiednio nazwij i wstaw do nich odpowiednie dane. Następnie dodaj do siebie różne zmienne i zobacz, jakiego typu jest wynik. Napisz w komentarzu przy każdej zmiennej jej typ.
Wypisz każdą zmienną w konsoli.
Zwróć uwagę, jak zmieniają się typy danych w zależności od tego, jakie typy ze sobą dodajemy. Jest to tzw. niejawna konwersja danych (silnik JavaScript bez naszego udziału zmienia typ danych).

### Zadanie B2
Zajrzyj do pliku **zadanieB2.js**. Jest tam napisany szkielet funkcji przyjmującej trzy liczby. Dopisz ciało funkcji tak, żeby zwracać ```true``` (wartość booleanowską), jeżeli z podanych liczb można stworzyć trójkąt , a ```false``` jeżeli nie.
Tę figurę geometryczną można zbudować z trzech linii tylko wtedy, gdy suma długości dwóch z nich jest większa niż długość trzeciej linii, czyli:

```JavaScript
a + b > c
c + b > a
a + c > b
```

Użyj ```if```, ```else``` oraz ```else if```.
Następnie zmień rozwiązanie tak, aby zawrzeć wszystkie te punkty w jednym zapytaniu ```if``` (użyj operatorów logicznych).
Pamiętaj żeby użyć słowa kluczowego ```return``` do zwracania danych z funkcji. Zadanie rozwiąż w tym samym pliku.

### Zadanie B3
Zajrzyj do pliku **zadanieB3.js**. Znajdziesz tam kod. Przeanalizuj go i opisz w komentarzu zauważone błędy.
Postaraj się nie uruchamiać kodu zanim nie znajdziesz błędów.
