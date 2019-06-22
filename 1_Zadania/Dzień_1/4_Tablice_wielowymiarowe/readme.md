<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; zadania
# Tablice wielowymiarowe

Zadania powinny być rozwiązane w pliku **app.js**.
Oddzielaj zadania komentarzami. Pisz czytelny i dobrze sformatowany kod.

## Część A &ndash; zadanie do rozwiązania z wykładowcą

### Zadanie A1
Napisz funkcję ```checkArray``` przyjmującą jako argument tablicę dwuwymiarową z liczbami całkowitymi.
Funkcja ma zwrócić nową tablicę, w której kolejnymi elementami będą wartości boolean ```true``` lub ```false```, zależne od tego, czy każdy element tablicy drugiego wymiaru jest parzysty.
```JavaScript
var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];

output

var arrayCheck = [
false, // bo 11
true,
true,
true,
false, // bo 1
];
---------------
-> input
var arr = [];
arr[0]=[3, 4, 56, 773, 1];
arr[1]=[7, 12, 0, 98, 34, 381];
arr[2]=[12, 66, 96, 54, 10];

output ->
arrayCheck[0] ma mieć wartość false
arrayCheck[1] ma mieć wartość false
arrayCheck[2] ma mieć wartość true
```
## Część B &ndash; zadania do rozwiązania samodzielnego

### Zadanie B1
Napisz funkcję ```print2DArray```, która jako argument przyjmuje tablicę dwuwymiarową. Następnie funkcja ta ma wypisać w konsoli zawartość tej tablicy.

### Zadanie B2
Stwórz ręcznie dwuwymiarową tablicę i przetestuj ją na rozwiązaniu zadania B1.

### Zadanie B3
Napisz funkcję ```create2DArray``` przyjmującą dwie liczby całkowite (```rows``` i ```columns```). Zadaniem funkcji jest zwrócenie tablicy dwuwymiarowej o podanej liczbie rzędów i kolumn. Każda komórka ma być wypełniona kolejną liczbą całkowitą. Nastepnie użyj rozwiązania z zadania B1 do wypisania tej tablicy w konsoli.  
Hint: Użyj petli zagnieżdżonych.
