/* zadanie 2
W pliku counter.html znajduje się pusty formularz, umieść w nim pole textarea. 
Poniżej pola ma znaleźć się licznik wpisanych aktualnie znaków w to pole np. 63/100. 
Licznik ma zwiększać i zmniejszać swoją wartość po każdym wpisanym/usuniętym znaku. 
Zablokuj możliwość wpisania więcej niż 100 znaków w to pole.
Napis z liczbą wpisanych znaków ma zmieniać kolor:
kolor fontu = liczba wpisanych znaków
zielony 0–33
zółty 34–66
czerwony 67–100
Zadanie rozwiąż w pliku counter.js i pamietaj o podpięciu jQuery.
*/
$(document).ready(function() {
    var textarea = $('form > textarea');
    var counter = $('#counter span');
    textarea.on('keyup', function(event) {
        var length = $(this).val().length;
        counter.text(length);
        if (length <= 33) {
            counter.css('color', 'green'); 
        } else if (length >= 34 && length <= 66) {
            counter.css('color', 'yellow');
        } else {
            counter.css('color', 'red');
        }
        }); 
    });