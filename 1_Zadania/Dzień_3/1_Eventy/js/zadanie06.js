/* zadanie 6
Na stronie znajdują się trzy elementy div, dla których napisz wspólny event zmieniający 
kolor tła tylko w klikniętym divie. Użyj do tego słowa kluczowego this. Pamiętaj, żeby 
wszystko pisać w evencie DOMContentLoaded.
Hint: Żeby uzyskać losowy kolor użyj poniższego kodu:
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
*/

document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box){
        box.addEventListener('click', function() {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        })
    })
});