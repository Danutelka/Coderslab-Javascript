/* zadanie A2
Napisz dwie funkcje add(array) i multiply(array). Obie mają przyjmować tylko jeden 
argument – tablicę. Następnie funkcja add ma zsumować wszystkie liczby znajdujące 
się w tej tablicy (przy pomocy pętli for), a funkcja multiply ma pomnożyć wszystkie 
liczby znajdujące się w tablicy (przy pomocy pętli for).
 */

var arr = [1,2,3,4,5];

function add(array) {
    var result = 0;
    for (var i = 0; i<array.length; i++) {
        result += array[i];
    }
    return result;
}

function multiply(array) {
    var result = 1;
    for (var i = 0; i<array.length; i++){
        result *= array[i];
    }
    return result;
}

console.log(add(arr));
console.log(multiply(arr) == 120);

/* zadanie A3
Napisz funkcję distFromAverage, która ma przyjmować jako argument tablicę z liczbami. 
Zwracana przez funkcję tablica ma przedstawiać w kazdej komórce różnicę między liczbą 
z danej komórki a średnią wartością tablicy. Dla uproszczenia możesz użyć funkcji 
z poprzedniego zadania. Np.

distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
*/

function distFromAverage(array) {
    var average = add(array) / array.length;
    var result = [];
    for(var i = 0; i < array.length; i++) {
        var x = Math.abs(array[i] - average);
        result.push(x);
    }
    return result;
}

console.log( distFromAverage([1,2,3,4,5,6,7]) );
// => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)

console.log( distFromAverage([1,1,1,1]) );
// => [0,0,0,0] (średnia z tablicy wejściowej to 1)

console.log(distFromAverage([2,8,3,7]) );
// => [3,3,2,2] (średnia z tablicy wejściowej to 5)

/* zadanie B1
Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
1 - Wypisz pierwszy owoc w konsoli.
2 - Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
3 - W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).
*/

var arr2 =["maliny", "banan", "truskawki", "czeresnie", "jagody"];

console.log(arr2[0]);
console.log(arr2[arr2.length-1]);

function ulubione(arr2) {
    var result = [];
    for (var i =0; i < arr2.length; i++){
        result += arr2[i];
    }
    return result;
}
console.log(arr2);

/* zadanie B2
Napisz funkcję printTable(array), która przyjmuje tylko jeden parametr – tablicę. 
Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz 
każdy z nich w konsoli.
*/

function printTable(array) {
    var result =[];
    for (var i=0; i<array.length; i++){
        result += array[i];
    }
    return result;
}
console.log(["Do", "Re", "Mi"]);

/* zadanie B3
Napisz funkcję factors, która ma przyjmować tylko jeden argument – liczbę, 
która musi być większa od 0. Funkcja ta ma zwracać tablicę zawierającą wszystkie 
dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza 
lub równa 0, to funkcja ma zwracać pustą tablicę.
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
*/

function factors(number) {
    if (number > 0) {
        console.log('Liczba OK!');
    } else {
        console.log('Liczba powinna być większa niż zero!');
    }
    var wyniki = [];
    for (var i = number; i>0; i--) {
        if (number % i === 0) {
            wyniki.push(i);
        }
    }
    console.log(wyniki);
}
console.log(factors(2));
console.log(factors(0));

/* zadanie B4
Napisz funkcję getMissingElement, która ma przyjmować tylko jeden argument – tablicę 
zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę 
(przez co tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących 
liczb, to funkcja ma zwracać null.

getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
*/

function getMissingElement(array) {
    var missing = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i]+1 != array[i+1]) {
            missing = array[i] + 1;
            console.log('Brakująca liczba to:', missing);
        }
    }
    if (missing === 0) {
        console.log(null);
    }
    
}

console.log(getMissingElement([1,2,3,4,5,6,7])); // => null
console.log(getMissingElement([6,7,8,10,11,12,13,14,15])); // => 9
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4])); // => -1

/* zadanie B5
Stwórz tablicę zawierającą w w każdej komórce rok urodzenia. 
Następnie napisz funkcję, która przyjmie tę tablicę jako argument i wyświetli:
1 - rok urodzenia najstarszej osoby i jej wiek,
2 - rok urodzenia najmłodszej osoby i jej wiek. Użyj pętli do iteracji tablicy, 
ale postaraj się pobierać elementy metodą pop lub shift.
*/

function urodziny(array) {
    var now = new Date();
    now = now.getFullYear();
    var sorted = array.sort();
    var oldest = sorted[0];
    var youngest = sorted[sorted.length -1];
    var wiekYoungest = now - youngest;
    var wiekOldest = now - oldest;

    console.log('Najstarsza osoba urodziła się w roku: ', oldest, 'i ma ona obecnie', wiekOldest, 'lat');
    console.log('Najmłodsza osoba urodziła się w roku:', youngest, 'i ma obecnie', wiekYoungest, 'lat');

}

urodziny([1981, 2000, 1950, 1966, 1856])