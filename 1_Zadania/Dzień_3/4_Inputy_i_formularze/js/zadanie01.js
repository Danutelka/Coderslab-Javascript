/* zadanie 1
Walidacja karty kredytowej. Zadanie polega na walidacji kart kredytowych wpisywanych 
w formularz na stronie. Walidacja ma następować w czasie rzeczywistym (czyli po 
wprowadzeniu każdej cyfry). Nazwa karty ma być wpisana, jak tylko jest możliwe
jej ustalenie. Poprawność karty ma być pokazana po wpisaniu odpowiedniej liczby cyfr.
Zasady rozpoznawania kart:
1 - Karty Visa zaczynają się od cyfry 4.
2 - Karty Mastercard zaczynają się od cyfry 5.
3 - Karty American Express zaczynają się od cyfry 3. Następną cyfrą musi być 4 lub 7.
Zasady walidacji kart:
1 - Karty Visa mają od 13 do 16 cyfr.
2 - Karty Mastercard mają równo 16 cyfr.
3 - Karty American Express mają równo 15 cyfr.
 */

document.addEventListener('DOMContentLoaded', function() {
    var card = document.getElementById('card');
    card.addEventListener('keyup', function(event) {
        var text = this.value;
        if(text.length > 0) {
            switch(text[0]) {
                case '4': console.log('Visa');
                    if(text.length >= 13 && text.length <= 16) {
                     console.log('numer karty jest chyba poprawny');
                    };
                    break;
                case '5': console.log('Mastercard');
                    if(text.length == 16) {
                     console.log('numer karty jest chyba poprawny');
                    };break;
                case '3': console.log('American Express');
                    if(text.length == 15) {
                        if(text[1] == '4' || text[1] == '7') {
                            console.log('numer karty jest chyba poprawny');
                        }
                    };
                break;
            }
        }
    })
 });