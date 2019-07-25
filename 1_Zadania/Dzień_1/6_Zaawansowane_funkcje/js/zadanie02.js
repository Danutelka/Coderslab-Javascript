/* zadanie 2 
Zajrzyj do pliku zadanie02.js i przetestuj działanie obu funkcji. 
Dlaczego funkcja o nazwie jeden nie ma dostępu do zmiennej o nazwie zmienna2? 
Aby potwierdzić zrozumienie tematu spróbuj napisać komentarz przy każdej z linii kodu.

 Zagnieżdżanie funkcji.
 Prześledź krok po kroku każdą linijkę kodu. Każdą! Spróbuj napisać komentarze dla każdej z linijek kodu
 
function jeden() {  //Twój komentarz ...
    var zmienna1 = 1; //Twój komentarz ...
    function dwa() {  //Twój komentarz ...
        console.log(zmienna1);  //Twój komentarz ...
        var zmienna2 = 3; //Twój komentarz ...
    }
    dwa();  //Twój komentarz ...
    console.log(zmienna2) //Twój komentarz ...
}
jeden()  //Twój komentarz ...
*/

function jeden() {  //defincja funckji jeden
    var zmienna1 = 1; //ustaw zmienna1 na 1
    function dwa() { //definicja funkcji dwa
        console.log(zmienna1); //wyswietlenie zmiennej 1
        var zmienna2 = 3; //ustawienie zmienna2 3
    }
    dwa();  //wywołanie zmiennej 1 w funkcji dwa
    // funkcja jeden nie ma dostepu do zmiennej podfunkcji dwa
    // zmienna dwa jest widziana tylko w ciele funkcji dwa
    console.log(zmienna2) //wyswietlenie zmiennej 2
}
jeden(); //wywołanie fukcji jeden w której jest fukcja dwa a w niej wyswietlanie zmiennej 1 
