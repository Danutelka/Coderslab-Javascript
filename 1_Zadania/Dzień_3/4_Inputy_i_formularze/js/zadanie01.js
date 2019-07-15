/**
 * Created by Jacek on 2016-01-12.
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