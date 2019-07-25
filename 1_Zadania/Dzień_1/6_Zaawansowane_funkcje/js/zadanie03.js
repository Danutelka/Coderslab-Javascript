/* zadanie 3 
Zajrzyj do pliku zadanie03.js i przetestuj działanie funkcji sortArray. 
Aby potwierdzić zrozumienie tematu spróbuj napisać komentarz przy każdej z linii kodu.

 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 /*

function sortArray() {  //Twój komentarz ...
    var points = [41, 3, 6, 1, 114, 54, 64];  //Twój komentarz ...
    points.sort(function(a, b) {  //Twój komentarz ...
        return a-b;  //Twój komentarz ...
    });
    return points;  //Twój komentarz ...
}
sortArray();  //Twój komentarz ...
*/

function sortArray() { //zdefiniowanie funkcji
    var points = [41, 3, 6, 1, 114, 54, 64]; // zdefiniowanie tablicy
    points.sort(function(a, b) { //posortowanie tablicy
        return a-b; // jezeli dac b - a to bedzie sortowac odwrotnie
    });
    return points;
}

console.log(sortArray());

