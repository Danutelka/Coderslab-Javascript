/*
Zajrzyj do pliku zadanieB3.js. Znajdziesz tam kod. Przeanalizuj go i opisz w komentarzu
 zauważone błędy. Postaraj się nie uruchamiać kodu zanim nie znajdziesz błędów.
*/
//Komentarze do kodu umieść bezpośrednio pod linią w której znaleziono błąd

var i = 1;
while (i < 100) { //co to jest wartosc true
    console.log('Aktualna wartość zmiennej i to: ' + i);
    i = i * 2;
}

var year = 2016;
if(year % 4 == 0) { //powinno być samo modulo %4 ==0
    console.log('Rok przestępny');
} else { //klamerki
    console.log('Rok nieprzestępny');
}

console.log('Błędy poprawione, więc ten tekst będę widzieć w konsoli po uruchomieniu skryptu HURRRA!!!');
// kropka przed hurra o skasowania
