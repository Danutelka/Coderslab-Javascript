/* zadanie 1 
Napisz funkcję boilEgg, która jako argument przyjmie czas w sekundach, a jej wywołanie 
spowoduje, że po zadanym czasie na konsoli wyświetli się komunikat "jajko ugotowane". 
Dodatkowo co 5 sekund, podczas gotowania w konsoli wyświetl napis "jajko się gotuje". 
Przetestuj swoją funkcję dla 30 sekund (czas gotowania).
 
var id = setInterval(function() {
    console.log('jestem wywoływana co dwie sekundy');
}, 2000
);
clearInterval(id)
*/

function SayJajkoSieGotuje() {
    console.log('Jajko sie gotuje')
}

function boilEgg(seconds) {
    var intr = setInterval(
        SayJajkoSieGotuje, // funkcja zdefiniowana
        seconds * 1000 // wywolanie co np. 5 * 1000ms = 5s
    );
    setTimeout(
        function () { // funkcja anonimowa
            console.log('Jajko sie ugotowalo');
            clearInterval(intr); // usuwa zdefiniowany interwał
        }, seconds * 1000 // wywolanie co okreslony czas jako parametr funkcji boilEgg
    )};

boilEgg(3)

/* zadanie 4
Napisz funkcję, która jako parametry przyjmuje liczby i wyświetla największą z nich. 
Skorzystaj ze zmiennej arguments.
Przykład:
input -> 5, 29, 6, 4, 34, 56, 2, 3
output -> 56
*/
var bigest = function (lista) {
    lista.sort();
    var newList = lista.sort(function (a, b) {
        return a - b;
    })
    console.log(newList[newList.length - 1])
}

bigest([5, 29, 6, 4, 34, 56, 2, 3]);