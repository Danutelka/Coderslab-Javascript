/* zadanie 1
W pliku znajdują się trzy listy (każda osadzona w elemencie div). 
Po najechaniu myszką na element div zmienić się mają kolory tła elementów jego listy. 
Odpowiednio:
1 - Pierwszy element w liście ma mieć kolor czerwony.
2 - Ostatni element w liście ma mieć kolor niebieski.
3 - Wszystkie inne elementy mają mieć kolor zielony.
4 - Po najechaniu myszką na element div dodaj mu klasę hovered, ale tylko jemu.
Rozwiązanie musi spełniać następujące założenia:
1 - Na wszystkie divy musi być założony ten sam event.
2 - Elementy listy mają być wyszukane w zależności od this.
 */

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('.listContainer');

    divs.forEach(function(div) {
        div.addEventListener('mouseover', function(event) {
            this.classList.add('hovered');
        })

        var list = div.querySelector('.list');
        list.firstElementChild.addEventListener('mouseover', function(event) {
            this.style.backgroundColor = 'red';
        })

        list.lastElementChild.addEventListener('mouseover', function(event) {
             this.style.backgroundColor ='blue';
        });

        for(var i = 1; i < list.children.length - 1; i++) {
            list.children[i].addEventListener('mouseover', function(event) {
                this.style.backgroundColor = 'green';
            });
        }
    })
});