/*
Zadanie A1
Stwórz funkcję, która zwraca (przez return) sumę trzech liczb. 
Liczby powinny być przekazane do funkcji jako argumenty.
Przykład:
input -> 1, 2, 3
output -> 6
 */

function dodawanie(a, b, c) {
    return a + b + c;    
}
dodawanie(1,2,3)

/* Zadanie A2
Napisz funkcję liczącą pole i obwód okręgu. Funkcja przyjmuje promień tej figury 
geometrycznej jako argument. Jeśli przekazany argument jest nieodpowiedniego typu, 
to funkcja ma zwrócić false.
*/

function kolkoInfo(promien) {
    if (typeof promien == typeof 10) {
        var pole = promien * promien * Math.PI;
        var obwod = promien * 2 * Math.PI;
        console.log('Pole to: ', pole);
        console.log('Obwód to: ', obwod);
        return (pole, obwod);
    } else {
        return false;
    }
}

kolkoInfo(1)

/* zadanie B1
Stwórz funkcję anonimową i przypisz ją do zmiennej. 
Zadaniem funkcji jest wypisanie dziesięć razy: 
"Gdy piszę kod zawsze i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".
*/

var powitanie = function(a) {
    console.log('Witaj', a);
}

for (var i=0; i<10; i++) {
    powitanie('Al Bundy');
}

/* zadanie B2
Napisz funkcję calculateTip(amount, raiting), która będzie przyjmować dwa argumenty:
1 -kwotę do zapłaty,
2 - opis słowny obsługi. Jeśli opis jest taki jak zdefiniowano poniżej, 
funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany – funkcja powinna 
zwracać napis "Opis nieczytelny".
Opis może przyjmować następujące wartości: 
"Bardzo dobra obsluga" => 25% napiwku, 
"Dobra obsluga" => 20% napiwku, 
"Srednia obsluga" =>15% napiwku, 
"Zla obsluga" => 0% napiwku.
Przykład:
input -> 100, "Bardzo dobra obsluga"
output -> 25

*/

var calculateTip = function (amount, raiting) {
    var tip = 0;
    switch(raiting) {
        case "Bardzo dobra obsługa": tip = 0.25; break;
        case "Dobra obsługa": tip = 0.2; break;
        case "Średnia obsługa": tip = 0.15; break;
        case "Zła obsługa": tip = 0; break;
        default:
            return "Opis nieczytelny";
    }
    return amount * tip;
}

console.log('Nalrżny napiwek obslugi to 25:', calculateTip( 100, "Bardzo dobra obsługa") == 25);

console.log('Nalrżny napiwek obslugi to 15:', calculateTip(100,  "Dobra obsługa") == 15);
