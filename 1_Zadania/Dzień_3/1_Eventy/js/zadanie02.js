/* zadanie 2
Na stronie znajdują się trzy guziki. Napisz jeden event dla wszystkich guzików, 
który ma być podpięty do elementu rodzica o id bubblingButtons, który spowoduje, 
że po kliknięciu licznik znajdujący się w atrybucie data-counter zwiększy wartość 
o jeden. Pamiętaj, żeby wszystko pisać w evencie DOMContentLoaded.
*/

document.addEventListener("DOMContentLoaded", function () {
    var bubblingButtons = document.getElementById('bubblingButtons');
    var buttons = bubblingButtons.querySelectorAll('button');
    console.log(buttons);

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            this.dataset.counter = parseInt(this.dataset.counter) + 1;
        });
    });
});