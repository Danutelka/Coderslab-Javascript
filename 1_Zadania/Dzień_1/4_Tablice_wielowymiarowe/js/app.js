/* zadanie A1
Napisz funkcję checkArray przyjmującą jako argument tablicę dwuwymiarową z liczbami 
całkowitymi. Funkcja ma zwrócić nową tablicę, w której kolejnymi elementami będą 
wartości boolean true lub false, zależne od tego, czy każdy element tablicy drugiego 
wymiaru jest parzysty.

var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];

    output:
    var arrayCheck = [
    false, // bo 11
    true,
    true,
    true,
    false, // bo 1
    ];

var arr = [];
arr[0]=[3, 4, 56, 773, 1];
arr[1]=[7, 12, 0, 98, 34, 381];
arr[2]=[12, 66, 96, 54, 10];

    output 
    arrayCheck[0] ma mieć wartość false
    arrayCheck[1] ma mieć wartość false
    arrayCheck[2] ma mieć wartość true
 */

function checkArray(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
       var array2 = array[i];
       var everyIsParzysta = true; //zakladam wszystkie sa parzyste
       for (var j = 0; j < array2.length; j++) {
           if (array2[j] % 2 == 1) { //jezeli jakas nie jest
               everyIsParzysta = false;//zmieniam even na false
               break;
           }
       }
      result.push(everyIsParzysta); 
    }
    return result;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

console.log(checkArray(arr));

var arr2 = [
    [3, 4, 56, 773, 1],
    [7, 12, 0, 98, 34, 381],
    [12, 66, 96, 54, 10],
    ];

console.log(checkArray(arr2));


/*  zadanie B1 
Napisz funkcję print2DArray, która jako argument przyjmuje tablicę dwuwymiarową.
Następnie funkcja ta ma wypisać w konsoli zawartość tej tablicy.

    zadanie B2
Stwórz ręcznie dwuwymiarową tablicę i przetestuj ją na rozwiązaniu zadania B1.
*/

function fun2(array) {
    var result = [];
    for (var i=0; i <array.length;i++) {
        var array2 = array[i];
        result.push(array2)
    }
    return result
}

var arr = [];
arr[0]=[3, 4, 56, 773, 1];
arr[1]=[7, 12, 0, 98, 34, 381];
arr[2]=[12, 66, 96, 54, 10];

console.log(fun2(arr));

/* zadanie B3
Napisz funkcję create2DArray przyjmującą dwie liczby całkowite (rows i columns). 
Zadaniem funkcji jest zwrócenie tablicy dwuwymiarowej o podanej liczbie rzędów i kolumn. 
Każda komórka ma być wypełniona kolejną liczbą całkowitą. Nastepnie użyj rozwiązania z zadania B1 do wypisania tej tablicy w konsoli.
Hint: Użyj petli zagnieżdżonych.
*/

function print2DArray(tablica2w) {
    for (var i = 0; i < tablica2w.length; i++) {
        for (var j = 0; j < tablica2w[i].length; j++) {
            console.log(tablica2w[i][j])
        }
    }

}

// print2DArray([
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ])

function createArray2D(row, column) {
    var tablica2D = []
    var liczba = 1
    for (var i = 0; i <= row; i++) {
        tablica2D.push([])
    }

    for (var i = 0; i <= row; i++) {
        for (var j = 0; j <= column; j++) {
            tablica2D[i].push(liczba);
            liczba++;
        }

    }

    print2DArray(tablica2D)
    console.log(tablica2D)
}

createArray2D(2, 2)