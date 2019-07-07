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
