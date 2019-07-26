/* zadanie 2
W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). 
Po kliknięciu w którykolwiek z nich – element, który znajduje się bezpośrednio po nim, 
powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny). 
Rozwiązanie musi spełniać następujące założenia:
1 - Na wszystkie przyciski musi być założony ten sam event.
2 - Następny element ma być wyszukiwany zależnie od położenia this.
3 - Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, 
    czy następny element nie równa się null).
 */

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.button');
 
    links.forEach(function(link) {
 
        link.addEventListener('click', function(event) {
            var brother = this.nextElementSibling;
            if (brother) { // sprawdzam czy nie jest null
                if (brother.style.display != 'none') {
                    brother.style.display = 'none';
                } else {
                    brother.style.display = 'block';
                }
            }
        })
 
    })
 });