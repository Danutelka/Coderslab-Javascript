/*
Zajrzyj do pliku zadanieA1.js. Znajdziesz tam kod funkcji, która losuje liczbę z 
przedziału 0–99. Dopisz kod, który wyświetli następujące informacje w konsoli:
    Czy liczba jest parzysta czy nieparzysta.
    Wszystkie dzielniki liczby, np. dla 10 wyświetli 10, 5, 2, 1 
    (liczby mają wyświetlić się w jednej linii).
    Wyświetli wynik potęgowania liczby, wykładnikiem potęgi ma być 
    reszta z dzielenia tej liczby przez 5.
*/


function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    console.log('Wylosowana liczba to:', randomNumber)
    //poniżej napisz rozwiązanie zadania
    if (randomNumber % 2 === 0) {
        console.log('Liczba jest parzysta');
    } else {
        console.log('Liczba jest nieparzysta');
    }
    // petla for zaczyna od wylosowanej liczny i schodzi w dól do 0
    var arr = []; // new_Array () zamiast []; tablica -js, list - python
    for (var i =randomNumber; i>0; i--) {
        if (randomNumber % i === 0) {
            arr.push(i);
        }
    }
    console.log('Dzielniki wylosowanej liczby:', arr.join(','));

    var wykladnik = randomNumber % 5;

    console.log('potęga o wykładniku', wykladnik, 'wynosi', randomNumber ** wykladnik)
}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
