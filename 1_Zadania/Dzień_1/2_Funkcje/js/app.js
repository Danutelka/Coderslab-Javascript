/**
 * Created by Jacek on 2016-01-11.
 */
// Zadanie A1
function dodawanie(a, b, c) {
    return a + b + c;    
}
dodawanie(1,2,3)

 // Zadanie A2
function kolkoInfo(promien) {
    if (typeof promien == typeof 10) {
        var pole = promien * promien *Math.PI;
        var obwod = promien * 2 * Math.PI;
        console.log('Pole to: ', pole);
        console.log('Obwód to: ', obwod);
        return (pole, obwod);
    } else {
        return false;
    }
}

kolkoInfo(1)

// zadanie B1

var powitanie = function(a) {
    console.log('Witaj', a);
}

for (var i=0; i<10; i++) {
    powitanie('Al Bundy');
}

//zad B2


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
