/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */
/*
//Twój komentarz ...
function jeden() {

    //Twój komentarz ...
    var zmienna1 = 1;

    //Twój komentarz ...
    function dwa() {

        //Twój komentarz ...
        console.log(zmienna1);

        //Twój komentarz ...
        var zmienna2 = 3;
    }

    //Twój komentarz ...
    dwa();

    //Twój komentarz ...
    console.log(zmienna2)
}

//Twój komentarz ...
jeden()

*/

function jeden() {
    var zmienna1 = 1;
    function dwa() {
        console.log(zmienna1);
        var zmienna2 = 3;
    }
    dwa();                      // funkcja jeden nie ma dostepu do zmiennej podfunkcji dwa
    console.log(zmienna2)
}
jeden();