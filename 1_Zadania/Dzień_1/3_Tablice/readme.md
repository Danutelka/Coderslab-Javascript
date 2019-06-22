<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; zadania
# Tablice

Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać zadania komentarzami i pisać czytelny, dobrze sformatowany kod.

## Część A &ndash; zadania do rozwiązania z wykładowcą

### Zadanie A1
Zajrzyj do pliku **zadanieA1.js** &ndash; jest tam napisany szkielet funkcji przyjmującej tablicę. Dopisz ciało funkcji w taki sposób, żeby zwracać ```true``` (wartość booleanowską), kiedy tablica ma liczby rosnące (każda następna jest większa od poprzedniej), a ```false``` &ndash; jeżeli nie.
Pamiętaj, żeby użyć słowa kluczowego ```return``` do zwracania danych z funkcji.

### Zadanie A2
Napisz dwie funkcje ```add(array)``` i ```multiply(array)```. Obie mają przyjmować tylko jeden argument &ndash; tablicę. Następnie funkcja ```add``` ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli **for**), a funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli **for**).

### Zadanie A3
Napisz funkcję ```distFromAverage```, która ma przyjmować jako argument tablicę z liczbami. Zwracana przez funkcję tablica ma przedstawiać w kazdej komórce różnicę między liczbą z danej komórki a średnią wartością tablicy. Dla uproszczenia możesz użyć funkcji z poprzedniego zadania.
Np.
```
distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```

## Część B &ndash; zadania do rozwiązania samodzielnego

### Zadanie B1
Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
1. Wypisz pierwszy owoc w konsoli.
2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).

### Zadanie B2
Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr &ndash; tablicę. Następnie przy pomocy pętli **for** przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.

### Zadanie B3
Napisz funkcję ```factors```, która ma przyjmować tylko jeden argument &ndash; liczbę, która musi być większa od **0**. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.
```
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```

### Zadanie B4
Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę (przez co tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.
```
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
```


## Zadanie B5 &ndash; dodatkowe
Stwórz tablicę zawierającą w w każdej komórce rok urodzenia. Następnie napisz funkcję, która przyjmie tę tablicę jako argument i wyświetli:
* rok urodzenia najstarszej osoby i jej wiek,
* rok urodzenia najmłodszej osoby i jej wiek.
Użyj pętli do iteracji tablicy, ale postaraj się pobierać elementy metodą ```pop``` lub ```shift```.
