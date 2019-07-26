/*  zadanie 1
Napisz funkcję getNumber, która ma przyjmować dwa argumenty – liczbę i tablicę. 
Funkcja ta ma zwracać wartość true lub false, w zależności od tego czy podana liczba 
znajduje się w tablicy czy nie.
    getNumber(2, [33, 54, 2, 1, 4, 100]) => true
    getNumber(5, [33, 54, 2, 1, 4, 100] ) => false
*/
function getNumber(a, array) {
    if (array.includes(a)) {
        console.log('true');
    } else {
        console.log('false');
    }
}
console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

/* zadanie 2
Napisz funkcję createIdentityMatrix, która przyjmuje dwa argumenty w postaci dwóch 
liczb całkowitych rows i columns. Niech funkcja zwraca tablicę 2-wymiarową. 
Niech tablica wygląda w następujący sposób:
createIdentityMatrix(4,4) =>
[ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ];
Jest to tak zwana macierz jednostkowa, czyli taka, która ma na przekątnej jedynki. 
Musisz użyć pętli zagnieżdżonych. Pamiętaj o tym, że tablica ta ma zostać zwrócona 
przez funkcję inaczej zadanie będzie nie zaliczone.
*/
function createIdentityMatrix(rows, columns) {
    var matrix = new Array(columns)
    for (i=0; i < columns; i++) {
        matrix[i] = new Array(rows)
        for (j=0; j < rows; j++) {
            if (i ===j) {
                matrix[i][j] = 1 
            } else {
                matrix[i][j] = 0
            }
            }
        }
        return (matrix)
    }

console.log(createIdentityMatrix(4,4));

/* zadanie 3
Za pomocą kontruktora stwórz funkcję Tree. Niech funkcja ta ma jedną właściwość type, 
która będzie przechowywać typ drzewa. Następnie stwórz 2-3 instancje (obiekty) 
na podstawie konstruktora Tree, będące różnymi drzewami.
Dopisz do konstruktora również metodę bloom(), która będzie zwracała tekst 
"I'm blooming". Sprawdź za pomocą metody hasOwnProperty(), 
czy metoda ta została stworzona dla każdej instancji osobno? 
Jeśli tak zoptymalizuj kod dodając ją do prototypu funkcji Tree.
*/
function Tree (type) {
    this.type =type;
    
    this.bloom = function() {
        console.log (this.type + "I'm blooming")
    }
}  
var treeOne = new Tree('choinka')
var treeTwo = new Tree('liściaste')
var treeThree = new Tree('kaktus')

console.log(treeOne.hasOwnProperty("bloom"));
console.log(treeThree.type);
/*
function Tree (type) {
    return type + " " +"I'm blooming";
} 
var result = Tree ("glon");
console.log(result);

/*   
var treeOne = new Tree('choinka')
var treeTwo = new Tree('liściaste')
var treeThree = new Tree('kaktus')

console.log(treeOne.hasOwnProperty("bloom"));
console.log(treeThree.type);
*/

/* zadanie 1 dodatkowe
Napisz funkcję addTheSameNumbers, która ma przyjmować dwa argumenty – liczbę i tablicę. 
Funkcja ta ma zwracać sumę wszystkich elementów tablicy, które są równe liczbie podanej 
jako pierwszmy argument funkcji. Jeżeli liczby, podanej jako pierwszy argument funkcji 
nie ma w tablicy, zwróć null.

addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null
*/

var addTheSameNumbers = function(inNumber, inArray) {
    var sum = 0;
    var found = false;
     for (var  i = 0; i< inArray.length; i++) {
        if (inArray[i] === inNumber) {
            sum += inNumber;
            found = true;
        }
    }
    if (!found) return null;
        else return sum;
    }

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));


/* zadanie 2 dodatkowe
Napisz funkcję factors, która ma przyjmować tylko jeden argument – liczbę, 
która musi być większa od 0. Funkcja ta ma zwracać tablicę zawierającą wszystkie 
dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub 
równa 0, to funkcja ma zwracać pustą tablicę.

factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
*/

function factors(liczba) {
    var tablica = []
    if (liczba <= 0) {
        return (tablica)
    } else {
        var i = 1
        while (i <= liczba) {
            while (liczba % i == 0) {
                tablica.push(liczba / i)
                i++
            }
            i++
        }
        return (tablica)
    }
}
console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));


/* zadanie 3 dodatkowe
Napisz funkcję getMissingElement, która ma przyjmować tylko jeden argument – 
tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać pierwszą 
brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). 
Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać null.

getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]) => -1
*/

function getMissingElement(array) {
    var missing = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] > 1) {
            missing = array[i] + 1;
        }
    }
    return missing
}

console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));


/* zadanie 4 dodatkowe
Napisz funkcję getLastNumbers, która ma przyjmować dwa argumenty – liczbę i tablicę. 
Funkcja ta ma zwracać tablicę skadającą się z tylu ostatnich elementów ile wskazuje 
pierwszy argument - liczba. Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, 
funkcja ma zwracać pustą tablicę.

getLastNumbers(2, [1,2,3,4,5,6,7]) => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]) => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]) => []
getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]) => []
*/
function getLastNumbers(liczba, tablica) {
    if (typeof liczba === "number") {
        result = tablica.slice(liczba * -1)
    } else {
        tablica = []
        result = tablica
    }
    return (result)
}
console.log(getLastNumbers(2, [1,2,3,4,5,6,7])); //=>[6, 7]
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15])); //=> [12, 13, 14, 15]
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4])); //=> []
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4])); //=> []